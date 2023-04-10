import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import DiaryList from "./DiaryList";
import DiaryMaker from "./DiaryMaker";

// const dummyList = [
//   {
//     id: 1,
//     author: "대곤",
//     content: "하이 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "기석",
//     content: "방가 1",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },

//   {
//     id: 3,
//     author: "은주",
//     content: "호호",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "성신",
//     content: "그냥",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`:${targetId}:가 삭제되었습니다.`);
  };

  return (
    <div className="App">
      <DiaryMaker onCreate={onCreate} />
      <DiaryList onDelete={onDelete} dryList={data} />
    </div>
  );
}

export default App;
