"use client";

import styles from "@/styles/register.module.css";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Logo from "@/public/logo.png";

import BackArrow from "@/public/backArrowWhite.png";
import BackArrowBlack from "@/public/backArrowWhite.png";

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
      {/* <Link href="/" className={styles.mobileLogo}>
        <Image
          src={Logo}
          width={120}
          height={30}
          alt="Flèche de retour en arrière"
          loading="lazy"
        />
      </Link> */}
      <div className={styles.mainContainer}>
        <motion.div
          className={styles.backHomeContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link href="/login">
            <Image
              src={BackArrow}
              width={20}
              height={20}
              alt="Flèche de retour en arrière à la page d'accueil"
            />
            <p>Back Login</p>
          </Link>
        </motion.div>
        <div className={styles.formContainer}>
          {/* <Link href="/" className={styles.desktopLogo}>
            <Image
              src={Logo}
              width={120}
              height={30}
              alt="Flèche de retour en arrière"
              loading="lazy"
              sizes="(min-width: 768px) 220px, 180px"
            />
          </Link> */}
          <motion.form
            action={resendAction}
            className={styles.form}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
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
          </motion.form>
        </div>
        {/* Section explicative */}
        <section className={styles.magicLinkInfo}>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Comment ça marche ?
          </motion.h2>
          <ol>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              1. Tu entres ton adresse email dans le formulaire.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              2. Tu reçois un email contenant ton lien de connexion.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              3. Tu cliques sur ce lien pour te connecter automatiquement.
            </motion.li>
          </ol>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <b>Plus besoin de mot de passe</b>, c’est <b>simple</b> et{" "}
            <b>sécurisé</b> !
          </motion.p>
        </section>
      </div>
    </main>
  );
}
