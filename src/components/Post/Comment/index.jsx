import React from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import Avatar from '../../Avatar';

import styles from "./styles.module.css";

function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/murilorvargas.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Murilo Vargas</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer className={styles.commentFooter}>
          <button>
            <ThumbsUp size={24}/>
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;