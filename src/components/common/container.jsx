import { cn } from "../../lb/utils/cn"

export const Container =({children, className})=>{
  return(
    <div className={cn("max-w-screen-xl w-full px-4 sm:px-6 md:px-8 mx-auto font-mplus text-white", className)}>{children}</div>
  );
};