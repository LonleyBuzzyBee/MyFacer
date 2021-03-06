import React from 'react';
import OtherUser from './OtherUser';

const allOtherUsers = [
  {
    profilePic: 'https://cdn.orvis.com/images/DBS_Lab_1280.jpg',
    userName: 'Thato',
    location: 'Vancouver, WA',
    tagline: 'Firebase won\'t save record. Halp.',
    link: "bleh"
  },
  {
    profilePic: 'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
    userName: 'Sleater',
    location: 'Reno, NV',
    tagline: 'Prop types are throwing an error.',
    link: "bleh"
  },
  {
    profilePic: 'https://i.ytimg.com/vi/YEU_FIly708/maxresdefault.jpg',
    userName: 'Jacob',
    location: 'Portland, OR',
    tagline: 'Child component isn\'t rendering.',
    link: 'bleh'
  }
];

function Recommendations() {
return (
      <React.Fragment>
        <div className="recommended">
            {allOtherUsers.map((otherUser, index) =>
              <OtherUser
              profilePic={otherUser.profilePic}
              userName={otherUser.userName}
              location={otherUser.location}
              tagline={otherUser.tagline}
              link={otherUser.link}
              key={index}
              />
              
              )}
    </div>
  </React.Fragment>
    );
}


export default Recommendations;