import React from 'react';
import Post from './Post';

const allPosts = [
  {
    userName: 'Thato',
    message: 'yo yo yo wassup doggo'
  },
  {
    userName: 'Gary',
    message: "Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later."
  },
  {
    userName: 'Imani',
    message: "I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning."
  }
];

function Newsfeed() {
  return (
    <React.Fragment>
      <div className="row">
        <div>icon</div>
        <input placeholder="What's happening?"></input>
      </div>
      <hr />
      {allPosts.map((post, index) =>
          <Post userName={post.userName}
            message={post.message}
            key={index}/>
        )}
      </React.Fragment>
    );
}


export default Newsfeed;