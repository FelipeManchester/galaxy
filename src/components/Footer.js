import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>
        <q>see you on the dark side of the moon.</q>
      </h3>
      <p>
        gala<span>x</span>y &copy; 2022
      </p>
      <p>
        Feito com <span>❤</span> por
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/FelipeManchester"
        >
          Felipe Manchester
        </a>
      </p>
    </footer>
  );
};

export default Footer;
