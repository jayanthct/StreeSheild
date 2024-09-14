import './App.css'
import Home from './pages/Home';
import RealStoriesAndImpact from './sections/RealStoriesAndImpact';
import Upload from './sections/Upload';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Home/>
      <RealStoriesAndImpact/>
      <Footer/>
      {/* <Upload/> */}
    </>
  )
}

export default App
