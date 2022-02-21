import styles from "./styles.module.scss"
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"


export function SignInButton(){
    const [session] = useSession()

    console.log(session);

    return session ? (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signIn()}
        >
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Jose neilson
            <FiX color="#737380"/>
        </button>
    );
}

function useSession(): [any] {
    throw new Error("Function not implemented.");
}


function signIn(): void {
    throw new Error("Function not implemented.");
}
