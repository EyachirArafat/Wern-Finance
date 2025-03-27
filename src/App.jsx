import { Button } from "./components/common/button"
import { RightArrow } from "./components/icon"
import { Footer } from "./components/shared/Footer"
import { Navbar } from "./components/shared/Navbar"


function App() {

  return (
    <>
      <main className="bg-[url('bg.svg')] bg-no-repeat bg-center bg-[#1A1E1C] max-h-[5117px]">
        <Navbar/>
        
       <div>{children}</div>
        <Footer/>
      </main>
    </>
  )
}

export default App

