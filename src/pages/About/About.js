import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o gala<span>x</span>y
      </h2>
      <p>
        Eu sempre quis criar uma página relacionada as belezas do nosso universo
        e com esse projeto eu pude tirar essa ideia do papel.
      </p>
      <hr />
      <p>
        O galaxy consiste em um 'miniblog' onde você pode compartilhar suas
        fotos favoritas relacionadas a galáxia, as estrelas, ao universo e tudo
        que isso envolve.
      </p>
      <hr />
      <p>
        Esse projeto foi feito utilizando React no front-end e Firebase no
        back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
