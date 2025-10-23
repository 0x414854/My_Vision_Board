"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/login.module.css";
import { useRouter } from "next/navigation";

import BackArrow from "@/public/backArrow.png";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleResendLogin(e) {
    e.preventDefault();
    setError("");

    // ⛔️ ne pas mettre redirect:true, car sinon signIn gère tout et ton callbackUrl ne passe pas bien
    const res = await signIn("resend", {
      email,
      callbackUrl: "/dashboard", // ✅ c’est ce qui sera utilisé dans le lien magique
      redirect: false, // on désactive la redirection immédiate, car l’utilisateur doit cliquer sur le lien reçu
    });

    if (res?.ok || !res?.error) {
      alert(
        "✅ Un lien magique de connexion vient d’être envoyé à votre email !"
      );
    } else {
      setError("Erreur : impossible d’envoyer le lien de connexion.");
    }
  }

  return (
    <main className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <div className={styles.backHomeContainer}>
          <Link href="/">
            <Image src={BackArrow} width={20} height={20} />
            <p>Back Home</p>
          </Link>
        </div>
        <h1 className={styles.title}>
          Bienvenue sur <span className={styles.name}>MyVisionBoard</span>
        </h1>
        <p className={styles.subtitle}>
          Connectez-vous pour suivre vos objectifs
        </p>
        <div className={styles.container}>
          <div className={styles.buttons}>
            <button
              className={styles.oauthButton}
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              Se connecter avec GitHub
            </button>

            <button
              className={styles.oauthButton}
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              Se connecter avec Google
            </button>
          </div>

          <div className={styles.separator}>ou</div>

          {/* Formulaire credentials */}
          <div className={styles.formContainer}>
            <form
              className={styles.credentialForm}
              onSubmit={handleResendLogin}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> */}
              <button type="submit" className={styles.submitButton}>
                Se connecter
              </button>
              {error && <p className={styles.error}>{error}</p>}
            </form>

            <p className={styles.signup}>
              Pas encore de compte ?{" "}
              <Link href="/register" className={styles.signupLink}>
                S’inscrire
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
