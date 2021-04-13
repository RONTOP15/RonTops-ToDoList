require("dotenv").config();
const express = require("express")
const cors = require('cors')
const app = express()
const PORT = process.env.PORT;
require("./DB/db")();


app.use(express.static('./build'))
app.use(express.json());
app.use(cors())
app.use("/api/todo", require("./routes/todo-route"));



app.get("/", (req, res) => {
  console.log("HOMEPAGE");
  res.send("GOOD JOB");
});

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
