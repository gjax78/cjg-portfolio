import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Icons from '../Icons/Icons';
import About from '../About/About'
import Videos from '../Videos/Videos';

const App = () => {
  return (
    <main className="App">
      <LandingPage />
      <About />
      <Icons />
      <Videos />
    </main>
  );
}

export default App;
