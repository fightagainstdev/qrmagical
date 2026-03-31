import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black mb-8">Hello,欢迎进入主创者曲睿的AI小助手网站</h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          在这里你可以体验极简的搜索，一键复制，相关问题的一键进入，以及引用高级文献时的来源，
          如果觉得QRMagic 好用的话，可以捐赠哦，您的每一份投入都能为网站的持续注入蓬勃动力
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://fightagainstdev.github.io/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            点击捐赠
          </a>

          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            返回主页
          </Link>
        </div>
      </div>
    </div>
  );
}