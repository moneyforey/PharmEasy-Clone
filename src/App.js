
import './App.css';
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavbarB from './components/Navbar2';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavbarB/>
    
    <Allroutes/>
   
    <Footer/>
    </div>
  );
}

export default App;
