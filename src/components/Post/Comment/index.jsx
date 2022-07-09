import React, { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import Avatar from '../../Avatar';

import styles from "./styles.module.css";

function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content)
  };

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1)
  };

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

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={styles.commentFooter}>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24}/>
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;