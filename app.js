const express = require("express");
const cors = require("cors");
//express 어플리케이션 생성
const app = express();
const port = 3000;
app.use(cors()); // 모든 도메인에서의 요청을 허용합니다.

//JSON형식의 데이터를 파싱할 수 있도록 설정
// app.use(express.json());

//Get 요청에 대한 예제 핸들러
app.get("/", (req, res) => {
  console.log("req", req);
  res.send("Hello Express!dd");
});

//Post 요청에 대한 예제 핸들러
app.post("/api/data", (req, res) => {
  const dataFromBody = req.body;
  console.log("POST 요청 받은 데이터: ", dataFromBody);
  res.status(200).json({ message: "데이터가 성공적으로 전송되었습니다." });
});

app.listen(port, () => {
  console.log(`서버가 http:/localhost:${port} 포트에서 실행 중입니다.`);
});
