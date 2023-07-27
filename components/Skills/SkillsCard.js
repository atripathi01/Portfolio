import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SkillsCard = ({ toolNPlatform, webdeveloper }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div >
    <div className="flex justify-start laptop:flex-row mob:flex-col  my-7 align-middle ">
      <h1 className="text-3xl laptop:w-1/3 mob:w-full">Web-Development</h1>
      <div className=" laptop:w-2/3 mob:w-full flex flex-wrap">
        {webdeveloper?.map((list,index)=><div
                           key={index}
          className={`w-fit p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
            mounted && theme === "dark"
              ? "hover:bg-slate-800"
              : "hover:bg-slate-50"
          } hover:scale-105 link`}
        >
          <h1 className="text-xl">{list}</h1>
        </div>
        )}
      </div>
    </div>
    <div className="flex justify-start laptop:mt-20 laptop:flex-row w-full  mob:flex-col my-7 align-middle ">
      <h1 className="text-3xl laptop:w-1/3 mob:w-full">Tools & Platform</h1>
      <div className="laptop:w-2/3 mob:w-full  flex flex-wrap">
        {toolNPlatform?.map((ls,index)=><div
                            key={index}
          className={`w-fit p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
            mounted && theme === "dark"
              ? "hover:bg-slate-800"
              : "hover:bg-slate-50"
          } hover:scale-105 link`}
        >
          <h1 className="text-xl">{ls}</h1>
        </div>)}
      </div>
    </div>
    </div>
  );
};

export default SkillsCard;
