import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>


        <div className={styles.grid}>
          <a href="/blog" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Random Thoughts</p>
          </a>

          <a
            href="/projects"
            className={styles.card}
          >
            <h2>Projects &rarr;</h2>
            <p>Silly programs</p>
          </a>

          <a
            href="/about"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>About &rarr;</h2>
            <p>More info</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
