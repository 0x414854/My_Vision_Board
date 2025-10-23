"use client";

import styles from "@/styles/register.module.css";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BackArrow from "@/public/logo2.png";

export function Register() {
  const [status, setStatus] = useState(null);

  const resendAction = async (formData) => {
    const email = formData.get("email");

    setStatus("sending");

    // stocke temporairement le nom pour le transmettre dans le callback URL
    await signIn("resend", {
      email,
      callbackUrl: "/dashboard",
      redirect: false,
    });

    setStatus("sent");
    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  return (
    <main className={styles.registerPage}>
      <Link href="/" className={styles.mobileLogo}>
        <Image
          src={BackArrow}
          width={120}
          height={30}
          alt="Flèche de retour en arrière"
          loading="lazy"
        />
      </Link>
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <Link href="/" className={styles.desktopLogo}>
            <Image
              src={BackArrow}
              width={120}
              height={30}
              alt="Flèche de retour en arrière"
              loading="lazy"
              sizes="(min-width: 768px) 220px, 180px"
            />
          </Link>
          <form action={resendAction} className={styles.form}>
            <label htmlFor="email-resend">
              Email*
              <input
                type="email"
                id="email-resend"
                name="email"
                placeholder="Email"
                required
              />
            </label>

            {status === null && (
              <button type="submit" className={styles.button}>
                Recevoir mon lien de connexion
              </button>
            )}
            {status === "sending" && (
              <button type="submit" disabled className={styles.button}>
                Envoi du lien en cours...
              </button>
            )}
            {status === "sent" && (
              <p>✅ Un lien magique vient d’être envoyé à ton adresse email.</p>
            )}
          </form>
        </div>
        {/* Section explicative */}
        <section className={styles.magicLinkInfo}>
          <h2>Comment ça marche ?</h2>
          <ol>
            <li>1. Tu entres ton adresse email dans le formulaire.</li>
            <li>2. Tu reçois un email contenant ton lien de connexion.</li>
            <li>
              3. Tu cliques sur ce lien pour te connecter automatiquement.
            </li>
          </ol>
          <p>
            <b>Plus besoin de mot de passe</b>, c’est <b>simple</b> et{" "}
            <b>sécurisé</b> !
          </p>
        </section>
      </div>
    </main>
  );
}
