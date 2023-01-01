import React from 'react';

const ArticleSkeleton = () => {
    return (
        <div className='Article-skeleton'>
            
            <div className='Article-skeleton-profile-content'>
            <div className='Article-skeleton-profile'></div>
         
            <div className='Article-skeleton-username'></div>
            </div>
            <div className='Article-skeleton-content'></div>
            <div className='Article-skeleton-content2'></div>
            
            <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
        </div>
    );
}

export default ArticleSkeleton;
