import DiaryItem from "./DiaryItem";

function DiaryList({ onDelete, dryList }) {
  return (
    <div className="DiaryList">
      <h2>List</h2>
      <h3>{dryList.length}개의 일기가 있습니다.</h3>
      <div>
        {dryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  dryList: [],
};

export default DiaryList;
