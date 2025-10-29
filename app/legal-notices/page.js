import styles from "@/styles/legalNotices.module.css";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.png";
import Footer from "@/components/footer/footer";

export default function LegalNotices() {
  return (
    <main className={styles.mainContainer}>
      <Link href="/" className={styles.home}>
        <Image src={Logo} width={180} height={50} alt="test logo" />
      </Link>
      {/* <Header /> */}
      <h1 className={styles.title}>Mentions Légales</h1>
      {/* Contenu des sections */}
      <section className={styles.sectionsContainer}>
        {/* Éditeur */}
        <section className={styles.section} id="editeur">
          <h2 className={styles.sectionTitle}>1 - Éditeur du site</h2>
          <p className={styles.sectionText}>
            En vertu de{" "}
            <Link
              href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049577522"
              className={styles.link}
              target="_blank"
            >
              l’article 6 de la loi n° 2004-575 du 21 juin 2004
            </Link>{" "}
            pour la confiance dans l’économie numérique, il est précisé aux
            utilisateurs du site internet{" "}
            <strong>https://myvisionboard.life/</strong> l’identité des
            différents intervenants dans le cadre de sa réalisation et de son
            suivi :
          </p>
          <p className={styles.sectionText}>
            <strong>Simplitech</strong> – ENTREPRENEUR INDIVIDUEL MONSIEUR
            ARTHUR BARRAUD (SIMPLITECH)
            <br />
            <span className={styles.infos}>Siège social</span> : 18 rue des
            bergers, 01170 gex <br />
            Immatriculée au RCS - <br />
            <span className={styles.infos}>SIRET</span> : 992 966 879 000 15
            <br />
            {/* <span className={styles.infos}>TVA intracommunautaire</span> : FR12
            345678901 <br /> */}
            <span className={styles.infos}>Directeur de la publication</span> :
            Arthur BARRAUD <br />
            <span className={styles.infos}>Contact</span> :{" "}
            <Link
              href="mailto:arthur.barraud@proton.me"
              className={styles.link}
            >
              arthur.barraud@proton.me
            </Link>{" "}
            – <span className={styles.infos}>Tél.</span> :{" "}
            <Link href="tel:+33660988623" className={styles.link}>
              06 60 98 86 23
            </Link>
            <br />
            <strong>Autres contributeurs : </strong>
            <Link href="https://www.arthurbarraud.me" className={styles.link}>
              Simplitech - Arthur Barraud
            </Link>
          </p>
        </section>
        <div className={styles.separator}></div>
        {/* Hébergeur */}
        <section className={styles.section} id="hebergeur">
          <h2 className={styles.sectionTitle}>2 - Hébergeur</h2>
          <p className={styles.sectionText}>
            Vercel Inc. <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis <br />
            Site web :{" "}
            <Link
              href="https://vercel.com"
              className={styles.link}
              target="_blank"
            >
              https://vercel.com
            </Link>
          </p>
        </section>
        <div className={styles.separator}></div>

        {/* Propriété intellectuelle */}
        <section className={styles.section} id="propriete-intellectuelle">
          <h2 className={styles.sectionTitle}>3 - Propriété intellectuelle</h2>
          <p className={styles.sectionText}>
            <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> est
            propriétaire des droits de propriété intellectuelle et détient les
            droits d’usage sur tous les éléments accessibles sur le site
            internet, notamment les textes, images, graphismes, logos, vidéos,
            architecture, icônes et sons.
            <br />
            <br />
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong>
            .
            <br />
            <br />
            Toute exploitation non autorisée du site ou de l’un quelconque des
            éléments qu’il contient sera considérée comme constitutive d’une
            contrefaçon et poursuivie conformément aux dispositions des articles{" "}
            <Link
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082"
              className={styles.link}
              target="_blank"
            >
              L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </Link>
          </p>
        </section>
        <div className={styles.separator}></div>

        {/* Données personnelles */}
        <section className={styles.section} id="rgpd">
          <h2 className={styles.sectionTitle}>
            4 - Données personnelles / RGPD
          </h2>
          <p className={styles.sectionText}>
            Les données personnelles collectées via ce site (formulaire de
            réservation, formulaire de contact, inscription à la newsletter)
            sont utilisées exclusivement par{" "}
            <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> dans le cadre
            des finalités suivantes : gestion des réservations, communication
            avec l’utilisateur et envoi de newsletters (si consentement donné).
          </p>
          <p className={styles.sectionText}>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez d’un
            droit d’accès, de rectification, de suppression, de limitation du
            traitement, d’opposition et de portabilité de vos données. Vous
            pouvez retirer votre consentement à tout moment.
          </p>
          <p className={styles.sectionText}>
            Pour exercer vos droits, contactez-nous à :{" "}
            <Link
              href="mailto:arthur.barraud@proton.me"
              className={styles.link}
            >
              arthur.barraud@proton.me
            </Link>
            .
          </p>
          <p className={styles.sectionText}>
            Pour plus d’informations sur la collecte et le traitement de vos
            données, consultez notre{" "}
            <Link href="/privacy-policy" className={styles.link}>
              Politique de confidentialité
            </Link>
            .
          </p>
          <p className={styles.sectionText}>
            Les données personnelles sont conservées uniquement pour la durée
            nécessaire aux finalités pour lesquelles elles ont été collectées,
            sauf obligation légale ou réglementaire contraire.
          </p>
        </section>

        <div className={styles.separator}></div>

        {/* Cookies */}
        <section className={styles.section} id="cookies">
          <h2 className={styles.sectionTitle}>5 - Cookies</h2>
          <p className={styles.sectionText}>
            La navigation sur le site{" "}
            <span className={styles.website}>
              https://www.myvisionboard.life
            </span>{" "}
            est susceptible de provoquer l’installation de cookie(s) sur
            l’ordinateur ou le terminal de l’utilisateur.
          </p>
          <p className={styles.sectionText}>
            Un « cookie » est un fichier de petite taille, qui enregistre des
            informations relatives à la navigation d’un utilisateur sur un site.
            Les données ainsi obtenues permettent par exemple de faciliter la
            navigation ultérieure sur le site ou de réaliser des mesures de
            fréquentation.
          </p>
          <div className={styles.sectionText}>
            <p>Les cookies utilisés sur ce site sont les suivants :</p>
            <ul>
              <li>
                <strong>Cookies nécessaires</strong> : indispensables au bon
                fonctionnement du site (identifiants de connexion (via Auth.js),
                adresse e-mail).
              </li>
              <li>
                <strong>Cookies de mesure d’audience</strong> : permettent de
                mesurer la fréquentation et d’améliorer l’expérience utilisateur
                (statistiques anonymisées via Google Analytics).
              </li>
              <li>
                <strong>Cookies publicitaires</strong> (si applicable) : servent
                à personnaliser les publicités sur d’autres sites.
              </li>
            </ul>
          </div>

          <p className={styles.sectionText}>
            Vous avez la possibilité d’accepter ou de refuser les cookies en
            modifiant les paramètres de votre navigateur. Aucun cookie non
            essentiel ne sera déposé sans votre consentement. Lors de votre
            première visite, un bandeau d’information vous permet d’exprimer vos
            choix.
          </p>
          <p className={styles.sectionText}>
            La durée maximale de conservation des cookies est de 13 mois à
            compter de leur dépôt sur votre terminal.
          </p>
          <p className={styles.sectionText}>
            Conservation des données :<br />
            Les données sont conservées pendant toute la durée d’utilisation du
            service, puis supprimées sur demande ou après suppression du compte.
          </p>
          <p className={styles.sectionText}>
            Pour plus d’informations sur la façon dont nous faisons usage des
            cookies, consultez notre{" "}
            <a href="/privacy-policy" className={styles.link}>
              Politique de confidentialité
            </a>
            .
          </p>
        </section>

        <div className={styles.separator}></div>

        {/* Responsabilité */}
        <section className={styles.section} id="responsabilite">
          <h2 className={styles.sectionTitle}>6 - Responsabilité</h2>

          <p className={styles.sectionText}>
            <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> ne pourra
            être tenu pour responsable des dommages directs et indirects causés
            au matériel de l’utilisateur, lors de l’accès au site{" "}
            <span className={styles.website}>
              https://www.myvisionboard.life
            </span>
            .
          </p>

          <p className={styles.sectionText}>
            <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> décline toute
            responsabilité quant à l’utilisation qui pourrait être faite des
            informations et contenus présents sur le site.
          </p>

          <p className={styles.sectionText}>
            Malgré tous les soins apportés à la rédaction et à la mise à jour
            des contenus, <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong>{" "}
            ne peut être tenu responsable des éventuelles erreurs ou omissions
            présentes sur le site. Le site peut être suspendu ou interrompu sans
            préavis en cas de maintenance ou de problème technique.
          </p>

          <div className={styles.sectionText}>
            <p className={styles.sectionText}>
              <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> s’engage à
              sécuriser au mieux le site. Cependant, sa responsabilité ne pourra
              être engagée en cas de :
            </p>
            <ul>
              <li>
                Force majeure (événements naturels, catastrophes, grèves,
                incidents légaux ou réglementaires imprévus) ;
              </li>
              <li>
                Panne, dysfonctionnement ou indisponibilité du serveur ou du
                réseau internet ;
              </li>
              <li>
                Intrusion, piratage ou actions malveillantes d’un tiers
                impactant le site ou les données ;
              </li>
              <li>
                Importation ou installation de données indésirables sur le site
                à son insu.
              </li>
            </ul>
          </div>

          <p className={styles.sectionText}>
            Des espaces interactifs (formulaire de contact, réservations, etc.)
            sont à la disposition des utilisateurs.{" "}
            <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> se réserve le
            droit de supprimer, sans mise en demeure préalable, tout contenu
            déposé dans ces espaces qui contreviendrait à la législation
            applicable en France, notamment aux dispositions relatives à la
            protection des données.
          </p>

          <p className={styles.sectionText}>
            Le cas échéant,{" "}
            <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> se réserve
            également la possibilité de mettre en cause la responsabilité civile
            et/ou pénale de l’utilisateur, notamment en cas de message à
            caractère raciste, injurieux, diffamant ou pornographique, quel que
            soit le support utilisé (texte, photographie, etc.).
          </p>
        </section>

        <div className={styles.separator}></div>

        {/* Liens externes */}
        <section className={styles.section} id="liens-externes">
          <h2 className={styles.sectionTitle}>7 - Liens externes</h2>
          <p className={styles.sectionText}>
            Le site{" "}
            <span className={styles.website}>
              https://www.myvisionboard.life
            </span>{" "}
            peut contenir des liens hypertextes redirigeant vers d’autres sites
            internet exploités par des tiers. Ces liens sont fournis uniquement
            à titre informatif.
          </p>
          <p className={styles.sectionText}>
            <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> n’exerce
            aucun contrôle sur le contenu, l’exactitude, la légalité ou la
            disponibilité de ces sites externes et ne saurait en aucun cas être
            tenu responsable des dommages, directs ou indirects, résultant de
            l’accès ou de l’utilisation de ces ressources tierces.
          </p>
          <p className={styles.sectionText}>
            L’insertion de tels liens n’implique aucune approbation ni
            association de
            <strong> MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong> avec les
            exploitants de ces sites. L’utilisateur est invité à consulter les
            conditions générales d’utilisation et les politiques de
            confidentialité applicables à chaque site tiers avant toute
            navigation ou interaction.
          </p>
        </section>

        <div className={styles.separator}></div>

        {/* Droit applicable */}
        <section className={styles.section} id="droit">
          <h2 className={styles.sectionTitle}>
            8 - Droit applicable et juridiction
          </h2>
          <p className={styles.sectionText}>
            Les présentes mentions légales sont régies par le droit français.
            Tout litige relatif à l’utilisation de ce site relève de la
            compétence exclusive des tribunaux de Paris.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
