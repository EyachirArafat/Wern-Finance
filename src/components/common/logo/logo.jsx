import { cn } from "../../../lb/utils/cn";
import { LogoImage } from "./logoImage";

export const Logo = ({ className, logo, ImgClassName, TextClassName }) => {
  return (
    <a
      href="#"
      className={cn(
        "flex  items-center gap-3 md:w-[240px] h-[122px]",
        className
      )}
    >
      <LogoImage logoImg={logo} className={ImgClassName}></LogoImage>
      <p
        className={cn(
          "font-bold md:text-[29px] sm:text-[20px] tracking-tighter leading-6 hover:text-primary transform duration-200 text-nowrap",
          TextClassName
        )}
      >
        Wern Finance
      </p>
    </a>
  );
};
