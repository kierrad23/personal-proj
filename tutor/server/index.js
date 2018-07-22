require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const { getAll, deleteStudent, newStudent, newTutor } = require("./controller");

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(e => console.log(e));

app.get("/api/students", getAll);
app.delete("/api/student/:id", deleteStudent);
app.post("/api/newstudent", newStudent);
app.post("/api/newtutor", newTutor);

const port = 3001;
app.listen(port, () => console.log(`server is listening ${port}`));
