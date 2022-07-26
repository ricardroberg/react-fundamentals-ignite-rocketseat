import { Trash, ThumbsUp } from "phosphor-react";
import Avatar from "./Avatar";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/ricardroberg.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricard Roberg</strong>
              <time
                title="25 de Julho de 2022 às 10:30h"
                dateTime="2022-07-25 10:30:00"
              >
                Cerca de 2h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
