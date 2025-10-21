import styles from "@/styles/footerTagline.module.css";

export default function footerTagline({ tagline }) {
  return <p className={styles.tagline}>{tagline}</p>;
}
