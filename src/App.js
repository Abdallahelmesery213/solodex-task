import './App.css';
import ComponentBody from './components/ComponentBody/ComponentBody';
import ComponentOneL from './components/ComponentOne/ComponentOneL';
import ComponentOneR from './components/ComponentOne/ComponentOneR';
import FooterGal from './components/FooterGal/FooterGal';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App ">
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 text-start'>
            <ComponentOneL />
          </div>
          <div className='col-lg-8 text-center'>
            <ComponentBody />
          </div>
          <div className='col-lg-2 text-end'>
            <ComponentOneR />
          </div>
        </div>
        <div className='row footer-gal'>
          <FooterGal />
        </div>
      </div>
    </div>
  );
}

export default App;
