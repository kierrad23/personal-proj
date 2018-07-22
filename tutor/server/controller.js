const getAll = (req, res, next) => {
  const db = req.app.get("db");
  db.get_students()
    .then(students => res.status(200).send(students))
    .catch(e => res.status(500).send("Something is wrong"));
};

const deleteStudent = (req, res, next) => {
  const db = res.app.get("db");
  db.delete_student([req.params.id])
    .then(() => res.status(200).send("User successfully deleted"))
    .catch(e => res.status(500).send("Something is wrong"));
};

const newStudent = (req, res, next) => {
  const db = req.app.get("db");
  const {
    first_name,
    last_name,
    location,
    age,
    grade,
    picture,
    favorite_subjects
  } = req.body;
  db.create_student([
    first_name,
    last_name,
    location,
    age,
    grade,
    picture,
    favorite_subjects
  ])
    .then(() => res.status(200).send("all good"))
    .catch(e => res.status(500).send("Something is wrong"));
};

const newTutor = (req, res, next) => {
  const db = req.app.get("db");
  const {
    first_name,
    last_name,
    location,
    age,
    years_experience,
    class_subject,
    picture
  } = req.body;
  db.create_tutor([
    first_name,
    last_name,
    location,
    age,
    years_experience,
    class_subject,
    picture
  ])
    .then(() => res.status(200).send("all good"))
    .catch(e => res.status(500).send("Something is wrong"));
};
module.exports = {
  getAll,
  deleteStudent,
  newStudent,
  newTutor
};
