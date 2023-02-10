
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Navbar/>
      <Contacto/>
      <Footer/>
    </div>
       
  );
}

export default App;


