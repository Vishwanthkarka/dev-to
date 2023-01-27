import React from 'react';
import Cardcomponent from './Cardcomponent';
const listings = [
    {
      id: 1,
      mainTitle: "Go/JS/PHP Software engineer looking for new opportunities",
      subText: "forHire",
    },
    {
      id: 2,
      mainTitle: "Live-Coding on YouTube continues tomorrow",
      subText: "events",
    },
    {
      id: 3,
      mainTitle: "Product Designer",
      subText: "jobs",
    },
    {
      id: 4,
      mainTitle: "FREE COURSE, this weekend only: Ship better code faster",
      subText: "education",
    },
    {
      id: 5,
      mainTitle: "MEAN / MERN Stack 100+ Learning Resources {FREE}",
      subText: "misc",
    },
  ];
  const news = [
    {
      id: 1,
      mainTitle: "Game Dev Digest — Issue #83 - How and Why",
  
      newarticle: true,
    },
    {
      id: 2,
      mainTitle: "JavaScript News and Updates of February 2021",
  
      newarticle: true,
    },
    {
      id: 3,
      mainTitle: "🗞 What's new and special in Create Go App CLI v1.7.0?",
  
      newarticle: true,
    },
    {
      id: 4,
      mainTitle:
        "Google’s Termination of Dr. Mitchell, Clubhouse Security, Low-Code Tools, & more on DevNews!",
      subText: "1 comment",
      newarticle: false,
    },
    {
      id: 5,
      mainTitle: "Ember 3.25 Released",
  
      newarticle: true,
    },
  ];
  
  const help = [
    {
      id: 1,
      mainTitle: "How to start a programming blog?",
  
      newarticle: true,
    },
    {
      id: 2,
      mainTitle: "How to use @yarnpkg/core?",
      subText: "2 comments",
      newarticle: false,
    },
    {
      id: 3,
      mainTitle: "Need advice regarding web development",
      subText: "5 comments",
  
      newarticle: false,
    },
  ];

const Rightsidebar = () => {
    
    return (
<>
<div className='right-sidebar'>
<div className='right-sidebar-contents'>
  <section className='right-sidebar-content'>
    <div className='right-sidebar-heading'>
<h2>Listings</h2>
<p>see more</p>
</div>
{
(  <Cardcomponent content={listings} />  )


}

  </section>
</div>


<div className='right-sidebar-contents'>
  <section className='right-sidebar-content'>
    <div className='right-sidebar-heading'>
<h2>News</h2>
</div>
{
(  <Cardcomponent content={news} />  )


}

  </section>
</div>

<div className='right-sidebar-contents'>
  <section className='right-sidebar-content'>
    <div className='right-sidebar-heading'>
<h2>Helps</h2>
</div>
{
(  <Cardcomponent content={help} />  )


}

  </section>
</div>
</div>
</>
    );
}

export default Rightsidebar;
