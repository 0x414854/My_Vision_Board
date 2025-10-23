import styles from "@/styles/copyright.module.css";
import Heart from "@/public/redHeart.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Copyright() {
  return (
    <section className={styles.copyrightSection}>
      <motion.div
        className={styles.copyright}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span>Copyright 2025 MyVisionBoard ©</span>

        <span>All rights reserved</span>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {" "}
        Made with <Image
          src={Heart}
          width={16}
          height={16}
          alt="heart"
        /> by{" "}
        <Link href="www.arthurbarraud.me" className={styles.link}>
          Arthur BARRAUD
        </Link>
      </motion.span>
    </section>
  );
}
