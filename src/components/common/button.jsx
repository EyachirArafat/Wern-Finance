import { cn } from "../../lb/utils/cn";

export const Button = ({children, className})=>{
  return(
    <button className={cn("bg-primary rounded-full text-white sm:py-4 sm:px-8 cursor-pointer", className)}>
      {children}
    </button>
  );
};