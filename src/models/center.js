const mongoose = require("mongoose");

// 스키마 정의
const dataSchema = new mongoose.Schema({
  id: String,
  name: String,
  lat: Number,
  lng: Number,
  visitDate: String,
});

// 모델 생성
const Center = mongoose.model("Center", dataSchema);

// 모델을 다른 파일에서 사용하려면 해당 파일에서 export 해줄 수 있습니다.
module.exports = Center;
