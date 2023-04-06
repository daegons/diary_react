import React from 'react';

const students = [
  {
    id: 1,
    name: '대곤',
  },
  {
    id: 2,
    name: '은주',
  },
  {
    id: 3,
    name: '시경',
  },
  {
    id: 4,
    name: '성신',
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return (
          <li>
            {student.id}
            {student.name}
          </li>
        );
      })}
    </ul>
  );
}
export default AttendanceBook;
