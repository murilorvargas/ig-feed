import React from "react";

import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import styles from "./styles/App.module.css";

import "./styles/global.css";

const posts = [
  {
    id: "1",
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    author: {
      name: "Murilo Vargas",
      role: "Software Developer",
      avatarUrl: "https://github.com/murilorvargas.png",
    },
    publishedAt: new Date("2022-06-26 21:00:00")
  },
  {
    id: "2",
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    author: {
      name: "Timóteo Stifft",
      role: "Software Developer",
      avatarUrl: "https://github.com/timoteostifft.png",
    },
    publishedAt: new Date("2022-06-25 21:00:00")
  },
  {
    id: "3",
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    author: {
      name: "Matheus Bandeira",
      role: "Software Engineer",
      avatarUrl: "https://github.com/mb4ndeira.png",
    },
    publishedAt: new Date("2022-06-26 21:00:00")
  }
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              content={post.content}
              author={post.author}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
