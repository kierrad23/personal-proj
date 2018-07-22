import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateLocation,
  updateAge,
  updateYearsExperience,
  updateSubject,
  updatePicture
} from "../../ducks/tutorReducer";

class NewTutor extends Component {
  handelTutors() {
    axios.post("/api/newtutor", {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      location: this.props.location,
      age: this.props.age,
      yearsExperience: this.props.yearsExperience,
      classSubject: this.props.classSubject,
      picture: this.props.picture
    });
  }
  render() {
    const {
      updateFirstName,
      updateLastName,
      updateLocation,
      updateAge,
      updateYearsExperience,
      updateSubject,
      updatePicture
    } = this.props;
    return (
      <div>
        <input
          className="first_name"
          placeholder="First Name"
          onChange={e => updateFirstName(e.target.value)}
        />
        <input
          className="last_name"
          placeholder="Last Name"
          onChange={e => updateLastName(e.target.value)}
        />
        <input
          className="location"
          placeholder="Location"
          onChange={e => updateLocation(e.target.value)}
        />
        <input
          className="Age"
          placeholder="Age"
          onChange={e => updateAge(e.target.value)}
        />
        <input
          className="years_experience"
          placeholder="Years Experience"
          onChange={e => updateYearsExperience(e.target.value)}
        />
        <input
          className="class_subject"
          placeholder="Subject"
          onChange={e => updateSubject(e.target.value)}
        />
        <input
          className="picture"
          placeholder="Picture"
          onChange={e => updatePicture(e.target.value)}
        />
        <button className="button" onClick={() => this.handelTutors()}>
          Complete
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    location: state.location,
    age: state.age,
    yearsExperience: state.yearsExperience,
    classSubject: state.classSubject,
    picture: state.picture
  };
}
export default connect(
  mapStateToProps,
  {
    updateFirstName,
    updateLastName,
    updateLocation,
    updateAge,
    updateYearsExperience,
    updateSubject,
    updatePicture
  }
)(NewTutor);
