import React,{useState} from 'react';

const Navigation = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    function toggle(){
        setShowMenu(!showMenu)
    }
    return (
       <>
       <header className='headerContent'>
        <button className="mobile-nav-menu" onClick={props.toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a9kcpd3ccbyp23j0un1vq8fk381gj7pf" class="crayons-icon"><title id="a9kcpd3ccbyp23j0un1vq8fk381gj7pf">Navigation menu</title>
    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
</svg>
        </button>
        <a href="" className='headerContent__logo'>
         <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" width="50px"  alt="" />
        </a>
       
        <div className='headerContent__searchbox'>
        <form  className='headerContent__form' >
            <input type="text" placeholder='Search....' />
            <button type='submit' className='headerContent__submit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon c-btn__icon" focusable="false"><path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></svg>
            </button>
        </form>
        </div>
        <div className='headerContent__leftsidebutton'>
        <div className="mobile-search">
            <i>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon c-btn__icon" focusable="false"><path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></svg>
        </i>
        </div>
                <button className='headerContent__writePostButton'>Create Post</button>
               <i>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6xciynp1s71qiu132mp1382lkhhxnke" class="crayons-icon"><title id="a6xciynp1s71qiu132mp1382lkhhxnke">Notifications</title>
    <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
</svg>
               </i >
                <span className='headerContent__profilePic' onClick={toggle}>
            <img src="https://picsum.photos/200" alt="profile pic" className='headerContent__profilePic__pic'/>
            </span>
           </div>
       <div className={showMenu?'dropdown-menu':'hide-menu'}>
        <ul>
            <li className='us-name-id' onClick={toggle}>
                <a href="/">
                    <div className="us-name ">Vishwanath Reddy</div>
                    <div className="us-id us-list">@vishwanathreddy</div>
                </a>
            </li>
            <li className='us-name-id' onClick={toggle}>
                <a href="/">
                    <div className="us-list">Dashboard</div>
            
                </a>
            </li>
            <li className='us-name-id' onClick={toggle}>
                <a href="/">
                    <div className="us-list">create Post</div>
            
                </a>
            </li>
            <li className='us-name-id' onClick={toggle}>
                <a href="/">
                    <div className="us-list">Read List</div>
            
                </a>
            </li>
            <li className='us-name-id' onClick={toggle}>
                <a href="/">
                    <div className="us-list">Settings</div>
            
                </a>
            </li>
            <li className='us-name-id' onClick={toggle}>
                <a href="/">
                    <div className="us-list">sign out</div>
            
                </a>
            </li>
        </ul>
       </div>
       </header>
       </>
    );
}

export default Navigation;
