import React from 'react';
import SocialLogin from './socialLogin';
import Findus from './Findus'
import HZoon from './HZoon';
const RightSide = () => {
    return (
        <div className='space-y-3'>
          <SocialLogin></SocialLogin>
          <Findus></Findus>
          <HZoon></HZoon>
        </div>
    );
};

export default RightSide;
