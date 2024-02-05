import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Center from "/src/models/center";
//express 어플리케이션 생성
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/my-climbing-mapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 연결된지 확인
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB 연결 오류:"));
db.once("open", function () {
  console.log("MongoDB에 성공적으로 연결되었습니다.");
});

app.use(cors()); // 모든 도메인에서의 요청을 허용합니다.

//JSON형식의 데이터를 파싱할 수 있도록 설정
// app.use(express.json());

//Get 요청에 대한 예제 핸들러
app.get("/", (req, res) => {
  console.log("req", req);
  res.send("Hello Express!dd");
});

//Post 요청에 대한 예제 핸들러
app.post("/add/center", (req, res) => {
  const dataFromBody = req.body;
  console.log("POST 요청 받은 데이터: ", dataFromBody);
  res.status(200).json({ message: "데이터가 성공적으로 전송되었습니다." });
});

app.listen(port, () => {
  console.log(`서버가 http:/localhost:${port} 포트에서 실행 중입니다.`);
});
