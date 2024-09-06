import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Axios from "axios";

function BoardWrite(props) {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [idx, setIdx] = useState(0);

  // const submitTest = () => {
  //   Axios.get("http://localhost:8000/", {}).then(() => {
  //     alert("테스트 완료!");
  //   });
  // };

  const write = () => {
    setIsModifyMode(false);
    Axios.post("http://localhost:8000/api/board", {
      title: title,
      content: content,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const update = () => {
    setIsModifyMode(true);
    Axios.post("http://localhost:8000/update", {
      title: title,
      content: content,
      idx: idx,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" id="titleGroup">
          <Form.Label htmlFor="title">제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목입력"
            onChange={handleTitleChange}
            id="title"
            name="title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" id="contentGroup">
          <Form.Label htmlFor="content">내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="내용입력"
            onChange={handleContentChange}
            id="content"
            name="content"
            required
          />
        </Form.Group>
      </Form>

      <Button
        type="button"
        id="btnProcess"
        name="btnProcess"
        variant="info"
        onClick={isModifyMode ? update : write}
      >
        작성완료
      </Button>
      {/* <Button variant="secondary">취소</Button> */}
    </div>
  );
}

export default BoardWrite;
