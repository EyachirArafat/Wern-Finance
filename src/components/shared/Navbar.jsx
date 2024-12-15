import { Button } from "../common/button"
import { Container } from "../common/container"
import { Logo } from "../common/logo/logo"
import NavbarLogo from "/logo.svg"

export const Navbar = ()=>{
  return(
    <Container>
      <div className="flex justify-between items-center">
        <Logo logo={NavbarLogo}/>
        <Button className="border-2 border-primary bg-transparent text-primary hover:border-white hover:text-white transform-all hover:scale-105 duration-500 font-bold shadow-lg active:shadow-white px-4 py-2">Contact</Button>
      </div>
    </Container>
  )
}