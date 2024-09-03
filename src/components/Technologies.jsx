import { TbBrandJavascript } from "react-icons/tb";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-400 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded -2xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4 animate-bounce">
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <TbBrandJavascript className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded -2xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4 animate-bounce">
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <SiHandlebarsdotjs className="text-7xl text-black" />
        </div>
        <div className="rounded -2xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4 hover:animate-bounce">
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded -2xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4">
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded -2xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4">
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <FaNode className="text-7xl text-green-300" />
        </div>
        <div className="rounded -2xl border-4 border-purple-300 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 p-4">
          <div className="flex h-full w-full items-center bg-gray-800 back"></div>
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
