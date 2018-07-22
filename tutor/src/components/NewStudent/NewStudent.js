import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateAge,
  updateGrade,
  updateSubject,
  updateLocation,
  updatePicture
} from "../../ducks/userReducer";

class NewStudent extends Component {
  handelNewStudent(e) {
    console.log(this.props);

    axios.post("/api/newstudent", {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      age: this.props.age,
      grade: this.props.grade,
      subject: this.props.subject,
      location: this.props.location,
      picture: this.props.picture
    });
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <input
          className="first-name"
          placeholder="First Name"
          onChange={e => this.props.updateFirstName(e.target.value)}
        />
        <input
          className="last-name"
          placeholder="Last Name"
          onChange={e => this.props.updateLastName(e.target.value)}
        />
        <input
          className="age"
          placeholder="Age"
          onChange={e => this.props.updateAge(e.target.value)}
        />
        <input
          className="grade"
          placeholder="Grade"
          onChange={e => this.props.updateGrade(e.target.value)}
        />
        <input
          className="subject"
          placeholder="Subject"
          onChange={e => this.props.updateSubject(e.target.value)}
        />
        <input
          className="location"
          placeholder="Location"
          onChange={e => this.props.updateLocation(e.target.value)}
        />
        <input
          className="picture"
          placeholder="Picture"
          onChange={e => this.props.updatePicture(e.target.value)}
        />
        <button className="button" onClick={e => this.handelNewStudent(e)}>
          create
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.first_name);

  return {
    first_name: state.first_name,
    last_name: state.last_name,
    age: state.age,
    grade: state.grade,
    subject: state.subject,
    location: state.location,
    picture: state.picture
  };
}

export default connect(
  mapStateToProps,
  {
    updateFirstName,
    updateLastName,
    updateAge,
    updateGrade,
    updateSubject,
    updateLocation,
    updatePicture
  }
)(NewStudent);
