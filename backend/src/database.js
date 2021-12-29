const mongoose = require("mongoose");
const URI = "mongodb://localhost/mern-db";

mongoose.connect(URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("merndb is connected");
});

// .then(() => console.log("merndb is connected"))
// .catch((e) => console.log("err" + e));
