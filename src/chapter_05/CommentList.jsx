import React from "react";
import Comment from "./Comment"

const comments = [
  {
    name:'대곤',
    comment:'안녕,대곤임돠',
  },
  {
    name:'은주',
    comment:'리액트 노답',
  },
  {
    name:'민경',
    comment:'뷰는 언제할까',
  },
]

function CommentList(props){
  return(
    <div>
      {comments.map((comment)=>{
        return(
          <Comment name={comment.name} comment={comment.comment}/>
        )
      })}
    </div>
  )
}
export default CommentList