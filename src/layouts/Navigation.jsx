import React from "react";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscBriefcase,
  VscCode,
} from "react-icons/vsc";
import { HiOutlinePuzzle } from "react-icons/hi";
import Dock from "../components/Dock";

const Navigation = () => {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscBriefcase size={18} />,
      label: "Experience",
      onClick: () => alert("Experience!"),
    },
    {
      icon: <VscCode size={18} />,
      label: "Showcase",
      onClick: () => alert("Showcase!"),
    },
    {
      icon: <HiOutlinePuzzle size={18} />,
      label: "My Stack",
      onClick: () => alert("My Stack!"),
    },
  ];
  return (
    <div className="">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Navigation;
