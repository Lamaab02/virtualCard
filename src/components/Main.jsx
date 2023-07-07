import About from "./About"
import Buttons from "./Buttons"
import Footer from "./Footer"
import Interests from "./interests"

function Main() {
  return (
    <main>
        <div className="main-container">
        <img className="main-img" src="./../me.jpeg"></img>
        <div className="content">
            <h2 className="main-name">Lia Abed</h2>
            <h4 className="main-position">Full Stack Developer</h4>
            <h5 className="website">Website</h5>
            <Buttons></Buttons>
            <About></About>
            <Interests></Interests>
        </div>
        <Footer></Footer>
        </div>
        
    </main>

  )
}

export default Main