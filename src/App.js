import React,{useState} from 'react';
import Navigation from './components/Navigation';
import Leftsidebar from './components/leftsidebar';
import Rightsidebar from './components/Rightsidebar'
import Containt from './components/Content'
import './App.scss';

function App() {
  const [showMobileBar,setShowMobileBar] =  useState(false);
  function onClickMobilebar (){
setShowMobileBar(!showMobileBar)
  }
  return (
    <>
<Navigation toggle ={onClickMobilebar}/>
<div class="container">
<Leftsidebar toggle ={ onClickMobilebar} showmenu = {showMobileBar}/>
<Containt/>
<Rightsidebar/>
</div>
    </>
  );
}

export default App;
