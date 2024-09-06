import React, { useEffect, useState } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

let mountCount = 1;

function BoardList(props) {
  const [boardList, setBoardList] = useState([]);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    console.log("mount: ", mountCount);
    mountCount++;
    setDidMount(true);
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log("didMount: ", didMount);
    if (didMount) {
      console.log("api 호출");
      const fetchData = [
        {
          name: "설거지",
        },
      ];
      setBoardList(fetchData);
      getList();
    }
  }, [didMount]);

  const Board = ({ idx, title, regId, regDate }, props) => {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            value={idx}
            onChange={(e) =>
              props.onCheckboxChange(
                e.currentTarget.checked,
                e.currentTarget.value
              )
            }
          ></input>
        </td>
        <td>{idx}</td>
        <td>{title}</td>
        <td>{regId}</td>
        <td>{regDate}</td>
      </tr>
    );
  };

  const getList = () => {
    Axios.get("http://localhost:8000/api/board", {})
      .then((res) => {
        const { data } = res;
        setBoardList(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>선택</th>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((v) => {
            return (
              <Board
                key={v.IDX}
                idx={v.IDX}
                title={v.TITLE}
                regId={v.REG_ID}
                regDate={v.REG_DATE}
              />
            );
          })}
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="info">글쓰기</Button>
        <Button variant="secondary">수정하기</Button>
        <Button variant="danger">삭제하기</Button>
      </div>
    </div>
  );
}

export default BoardList;
