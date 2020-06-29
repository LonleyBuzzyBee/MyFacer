import React from 'react';
import OtherUser from './OtherUser';

const allUsers = [
  {
    profilePic: 'https://i.pinimg.com/originals/f5/e7/cc/f5e7ccfe8954f884d99286bca048caeb.jpg',
    userName: 'Thato',
    message: 'yo yo yo wassup doggo'
  },
  {
    profilePic: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/11/BZ-PYkdggXi-png__700.jpg',
    userName: 'Gary',
    message: "Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later."
  },
  {
    profilePic: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg',
    userName: 'Imani',
    message: "I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning."
  },
  {
    profilePic: 'https://cdn.vox-cdn.com/thumbor/ysBC51TJlZVcPE8duPnEW1iR7NU=/0x0:2841x1171/1400x933/filters:focal(1807x402:2261x856):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65958141/Screen_Shot_2019_07_18_at_4.16.52_PM.0.png',
    userName: 'Julie',
    message: 'Selfies art party tbh bespoke lumbersexual microdosing vape whatever portland irony poke single-origin coffee farm-to-table gastropub actually.'
  },
  {
    profilePic: 'https://pbs.twimg.com/media/DgjmaZvVQAwthSb.jpg',
    userName: 'Garcia',
    message: "I'm baby beard forage post-ironic bicycle rights biodiesel fixie blog meh actually. "
  },
  {
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vinnie_the_Ferret_in_a_War_Dance_Jump.jpg/220px-Vinnie_the_Ferret_in_a_War_Dance_Jump.jpg',
    userName: 'LongCatXoxo',
    message: "I am definitely a cat."
  },
];

function Newsfeed() {
  return (
    <React.Fragment>
      <div className="post">
        <div className="newsfeed-row">
          <div className="icon">
          </div>
          <input placeholder="What's happening?"></input>
        </div>
      <hr />
      {allUsers.map((otherUser, index) =>
        <OtherUser
            profilePic={otherUser.profilePic}
            userName={otherUser.userName}
            message={otherUser.message}
            key={index}/>
        )}
      </div>
    </React.Fragment>
    );
}


export default Newsfeed;