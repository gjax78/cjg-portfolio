import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Icons from '../Icons/Icons';
import About from '../About/About'
import Videos from '../Videos/Videos';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <main className="App">
      <LandingPage />
      <About />
      <Icons />
      <Videos />
      <Footer />
    </main>
  );
}

export default App;
