import React from "react";
import { Switch, Route } from "react-router-dom";

import GoogleMap from "./components/GoogleMap/GoogleMap";
import Home from "./components/Home/Home";
import ListOfClasses from "./components/ListOfClasses/ListOfClasses";
import ListOfTutors from "./components/ListOfTutors/ListOfTutors";
import ListOfStudents from "./components/ListOfStudents/ListOfStudents";
import NewStudent from "./components/NewStudent/NewStudent";
import NewTutor from "./components/NewTutor/NewTutor";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/googlemap" component={GoogleMap} />
    <Route path="/listofclasses" component={ListOfClasses} />
    <Route path="/listoftutors" component={ListOfTutors} />
    <Route path="/googlemap" component={GoogleMap} />
    <Route path="/listofstudents" component={ListOfStudents} />
    <Route path="/newstudent" component={NewStudent} />
    <Route path="/newtutor" component={NewTutor} />
  </Switch>
);
