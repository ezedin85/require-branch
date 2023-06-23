import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ContactForm from './components/form/ContactForm';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={
        <div class="text-white bg-my_navy bg-[url('assets/bg-texture.png')]" style={{backgroundSize: '5px 5px'}}>
          <Home/>
          <Nav/>
          <About/>
          <Experience/>
          <Projects/>
          <ContactForm/>
          <Footer/>
        </div>
      }
      errorElement={<h2>an error occurred</h2>}
      />
  ))

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
