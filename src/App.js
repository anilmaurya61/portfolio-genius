import './App.scss';
import Contact from './components/contact/Contact'
import Topbar from './components/Topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/Works/Works'
import Testimonials from './components/testimonials/Testimonials'
function App() {
  return (
    <div className="App">
     <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
