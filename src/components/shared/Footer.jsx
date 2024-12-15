import { Container } from "../common/container";
import { Logo } from "../common/logo/logo";
import FooterLogo from "/footer-logo.svg";
import { FooterLinks } from "../../lb/db/data";

export const Footer = () => {
  return (
    <Container className="bg-bSecondary/15 max-w-[1440px] ">
      <div className="px-[100px] pt-[60px] pb-[135px] flex gap-8 justify-between md:flex-row flex-col">
        <div>
          <Logo
            className={("sm:w-[200px]", "h-[60px]")}
            ImgClassName={("size-[24px]", "w-30px")}
            logo={FooterLogo}
            TextClassName={"text-[16px]"}
          ></Logo>
          <p className="w-[287px] text-[#ADB2B1] leading-6 ">
            Discover the power of our secure and rewarding credit cards
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">

        {FooterLinks.map((section, id) => (
          <div key={id} className="flex flex-col gap-2">
            <a className="font-semibold" href="#">
              {section.header}
            </a>

            {section.list.map((item, index) => (
              <a className="" key={index} href="#">
                {item}
              </a>
            ))}
          </div>
        ))}
        </div>
      </div>
    </Container>
  );
};
