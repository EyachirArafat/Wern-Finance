import { cn } from "../../../lb/utils/cn"

export const LogoImage =({logoImg, className})=>{
  return(
    <img className={cn("w-[40px] md:w-[87px] sm:w-[50px] md:h-[43.5px]", className)} src={logoImg} alt="logo" />
  )
}