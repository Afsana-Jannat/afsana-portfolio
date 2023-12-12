import AboutMe from "./components/AboutMe/AboutMe"
import Banner from "./components/Banner/Banner"
import Cv from "./components/Cv/Cv"
import Education from "./components/Education/Education"
import Footer from "./components/Footer/Footer"
import MyProject from "./components/MyProject/MyProject"
import Contact from "./components/contact/Contact"


function App() {


  return (
    <>
      <div className="max-w-screen-xl mx-auto" style={{ backgroundImage: 'url(https://i.ibb.co/18FdwZp/pexels-photo-4466468.jpg)' }}>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <MyProject></MyProject>
        <Education></Education>
        <Contact></Contact>
        <Cv></Cv>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
