import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faGitlab } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css'

function Footer() {
  return (

    <div className={styles.myFooter}>
      <div className={styles.myName}>
        <p>Regine Gabuyo</p>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/imGhenGabuyo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" className={`${styles.icon} ${styles.facebook} ${styles.iconFacebook}`} />
        </a>
        <a href="https://www.instagram.com/ghen.gabuyo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className={`${styles.icon} ${styles.instagram} ${styles.iconInstagram}`} />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className={`${styles.icon} ${styles.linkedin} ${styles.iconLinkedin}`} />
        </a>
        <a href="https://gitlab.com/ghengabuyo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGitlab} size="2x" className={`${styles.icon} ${styles.gitlab} ${styles.iconGitlab}`} />
        </a>
      </div>

    </div>
  );
}

export default Footer;