import React, { Component } from "react";

import classes from "./User.module.css";

/********** Class Based Component **********/
class User extends Component {
  componentDidMount() {
    console.log("USER DID MOUNT!");
  }
  componentWillUnmount() {
    console.log("USER WILL UNMOUNT!");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
/********** Functional Component **********/
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
