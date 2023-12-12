import AboutMe from "./components/AboutMe/AboutMe"
import Banner from "./components/Banner/Banner"
import Education from "./components/Education/Education"
import MyProject from "./components/MyProject/MyProject"


function App() {


  return (
    <>
      <div className="max-w-screen-xl mx-auto" style={{ backgroundImage: 'url(https://i.ibb.co/18FdwZp/pexels-photo-4466468.jpg)' }}>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <MyProject></MyProject>
        <Education></Education>
      </div>
    </>
  )
}

export default App
