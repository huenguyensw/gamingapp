import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Playing from './components/playing/Playing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Playing/>
      <Footer/>
    </div>
  );
}

export default App;
