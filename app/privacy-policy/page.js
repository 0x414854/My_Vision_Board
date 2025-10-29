import styles from "@/styles/privacyPolicy.module.css";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.png";
import Footer from "@/components/footer/footer";

export default function PrivacyPolicy() {
  return (
    <main className={styles.mainContainer}>
      <Link href="/" className={styles.home}>
        <Image src={Logo} width={180} height={50} alt="test logo" />
      </Link>
      <h1 className={styles.title}>Politique de condifentialité</h1>
      <section className={styles.sectionsContainer}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1 – Introduction</h2>
          <p className={styles.sectionText}>
            Le site{" "}
            <strong>My Vision Board (https://www.myvisionboard.life)</strong>{" "}
            est la propriété de{" "}
            <strong>MONSIEUR ARTHUR BARRAUD (SIMPLITECH)</strong>, qui est le
            responsable du traitement de vos données personnelles.
          </p>
          <p className={styles.sectionText}>
            Nous avons adopté la présente Politique de confidentialité, qui
            détermine comment nous traitons les informations collectées par{" "}
            <strong>My Vision Board (https://www.myvisionboard.life)</strong>,
            qui fournit également les raisons pour lesquelles nous devons
            collecter certaines données personnelles vous concernant. Par
            conséquent, vous devez lire cette politique de confidentialité avant
            d’utiliser le site web de{" "}
            <strong>My Vision Board (https://www.myvisionboard.life)</strong>.
          </p>
          <p className={styles.sectionText}>
            Nous prenons soin de vos données personnelles et nous nous engageons
            à en garantir la confidentialité et la sécurité.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            2 – Les informations personnelles que nous collectons
          </h2>
          <p className={styles.sectionText}>
            Lorsque vous visitez le site{" "}
            <strong>My Vision Board (https://www.myvisionboard.life)</strong>
            , nous collectons automatiquement certaines informations sur votre
            appareil : navigateur, adresse IP, fuseau horaire, cookies
            installés, pages visitées, etc.
            <br /> En outre, lorsque vous naviguez sur le site, nous recueillons
            des informations sur les pages Web ou les produits individuels que
            vous consultez, les sites Web ou les termes de recherche qui vous
            ont renvoyé au site et la façon dont vous interagissez avec le site.
            Nous désignons ces informations collectées automatiquement par le
            terme « informations sur les appareils ».
          </p>
          <p className={styles.sectionText}>
            Nous pouvons également collecter les données personnelles que vous
            nous fournissez (nom, adresse, informations de paiement, etc.) lors
            d’une inscription ou commande afin de pouvoir éxecuter le contrat.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            3 – Pourquoi traitons-nous vos données ?
          </h2>
          <p className={styles.sectionText}>
            Notre priorité absolue est la sécurité des données des clients et, à
            ce titre, nous ne pouvons traiter que des données minimales sur les
            utilisateurs, uniquement dans la mesure où cela est absolument
            nécessaire pour maintenir le site web.
          </p>
          <p className={styles.sectionText}>
            Les données collectées automatiquement sont utilisées uniquement
            pour identifier les cas potentiels d’abus et établir des
            informations statistiques anonymisées concernant l’utilisation du
            site web. Ces informations statistiques ne sont par ailleurs pas
            agrégées de manière à pouvoir identifier un utilisateur particulier
            du système.
          </p>
          <p className={styles.sectionText}>
            Vous pouvez visiter le site Web sans nous dire qui vous êtes ni
            révéler d’informations permettant à quelqu’un de vous identifier en
            tant qu’individu spécifique et identifiable. Toutefois, si vous
            souhaitez utiliser certaines fonctionnalités du site web, ou si vous
            souhaitez recevoir notre lettre d’information ou fournir d’autres
            détails en remplissant un formulaire, vous pouvez nous fournir des
            données personnelles, telles que votre adresse électronique, votre
            prénom, votre nom, votre ville de résidence, votre organisation,
            votre numéro de téléphone. Vous pouvez choisir de ne pas nous
            fournir vos données personnelles, mais il se peut alors que vous ne
            puissiez pas profiter de certaines fonctionnalités du site web. Par
            exemple, vous ne pourrez pas recevoir notre bulletin d’information
            ou nous contacter directement à partir du site web. Les utilisateurs
            qui ne savent pas quelles informations sont obligatoires sont
            invités à nous contacter via{" "}
            <Link
              href="mailto:arthur.barraud@proton.me"
              className={styles.link}
            >
              arthur.barraud@proton.me
            </Link>
            .
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4 – Vos droits</h2>
          <div className={styles.sectionText}>
            <p>
              Si vous êtes résident européen, vous disposez des droits suivants
              :
            </p>
            <ul>
              <li>Le droit d’être informé.</li>
              <li>Le droit d’accès.</li>
              <li>Le droit de rectification.</li>
              <li>Le droit à l’effacement.</li>
              <li>Le droit de restreindre le traitement.</li>
              <li>Le droit à la portabilité des données.</li>
              <li>Le droit d’opposition.</li>
              <li>
                Droits relatifs à la prise de décision automatisée et au
                profilage.
              </li>
            </ul>
          </div>
          <p className={styles.sectionText}>
            Pour exercer vos droits, contactez-nous à{" "}
            <Link
              href="mailto:arthur.barraud@proton.me"
              className={styles.link}
            >
              arthur.barraud@proton.me
            </Link>
            .
          </p>
          <p className={styles.sectionText}>
            En outre, si vous êtes un résident européen, nous notons que nous
            traitons vos informations afin d’exécuter les contrats que nous
            pourrions avoir avec vous (par exemple, si vous passez une commande
            par le biais du Site), ou autrement pour poursuivre nos intérêts
            commerciaux légitimes énumérés ci-dessus. En outre, veuillez noter
            que vos informations peuvent être transférées en dehors de l’Europe,
            y compris au Canada et aux États-Unis.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5 – Liens vers d’autres sites</h2>
          <p className={styles.sectionText}>
            Notre site web peut contenir des liens vers d’autres sites web qui
            ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes
            pas responsables de ces autres sites web ou des pratiques de
            confidentialité des tiers. Nous vous encourageons à être attentif
            lorsque vous quittez notre site Web et à lire les déclarations de
            confidentialité de chaque site Web susceptible de recueillir des
            informations personnelles.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6 – Sécurité des informations</h2>
          <p className={styles.sectionText}>
            Nous sécurisons les informations que vous fournissez sur des
            serveurs informatiques dans un environnement contrôlé et sécurisé,
            protégé contre tout accès, utilisation ou divulgation non autorisés.
            Nous maintenons des mesures de protection administratives,
            techniques et physiques raisonnables pour nous protéger contre
            l’accès, l’utilisation, la modification et la divulgation non
            autorisés des données personnelles sous son contrôle et sa garde.
            Toutefois, aucune transmission de données sur Internet ou sur un
            réseau sans fil ne peut être garantie.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7 – Divulgation légale</h2>
          <p className={styles.sectionText}>
            Nous divulguerons toute information que nous collectons, utilisons
            ou recevons si la loi l’exige ou le permet, par exemple pour nous
            conformer à une citation à comparaître ou à une procédure judiciaire
            similaire, et lorsque nous pensons de bonne foi que la divulgation
            est nécessaire pour protéger nos droits, votre sécurité ou celle
            d’autrui, enquêter sur une fraude ou répondre à une demande du
            gouvernement.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8 – Contact</h2>
          <p className={styles.sectionText}>
            Si vous souhaitez nous contacter pour mieux comprendre la présente
            Politique ou si vous souhaitez nous contacter concernant toute
            question relative aux droits individuels et à vos informations
            personnelles, contactez-nous à{" "}
            <Link
              href="mailto:arthur.barraud@proton.me"
              className={styles.link}
            >
              arthur.barraud@proton.me
            </Link>
            .
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
