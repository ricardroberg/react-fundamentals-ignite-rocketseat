import Avatar from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src="https://scontent.fsdu37-1.fna.fbcdn.net/v/t31.18172-1/16601915_10206517250564978_4555084623919139525_o.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=TjodH3PgVt4AX_J16cf&tn=QBuDwEkHJbl_sSQo&_nc_ht=scontent.fsdu37-1.fna&oh=00_AT_1UiCFOw3Cdmw_9_-J73xLA9aVF0n1XidZ85M0B2FcDQ&oe=6303B5F7"
          />
          <div className={styles.authorInfo}>
            <strong>Ricard Roberg</strong>
            <span>Software Dev Intern</span>
          </div>
        </div>
        <time
          title="25 de Julho de 2022 às 10:30h"
          dateTime="2022-07-25 10:30:00"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

export default Post;
