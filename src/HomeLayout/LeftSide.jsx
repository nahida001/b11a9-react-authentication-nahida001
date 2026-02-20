import React from 'react';
import { Suspense } from 'react';
import Categorise from './Categorise';
import EZoon from './EZoon';

const LeftSide = () => {
    return (
        <div>
            <Suspense  fallback={<span className="loading loading-ring loading-xl"></span>}>
               <Categorise></Categorise>
            </Suspense>
            <EZoon></EZoon>
        </div>
    );
};

export default LeftSide;