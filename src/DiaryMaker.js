import { useRef, useState } from "react";

const DiaryMaker = ({ onCreate }) => {
  const authorInput = useRef(); //돔요소
  const contentInput = useRef();

  const [state, setState] = useState({
    //초기값 공백//작성 안해서
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus(); //자동 포커스
      return;
    }
    if (state.content.length < 10) {
      alert("주의! 본문 10글자 이상 작성해주세요😊");
      contentInput.current.focus(); //자동 포커스
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("SAVE SUCCESS");
    setState({
      //일기 작성후 글자 초기화
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryMaker">
      <h2>Today Diary</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>🙂</option>
          <option value={2}>😃</option>
          <option value={3}>😄</option>
          <option value={4}>😞</option>
          <option value={5}>😭</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>SAVE</button>
      </div>
    </div>
  );
};

export default DiaryMaker;
