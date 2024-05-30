import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(false);

  const like반전 = () => setLike(!like);
  
  let likeButton = <button onClick={like반전}>좋아요</button>;
  if (like === true) {
    likeButton = <button onClick={like반전}>좋아요 취소</button>;
  }
  return (
    <div>
      <h1>좋아요 버튼 만들기</h1>
      {likeButton}
    </div>
  );
}

export default App;
