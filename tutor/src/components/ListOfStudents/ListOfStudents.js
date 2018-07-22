import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { getStudents } from "../../ducks/userReducer";

class ListOfStudents extends Component {
  componentDidMount() {
    this.props.getStudents();
  }

  handleDelete(id) {
    axios.delete(`/api/student/${id}`).then(() => {
      this.props.getStudents();
    });
  }

  render() {
    let students = this.props.userReducer.user.map((e, i) => {
      return (
        <div key={i}>
          <div>{e.picture} </div>
          <div>{e.first_name} </div>
          <div>{e.last_name} </div>
          <div>{e.age} </div>
          <div>{e.grade} </div>
          <div>{e.favorite_subjects} </div>
          <div>{e.description} </div>
          <div>{e.favorite_tutor} </div>
          <div>{e.location} </div>
          <button onClick={id => this.handleDelete(e.id)}>Delete</button>
        </div>
      );
    });
    return <div>{students}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getStudents }
)(ListOfStudents);
