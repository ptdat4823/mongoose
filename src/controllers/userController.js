import User from "../models/user.js";

const getData = () => {
  try {
    const data = User.find({});
    return data;
  } catch (error) {
    console.error("Lỗi truy vấn dữ liệu:", error);
    console.log(error);
  }
};

export { getData };
