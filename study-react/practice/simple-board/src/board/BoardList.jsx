import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
function BoardList(props) {
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
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>게시판입니다</td>
            <td>hugo</td>
            <td>2024-09-01</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>2</td>
            <td>잘만들어 봅시다</td>
            <td>hugo</td>
            <td>2024-09-02</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>3</td>
            <td>모죠?</td>
            <td>hugo</td>
            <td>2024-09-03</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>4</td>
            <td>글은 계속 됩니다</td>
            <td>hugo</td>
            <td>2024-09-05</td>
          </tr>
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
