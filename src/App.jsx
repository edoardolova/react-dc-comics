import './App.css';
// array comics 
import comics from "../data/comics"
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function App() {

  return (
    <>
      <Header></Header>
      <Main comics={comics}/>
      <Footer/>
    </>
  )
}

export default App
