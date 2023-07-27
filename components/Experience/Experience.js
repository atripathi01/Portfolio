import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ExperienceCard = ({
  company,
  description,
  cityAndRole,
  workingMonth,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{company ? company : "Heading"}</h1>
      <div className="flex justify-between">
        <h3 className="text-xl  opacity-60 ">
          <i>{cityAndRole ? cityAndRole : "Location, Role"}</i>
        </h3>
        <p>{workingMonth ? workingMonth : "Working Time"}</p>
      </div>

      <p className="mt-2 opacity-40 text-l"></p>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ExperienceCard;
