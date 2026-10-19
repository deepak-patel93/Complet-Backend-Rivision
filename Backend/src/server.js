const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const connectDB = require("../models/post");

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT}` ||
      `Server is running on port 3000`,
  );
});
