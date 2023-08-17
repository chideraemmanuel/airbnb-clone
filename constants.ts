import {
  FaFire,
  FaHome,
  FaUmbrellaBeach,
  FaPaintBrush,
  FaSpaceShuttle,
} from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineCastle } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { TbBeach, TbPool, TbWindmill } from "react-icons/tb";
import { GiHomeGarage } from "react-icons/gi";
import { FiKey } from "react-icons/fi";

export const categories = [
  {
    label: "Rooms",
    icon: FaHome,
  },
  {
    label: "Beaches",
    icon: TbBeach,
  },
  {
    label: "Mansions",
    icon: HiOutlineHomeModern,
  },
  {
    label: "Castles",
    icon: MdOutlineCastle,
  },
  {
    label: "Towers",
    icon: BiBuildingHouse,
  },
  {
    label: "Windmills",
    icon: TbWindmill,
  },
  {
    label: "Creative spaces",
    icon: FaPaintBrush,
  },
  {
    label: "OMG",
    icon: FaSpaceShuttle,
  },
  {
    label: "Ryokans",
    icon: GiHomeGarage,
  },
  {
    label: "New",
    icon: FiKey,
  },
  {
    label: "Lake",
    icon: TbPool,
  },
];
