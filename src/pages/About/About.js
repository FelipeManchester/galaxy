import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Gala<span>x</span>y
      </h2>
      <p>
        Este projeto consiste em um miniblog feito com React no front-end e
        Firebase no back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
