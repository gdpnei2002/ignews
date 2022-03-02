import Head from "next/head";
import styles from "./styles.module.scss"

export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with lerna </strong>
                        <p>Creating a Monorepo with lernaCreating a Monorepo with lerna</p>
                    </a>
                </div>
            </main>
        </>
    );
}