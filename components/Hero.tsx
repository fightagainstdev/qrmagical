import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 flex items-center gap-4">
        <Image
          unoptimized
          src="/img/Info.svg"
          alt="info"
          width={24}
          height={24}
        />
        <span className="text-xl font-bold text-black">QRMagic</span>
      </div>
      <a
        className="mb-4 inline-flex h-8 shrink-0 items-center gap-[9px] rounded-[50px] border-[0.5px] border-solid border-[#E6E6E6] bg-white px-3 py-4 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)]"
        href="https://fightagainstdev.github.io/donate"
        target="_blank"
      >

        <span className="text-center text-base font-light items-end leading-[normal] text-[rgb(27,27,22)] flex flex-row gap-1">
          <span>喜欢的话</span> <span>大佬们可以捐赠哦</span>
        </span>
      </a>
      <h2 className="bg-custom-gradient bg-clip-text pb-7 pt-2 text-center text-3xl font-semibold leading-[normal] lg:text-[64px]">
        更智能、更快速的搜索
      </h2>

      {/* input section */}
      <div className="w-full max-w-[708px] pb-6">
        <InputArea
          promptValue={promptValue}
          setPromptValue={setPromptValue}
          handleDisplayResult={handleDisplayResult}
        />
      </div>

      {/* Suggestions section */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pb-[30px] lg:flex-nowrap lg:justify-normal">
        {suggestions.map((item) => (
          <div
            className="flex h-[35px] cursor-pointer items-center justify-center gap-[5px] rounded border border-solid border-[#C1C1C1] bg-[#EDEDEA] px-2.5 py-2"
            onClick={() => handleClickSuggestion(item?.name)}
            key={item.id}
          >
            <Image
              unoptimized
              src={item.icon}
              alt={item.name}
              width={18}
              height={16}
              className="w-[18px]"
            />
            <span className="text-sm font-light leading-[normal] text-[#1B1B16]">
              {item.name}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};


type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "光合作用是如何工作的？",
    icon: "/img/icon _leaf_.svg",
  },
  {
    id: 2,
    name: "如何在3个月内练出六块腹肌？",
    icon: "/img/icon _dumbell_.svg",
  },
  {
    id: 3,
    name: "你能解释相对论吗？",
    icon: "/img/icon _atom_.svg",
  },
];

export default Hero;
