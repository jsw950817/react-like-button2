import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const onclickLike = () => {
    // 여기는 좋아요 버튼을 클릭했을 때 실행되는 코드들인데,
    // 싫어요 누른 상태라면
    if (dislike === true) {
      // 싫어요 안 누른 상태로 바꿔줘야지
      setDislike(false);
    }
    setLike(true);
  };
  const onclickDislike = () => {
    //여기는 싫어요 버튼을 클릭했을 때 실행되는 코드들인데,
    // 좋아요 누른 상태라면
    if (like === true) {
      //좋아요 안 누른 상태로 바꿔줘야지
      setLike(false);
    }
    setDislike(true);
  };

  const 좋아요또는취소버튼 = like ? (
    <button onClick={onclickLike}>좋아요 취소</button>
  ) : (
    <button onClick={onclickLike}>좋아요</button>
  );

  const 싫어요또는취소버튼 = dislike ? (
    <button onClick={onclickDislike}>싫어요 취소</button>
  ) : (
    <button onClick={onclickDislike}>싫어요</button>
  );

  return (
    <div>
      <h1>좋아요/싫어요 버튼 구현</h1>
      {좋아요또는취소버튼} {싫어요또는취소버튼}
    </div>
  );
}

export default App;
