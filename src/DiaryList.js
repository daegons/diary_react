import { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";

function DiaryList() {
  const dryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>List</h2>
      <h3>{dryList.length}개의 일기가 있습니다.</h3>
      <div>
        {dryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  dryList: [],
};

export default DiaryList;
