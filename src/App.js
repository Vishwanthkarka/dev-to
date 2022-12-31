import logo from './logo.svg';
import Navigation from './components/Navigation';
import Leftsidebar from './components/leftsidebar';
import Rightsidebar from './components/Rightsidebar'
import Containt from './components/Content'
import './App.scss';

function App() {
  return (
    <>
<Navigation/>
<div class="container">
<Leftsidebar/>
<Containt/>
<Rightsidebar/>
</div>
    </>
  );
}

export default App;
