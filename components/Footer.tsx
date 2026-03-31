import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container flex min-h-[72px] items-center justify-between border-t border-[#D2D2D2] px-4 pb-3 pt-5 lg:min-h-[72px] lg:px-0 lg:py-5">
        <a href="/" className="flex items-center gap-2.5">
          <Image
            unoptimized
            src="/img/logo.svg"
            alt="footer"
            width={31}
            height={30}
          />
          <span className="text-base font-medium leading-[normal]">
            QRMagic.io
          </span>
        </a>
      </div>
      <div className="container px-4 lg:px-0 py-2 text-center text-sm text-gray-500">
        @2025-2026 made by 曲睿, San Jean团队 侵权必究
      </div>
    </>
  );
};

export default Footer;
