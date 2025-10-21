import styles from "@/styles/header.module.css";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo2.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.home}>
        <Image src={Logo} width={180} height={50} alt="test logo" />
      </Link>
      <Link href="/login" className={styles.connectButton}>
        <button>Connexion</button>
      </Link>
    </header>
  );
}
