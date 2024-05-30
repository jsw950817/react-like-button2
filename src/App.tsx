import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const onClick = () => setLike((prev) => !prev);

  const 좋아요또는취소버튼 = like ? (
    <button onClick={onClick}>좋아요 취소</button>
  ) : (
    <button onClick={onClick}>좋아요</button>
  );

  
  const 싫어요또는취소버튼 = like ? (
    <button onClick={onClick}>싫어요 취소</button>
  ) : (
    <button onClick={onClick}>싫어요</button>
  );

  return (
    <div>
      
        <h1>좋아요/싫어요 버튼 구현</h1>
        {좋아요또는취소버튼} {싫어요또는취소버튼}
      
    </div>
  );
}

export default App;
