import Bio from "./Bio"
import Contact from "./Contact"
import Header from "./Header"
import Interests from "./Interests"
import Introduction from "./Introduction"
import Projects from "./Projects"

function App() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Interests />
        <Bio />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
