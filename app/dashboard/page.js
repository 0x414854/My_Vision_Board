"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/dashboard.module.css";

import PenIcon from "@/public/pen-2.png";

import ModalQuote from "@/components/modal/modalQuote";
import ModalGoals from "@/components/modal/modalGoals";
import WeeklyGoalsChart from "@/components/charts/weeklyCharts";
import AllGoalsChart from "@/components/charts/allCharts";
import Copyright from "@/components/footer/copyright";

export default function DashboardPage() {
  const { data: session } = useSession();

  const [displayName, setDisplayName] = useState("Le Rhino");
  const [editingName, setEditingName] = useState(false);

  useEffect(() => {
    if (session?.user?.name) {
      setDisplayName(session.user.name);
    }
  }, [session]);

  const saveName = async () => {
    if (!displayName.trim() || displayName === session.user.name) {
      setEditingName(false);
      return;
    }

    try {
      const res = await fetch("/api/updateName", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email, name: displayName }),
      });

      if (!res.ok) throw new Error("Erreur lors de la mise à jour");

      // ⚡ Forcer la mise à jour de la session NextAuth
      await fetch("/api/auth/session?update", { method: "GET" });

      // Mettre à jour localement pour l'affichage immédiat
      setEditingName(false);
    } catch (err) {
      console.error(err);
      alert("Impossible de mettre à jour le nom");
    }
  };

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [goals, setGoals] = useState({ court: [], moyen: [], long: [] });
  const [completedGoals, setCompletedGoals] = useState([]);

  const [newGoal, setNewGoal] = useState({ text: "", term: "court" });
  const [dailyCount, setDailyCount] = useState(0);
  const [allCount, setAllCount] = useState(0);

  // 🟩 WHY
  const [whys, setWhys] = useState([]);
  const [newWhy, setNewWhy] = useState("");
  // MODAL GOALS
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [goalJustCompleted, setGoalJustCompleted] = useState(null);

  // "weekly" pour la semaine, "all" pour tout
  const [activeChart, setActiveChart] = useState("weekly");

  useEffect(() => {
    // Vérifie la date d'aujourd'hui (au format AAAA-MM-JJ)
    const today = new Date().toISOString().split("T")[0];
    const lastShown = localStorage.getItem("quoteShownDate");

    // Si le modal n’a pas encore été affiché aujourd’hui
    if (lastShown !== today) {
      setShowQuoteModal(true);
    }
  }, []);

  // 🔹 Charger les WHY + Goals
  useEffect(() => {
    if (!session?.user) return;

    async function loadData() {
      try {
        const [goalsRes, whyRes] = await Promise.all([
          fetch("/api/goals"),
          fetch("/api/why"),
        ]);

        const goalsData = await goalsRes.json();
        const grouped = { court: [], moyen: [], long: [] };
        const completed = [];

        goalsData.forEach((g) => {
          if (g.completedAt) {
            completed.push(g); // objectif complété
          } else {
            grouped[g.term].push(g); // objectif actif
          }
        });

        setGoals(grouped);
        setCompletedGoals(completed);

        const todayCount = completed.filter((g) => {
          const completedDate = new Date(g.completedAt);
          const today = new Date();
          return completedDate.toDateString() === today.toDateString();
        }).length;
        setDailyCount(todayCount);

        setAllCount(completed.length);

        const whyData = await whyRes.json();
        setWhys(Array.isArray(whyData) ? whyData : []);
      } catch (err) {
        console.error("Erreur lors du chargement:", err);
      }
    }

    loadData();
  }, [session]);

  // 🟦 Ajouter un WHY
  const addWhy = async () => {
    if (!newWhy.trim()) return;
    const res = await fetch("/api/why", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newWhy }),
    });

    if (!res.ok) return;
    const created = await res.json();
    setWhys((prev) => [created, ...prev]);
    setNewWhy("");
  };

  // 🟥 Supprimer un WHY
  const deleteWhy = async (id) => {
    await fetch("/api/why", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setWhys((prev) => prev.filter((w) => w.id !== id));
  };

  // 🔹 Ajouter un objectif
  const addGoal = async () => {
    if (!newGoal.text.trim()) return;
    const res = await fetch("/api/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    });
    const created = await res.json();
    setGoals((prev) => ({
      ...prev,
      [created.term]: [...prev[created.term], created],
    }));
    setNewGoal({ text: "", term: "court" });
  };

  const deleteGoal = async (id, term) => {
    await fetch("/api/goals", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setGoals((prev) => ({
      ...prev,
      [term]: prev[term].filter((g) => g.id !== id),
    }));
  };

  const toggleGoalDone = async (goal) => {
    const updated = {
      ...goal,
      done: !goal.done,
      completedAt: !goal.done ? new Date().toISOString() : null,
    };

    await fetch("/api/goals", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    if (updated.done) {
      // ✅ 1. Retirer de la liste principale
      setGoals((prev) => ({
        ...prev,
        [goal.term]: prev[goal.term].filter((g) => g.id !== goal.id),
      }));

      // ✅ 2. Ajouter à la liste des accomplis
      setCompletedGoals((prev) => [...prev, updated]);

      // ✅ 3. Mettre à jour les compteurs
      setDailyCount((prev) => prev + 1);
      setAllCount((prev) => prev + 1);

      // ✅ 4. Afficher le modal
      setGoalJustCompleted(goal);
      setShowGoalModal(true);
    } else {
      // 🕐 Si on décoche → retour dans les actifs
      setCompletedGoals((prev) => prev.filter((g) => g.id !== goal.id));
      setGoals((prev) => ({
        ...prev,
        [goal.term]: [...prev[goal.term], updated],
      }));

      // Ajuster les compteurs
      setDailyCount((prev) => (prev > 0 ? prev - 1 : 0));
      setAllCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  // const completedGrouped = {
  //   court: completedGoals.filter((g) => g.term === "court"),
  //   moyen: completedGoals.filter((g) => g.term === "moyen"),
  //   long: completedGoals.filter((g) => g.term === "long"),
  // };

  // 🔹 UI
  if (!session?.user) {
    return (
      <section className={styles.loginPrompt}>
        <p>Vous devez être connecté pour accéder à votre tableau de bord.</p>
        <Link href="/login">
          <button>Connexion</button>
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.dashboard}>
      <>
        {showQuoteModal && (
          <ModalQuote
            onClose={() => {
              const today = new Date().toISOString().split("T")[0];
              localStorage.setItem("quoteShownDate", today); // on enregistre la date du jour
              setShowQuoteModal(false);
            }}
          />
        )}

        {/* Reste du dashboard */}
      </>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          {session.user.image && (
            <Image
              src={session.user.image}
              alt="Photo de profil"
              width={70}
              height={70}
              className={styles.avatar}
            />
          )}
          <h1>
            Bienvenue,{" "}
            {editingName ? (
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                onBlur={saveName}
                onKeyDown={(e) => e.key === "Enter" && saveName()}
                autoFocus
              />
            ) : (
              <span onClick={() => setEditingName(true)}>
                {displayName}{" "}
                <Image
                  src={PenIcon}
                  width={16}
                  height={16}
                  alt="Pencil image"
                />
              </span>
            )}
          </h1>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => setShowQuoteModal(true)}
            className={styles.quoteButton}
            data-text="Citation du jour"
          >
            Citation du jour
          </button>
          <button
            onClick={() => signOut({ redirectTo: "/" })}
            className={styles.logoutBtn}
          >
            Déconnexion
          </button>
        </div>
      </header>

      <section className={styles.whySection}>
        <div className={styles.why}>
          <div className={styles.whyContainer}>
            <h2>💭 Tes WHY</h2>
            {/* <button>Ajouter +</button> */}
          </div>

          <div className={styles.newWhy}>
            <input
              type="text"
              placeholder="Ajouter un WHY..."
              value={newWhy}
              onChange={(e) => setNewWhy(e.target.value)}
            />
            <button onClick={addWhy}>+</button>
          </div>
        </div>

        <ul
          className={whys.length === 0 ? styles.emptyWhysList : styles.whysList}
        >
          {whys.map((w) => (
            <li key={w.id} className={styles.whyItem}>
              <span>{w.content}</span>
              <button onClick={() => deleteWhy(w.id)}>🗑</button>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.goalsSection}>
        <h2>🗂 Tes objectifs</h2>
        <div className={styles.newGoal}>
          <input
            type="text"
            placeholder="Nouvel objectif..."
            value={newGoal.text}
            onChange={(e) =>
              setNewGoal((prev) => ({ ...prev, text: e.target.value }))
            }
          />
          <div>
            <select
              value={newGoal.term}
              onChange={(e) =>
                setNewGoal((prev) => ({ ...prev, term: e.target.value }))
              }
            >
              <option value="court">Court terme</option>
              <option value="moyen">Moyen terme</option>
              <option value="long">Long terme</option>
            </select>
            <button onClick={addGoal}>➕ Ajouter</button>
          </div>
        </div>

        <div className={styles.goalsContainer}>
          {["court", "moyen", "long"].map((term) => (
            <div key={term} className={styles.termRow}>
              <h3>
                {term === "court"
                  ? "⏱ Court terme"
                  : term === "moyen"
                  ? "📆 Moyen terme"
                  : "🏔 Long terme"}
              </h3>
              <ul>
                {goals[term].map((g) => (
                  <li key={g.id} className={styles.goalItem}>
                    <span
                      // onClick={() => toggleGoalDone(g)}
                      className={g.done ? styles.goalDone : ""}
                    >
                      {g.text}
                    </span>
                    <div className={styles.goalActions}>
                      <input
                        type="checkbox"
                        checked={g.done}
                        onChange={() => toggleGoalDone(g)}
                        className={styles.goalCheckbox}
                      />

                      <button onClick={() => deleteGoal(g.id, term)}>🗑</button>
                    </div>
                  </li>
                ))}
              </ul>
              {showGoalModal && (
                <ModalGoals
                  goalText={goalJustCompleted?.text}
                  onClose={() => setShowGoalModal(false)}
                />
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.statsSection}>
        <div className={styles.stats}>
          <div
            className={`${styles.stat} ${
              activeChart === "weekly" && completedGoals.length > 0
                ? styles.activeStat
                : ""
            }`}
            onClick={() => setActiveChart("weekly")}
          >
            <h3>🎯 Objectifs réalisés aujourd’hui</h3>
            <p>{dailyCount}</p>
          </div>
          <div
            className={`${styles.stat} ${
              activeChart === "all" && completedGoals.length > 0
                ? styles.activeStat
                : ""
            }`}
            onClick={() => setActiveChart("all")}
          >
            <h3>🎯 Tout les objectifs réalisés</h3>
            <p>{allCount}</p>
          </div>
        </div>

        {/* Chart dynamique */}
        {completedGoals.length > 0 &&
          (activeChart === "weekly" ? (
            <WeeklyGoalsChart completedGoals={completedGoals} type="weekly" />
          ) : (
            <AllGoalsChart completedGoals={completedGoals} type="all" />
          ))}
      </section>

      <section
        className={
          completedGoals.length === 0
            ? styles.emptyAchievedGoalSection
            : styles.achievedGoalsSection
        }
      >
        <h2>✅ Tes objectifs accomplis</h2>

        <ul className={styles.labels}>
          <li className={styles.label}>
            <span>Court terme</span>
            <div></div>
          </li>
          <li className={styles.label}>
            <span>Moyen terme</span>
            <div></div>
          </li>
          <li className={styles.label}>
            <span>Long terme</span>
            <div></div>
          </li>
        </ul>

        {completedGoals.length === 0 ? (
          <p className={styles.emptyGoals}>
            Aucun objectif complété pour le moment.
          </p>
        ) : (
          <div className={styles.completedContainer}>
            {completedGoals.length === 0 ? (
              <p className={styles.emptyCategory}>
                Aucun objectif complété pour le moment.
              </p>
            ) : (
              <ul className={styles.achievedList}>
                {completedGoals
                  .sort(
                    (a, b) => new Date(b.completedAt) - new Date(a.completedAt)
                  )
                  .map((g) => (
                    <li
                      key={g.id}
                      className={
                        g.term === "court"
                          ? styles.shortAchievedItem
                          : g.term === "moyen"
                          ? styles.mediumAchievedItem
                          : styles.longAchievedItem
                      }
                    >
                      <span className={styles.goalLabel}>{g.text}</span>
                      <div>
                        <span className={styles.goalTermTag}>
                          {g.term === "court"
                            ? "Court"
                            : g.term === "moyen"
                            ? "Moyen"
                            : "Long"}
                        </span>
                        <span className={styles.achievedDate}>
                          {new Date(g.completedAt).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          // <div className={styles.completedContainer}>
          //   {["court", "moyen", "long"].map((term) => (
          //     <div key={term} className={styles.completedTerm}>
          //       {/* <h3>
          //         {term === "court"
          //           ? "⏱ Court terme"
          //           : term === "moyen"
          //           ? "📆 Moyen terme"
          //           : "🏔 Long terme"}
          //       </h3> */}

          //       {completedGrouped[term].length === 0 ? (
          //         <p className={styles.emptyCategory}>Aucun objectif ici.</p>
          //       ) : (
          //         <ul className={styles.achievedList}>
          //           {completedGrouped[term]
          //             .sort(
          //               (a, b) =>
          //                 new Date(b.completedAt || 0) -
          //                 new Date(a.completedAt || 0)
          //             )
          //             .map((g) => (
          //               <li
          //                 key={g.id}
          //                 className={
          //                   term === "court"
          //                     ? styles.shortAchievedItem
          //                     : term === "moyen"
          //                     ? styles.mediumAchievedItem
          //                     : styles.longAchievedItem
          //                 }
          //               >
          //                 <span className={styles.goalLabel}>{g.text}</span>
          //                 <div>
          //                   <span className={styles.goalTermTag}>
          //                     {term === "court"
          //                       ? "Court"
          //                       : term === "moyen"
          //                       ? "Moyen"
          //                       : "Long"}
          //                   </span>
          //                   <span className={styles.achievedDate}>
          //                     {new Date(g.completedAt).toLocaleDateString(
          //                       "fr-FR"
          //                     )}
          //                   </span>
          //                 </div>
          //               </li>
          //             ))}
          //         </ul>
          //       )}
          //     </div>
          //   ))}
          // </div>
        )}
      </section>
      <Copyright />
    </section>
  );
}
