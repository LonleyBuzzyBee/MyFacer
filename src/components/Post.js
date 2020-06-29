import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <h3>{props.userName}</h3>
      <h3>{props.message}</h3>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  userName: PropTypes.string,
  message: PropTypes.string
};

export default Post;