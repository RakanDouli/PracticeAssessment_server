const express = require("express");
const db = require("./data.json");
const app = express();
app.get("/", (request, response) => {
  console.log("someone requested the data");
  const favorite = `
  <h1>Welcome to codaisseur Data base</h1>
  <a href="http://localhost:4000/db"> Database (db)</a>
  <h1>Search patients</h1>
  <a href="http://localhost:4000/db/patients"> db/patients</a>
  <h1>Search doctors</h1>
  <a href="http://localhost:4000/db/doctors"> db/doctors</a>
  `;

  response.send(favorite);
});
app.get("/db", (request, response) => {
  console.log("someone requested the data");
  response.send(db);
});
app.get("/db/patients", (request, response) => {
  console.log("someone requested the data");
  response.send(db.patients);
});
app.get("/db/patients/:id", (request, response) => {
  const { id } = request.params;

  const finding = db.patients.find((el) => {
    if (el.id === id) {
      return el;
    }
  });
  response.send(finding);
});

app.get("/db/doctors", (request, response) => {
  console.log("someone requested the data");
  response.send(db.doctors);
});
app.get("/db/doctors/:id", (request, response) => {
  const { id } = request.params;

  const finding = db.doctors.find((el) => {
    if (el.id.toString() === id) {
      return el;
    }
  });
  response.send(finding);
});

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
