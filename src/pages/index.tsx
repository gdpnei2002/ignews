import styles from "./home.module.scss"
import Head from "next/head"
import { SubscribeButton } from "../components/SubscribeButton"

export default function Home() {
  return (
    <>
    <Head>
        <title>Home | ig.news</title>
      </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
          <span>Hey, welcome 😀</span>
          <h1>news about the <span>React</span>world</h1>
          <p>
            Get access to all the publications 
            <span>for 9,99</span>
          </p>
          <SubscribeButton/>
      </section>
      <img src="/images/avatar.svg" alt="" />
    </main>
    </>
  )
}
