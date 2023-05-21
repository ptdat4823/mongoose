import mongoose from "mongoose";
const connectionString = "mongodb://0.0.0.0:27017/mobiledb";

// Tạo một hàm để lấy dữ liệu
const connect = () => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Đã kết nối đến MongoDB Compass");
  });
  mongoose.connection.on("error", (error) => {
    console.error("Lỗi kết nối đến MongoDB Compass:", error);
  });
};

export { connect };
