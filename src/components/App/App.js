import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Icons from '../Icons/Icons';
import About from '../About/About'
const App = () => {
  return (
    <main className="App">
      <LandingPage />
      <Icons />
      <About />
    </main>
  );
}

export default App;
