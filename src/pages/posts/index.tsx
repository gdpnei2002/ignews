import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import * as prismicH from "@prismicio/helpers";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

type PostsProps = {
  posts: Post[];
};

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
              <Link href={`/posts/preview/${post.slug}`} key={post.slug}>
                  <a>
                    <time>{post.updatedAt}</time>
                    <strong>{post.title}</strong>
                    <p>{post.excerpt}</p>
                  </a>
              </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType("post", {
    fetch: ["post.title", "post.content"],
    pageSize: 100,
  });

    const posts = response.map((post) => {
      return {
        slug: post.uid,
        title: prismicH.asText(post.data.title),
        excerpt: post.data.content.find((content) => content.type === "paragraph")?.text ?? "",
        updatedAt: new Date(post.last_publication_date).toLocaleDateString(
          "pt-BR",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }
        ),
      };
    });
  
    return {
      props: { posts },
    };
  };