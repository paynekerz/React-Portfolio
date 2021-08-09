import React from "react";
import NavBar from "./components/js/navBar"
import Aboutme from "./components/js/aboutMe"
import Project from "./components/js/project"
import Tech from "./components/js/tech"
import Footer from "./components/js/footer"

const App = () => {
  return (
    <div>
      <NavBar />
      <Aboutme />
      <Project />
      <Tech />
      <Footer />
    </div>
  )
}

export default App;