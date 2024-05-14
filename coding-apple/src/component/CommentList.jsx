import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '김머콩',
    comment: '내 이름은 김머콩이다.',
  },
  {
    name: '안지콩',
    comment: '심술 대마왕 안지콩',
  },
  {
    name: '안꼬비',
    comment: '왕!',
  },
];

const CommentList = (props) => {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
};

export default CommentList;
