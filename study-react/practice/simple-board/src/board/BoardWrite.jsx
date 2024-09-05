import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Axios from "axios";

function BoardWrite(props) {
  const submitTest = () => {
    Axios.get("http://localhost:8000/", {}).then(() => {
      alert("테스트 완료!");
    });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
      </Form>
      <Button variant="info" onClick={submitTest}>
        작성완료
      </Button>
      <Button variant="secondary">취소</Button>
    </div>
  );
}

export default BoardWrite;
