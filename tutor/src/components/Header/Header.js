import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/"> Home </Link>
      <Link to="/googlemap"> GoogleMap </Link>
      <Link to="/listofclasses"> ListOfClasses </Link>
      <Link to="/listoftutors"> ListOfTutors </Link>
      <Link to="/listofstudents"> ListOfStudents </Link>
      <Link to="/newstudent"> NewStudent </Link>
      <Link to="/newtutor"> NewTutor </Link>
    </div>
  );
}
