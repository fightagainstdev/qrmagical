import Image from "next/image";

const Header = () => {
  return (
    <div className="container h-[60px] px-4 lg:h-[80px] lg:px-0">
      <div className="grid h-full grid-cols-12">
        <div className="col-span-5"></div>
        <div className="col-span-2 flex items-center justify-center">
          <a href="/">
            <Image
              unoptimized
              src="/img/logo.svg"
              alt="logo"
              width={40}
              height={39}
              className="h-[33px] w-[35px] lg:h-10 lg:w-10"
            />
          </a>
        </div>
        <div className="col-span-5 flex items-center justify-end">
          <a href="/profile">
            <Image
              unoptimized
              src="/img/profile.png"
              alt="profile"
              width={40}
              height={40}
              className="h-[32px] w-[32px] rounded-full cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
