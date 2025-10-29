import styles from "@/styles/footer.module.css";
import Copyright from "@/components/footer/copyright";
import FooterTagline from "./footerTagline";
import LegalFooter from "./legal";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterTagline tagline="✨ MyVisionBoard — transforme tes intentions en actions." />
      <LegalFooter />
      <Copyright />
    </footer>
  );
}
