import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Compartilhe sua rotina e seus interesses!</h3>
      <p>
        Mini<span>Blog</span> &copy; 2022
      </p>
    </footer>
  );
};

export default Footer;
