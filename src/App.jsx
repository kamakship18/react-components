import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from './components/header';
import Data from './components/data';
import GallaryBody from './components/body';

function App() {
  return (
    <div>
      {/* adding footer component */}
      <Header />
      <GallaryBody data={Data}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
