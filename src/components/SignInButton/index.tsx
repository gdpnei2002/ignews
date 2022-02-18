
import styles from "./styles.module.scss"
import { FaGithub } from "react-icons/fa"
 import { FiX } from "react-icons/fi"

export function SignInButton(){
    const isUserLoggeIn = true;

    return isUserLoggeIn ? (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#04d361" />
            Jose neilson
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#eba417" />
            Jose neilson
            <FiX color="#737380"/>
        </button>
    );
}