import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>こんにちは！</h1>
      <p style={styles.text}>私は竹内結哉です。大学で IT を学び、Web 開発やブロックチェーンに興味があります。</p>
      <p style={styles.text}>現在は、React や Firebase を使ってアプリ開発を行っています。</p>
      <p style={styles.text}>趣味はプログラミング、スポーツ観戦、ドライブです。</p>
      <a href="https://github.com/tyuya1173" style={styles.link} target="_blank" rel="noopener noreferrer">
        GitHub プロフィールはこちら
      </a>
    </div>
  );
};

// スタイル
const styles = {
  container: {
    textAlign: "center" as "center",
    padding: "20px",
  },
  heading: {
    color: "#0070f3",
  },
  text: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;