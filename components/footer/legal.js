import styles from "@/styles/legal.module.css";
import Link from "next/link";

export default function LegalFooter() {
  return (
    <section className={styles.legalSection}>
      <Link href="/legal-notices"> Mentions Légales</Link>
      <Link href="/privacy-policy"> Politique de confidentialité</Link>
    </section>
  );
}
