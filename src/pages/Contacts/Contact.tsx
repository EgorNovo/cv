import clsx from "clsx";
import styles from "./Contacts.module.scss";
import Alpha from "./assets/Alpha/Alpha";
import Column from "./assets/Column/Column";
import Omega from "./assets/Omega/Omega";

const Contact = () => {
  return (
    <section className={styles.content} id="contacts">
      <div className={styles.grid}>
        <div className={clsx(styles.test, styles.OneOne)}>
          <a href="mailto:egor.n.fe@yandex.ru" target="_blank">
            <Alpha />
          </a>
        </div>
        <div className={clsx(styles.test, styles.OneTwo)}>Σ</div>
        <div className={clsx(styles.test, styles.OneThree)}>Δ</div>
        <div className={clsx(styles.test, styles.OneFour)}>β</div>

        <div className={clsx(styles.test, styles.TwoOne)}>ξ</div>
        <div className={clsx(styles.test, styles.TwoTwo)}>λ</div>
        <div className={clsx(styles.test, styles.TwoThree)}>Φ</div>
        <div className={clsx(styles.test, styles.TwoFour)}>
          <a href="https://github.com/EgorNovo" target="_blank">
            <Column />
          </a>
        </div>

        <div className={clsx(styles.test, styles.ThreeOne)}>ϴ</div>
        <div className={clsx(styles.test, styles.ThreeTwo)}>π</div>
        <div className={clsx(styles.test, styles.ThreeThree)}>Ψ</div>
        <div className={clsx(styles.test, styles.ThreeFour)}>γ</div>

        <div className={clsx(styles.test, styles.FourOne)}>τ</div>
        <div className={clsx(styles.test, styles.FourTwo)}>
          <a href="https://t.me/user_9966" target="_blank">
            <Omega />
          </a>
        </div>
        <div className={clsx(styles.test, styles.FourThree)}>Ω</div>
        <div className={clsx(styles.test, styles.FourFour)}>μ</div>
      </div>
    </section>
  );
};

export default Contact;
