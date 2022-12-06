import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Compartilhe suas fotos favoritas do universo!</h3>
      <p>
        gala<span>x</span>y &copy; 2022
      </p>
      <p>
        Feito com ❤ por{' '}
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
