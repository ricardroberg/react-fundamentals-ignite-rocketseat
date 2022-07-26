import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ricard Roberg"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam et, cupiditate aspernatur mollitia distinctio, quaerat eum iste vero nihil praesentium harum quo enim earum temporibus hic magni blanditiis aliquam beatae?"
          />
          <Post author="Henrik Roberg" content="Vou estudar muito" />
        </main>
      </div>
    </div>
  );
}
