import mongoose from "mongoose";
const connectionString = "mongodb://0.0.0.0:27017/";

// Tạo một hàm để lấy dữ liệu
const connect = () => {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Đã kết nối tới MongoDB");
    })
    .catch((error) => {
      console.error("Lỗi kết nối tới MongoDB:", error);
    });
};

export { connect };
