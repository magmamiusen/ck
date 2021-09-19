import Head from "next/head";
import Link from "next/link";
import style from "../styles/Home.module.css";

const titlePage = "Home";

export default function Home() {
  return (
    <div className={style.main}>
      <Head>
        <title>{titlePage}</title>
      </Head>
      <header className={style.status}>
        <Link href="/">
          <a className={style.title}>
            CookBook
          </a>
        </Link>
        <div className={style.user}></div>
      </header>
      <main>
        <section className={style.wrapper}>
          <div className={style.item}>
            Pasteles
          </div>
          <div className={style.item}>
            Vegetariano
          </div>
          <div className={style.item}>
            Parrilla
          </div>
          <div className={style.item}>
            Restaurante
          </div>
        </section>
        <section className={style.gallery}>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
          <div className={style.item}>Rabilin</div>
        </section>
      </main>
    </div>
  )
}