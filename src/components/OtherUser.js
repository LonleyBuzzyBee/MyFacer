import React from "react";
import PropTypes from "prop-types";

function OtherUser(props){
  return (
    <React.Fragment>
      <img src={props.profilePic} width="15%" alt ="userimage"/>
      <h3>{props.userName}</h3>
      <h3>{props.tagline}</h3>
      <h3>{props.location}</h3>
      <h3>{props.message}</h3>
      <hr/>
    </React.Fragment>
  );
}

OtherUser.propTypes = {
  profilePic: PropTypes.string,
  userName: PropTypes.string,
  tagline: PropTypes.string,
  location: PropTypes.string,
  message: PropTypes.string
};

export default OtherUser;