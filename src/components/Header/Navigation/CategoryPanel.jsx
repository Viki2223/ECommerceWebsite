  import Box from '@mui/material/Box';
  import Drawer from '@mui/material/Drawer';
  import Button from '@mui/material/Button';
  import { IoCloseSharp } from "react-icons/io5";
  import { FaRegSquarePlus } from "react-icons/fa6";
  import { FaRegSquareMinus } from "react-icons/fa6";
  import { Link } from 'react-router-dom';
  import { useState } from 'react';

  const CategoryPanel = (props) => {
  const [submenu, setSubmenu] = useState(null);
  const [inner_submenu, setInnerSubmenu] = useState(null);

  const openSubmenu = (index) => {
  if (submenu === index) {
  setSubmenu(null);
  setInnerSubmenu(null);
  } else {
  setSubmenu(index);
  }
  };

  const openInnerSubmenu = (index) => {
  if (inner_submenu === index) {
  setInnerSubmenu(null);
  } else {
  setInnerSubmenu(index);
  }
  };

  const DrawerList = (
  <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
  <h3 className="p-3 !text-[16px] !font-bold !flex items-center !justify-between cursor-pointer">
  Shop By Categories
  <IoCloseSharp onClick={() => props.openCategoryPanel(false)} className="Cursor-pointer !text-[20px]" />
  </h3>
  <div className="scroll">
  <ul className="w-full">
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">
  Fashion
  </Button>
  </Link>
  {submenu === 0 ? (
  <FaRegSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(0)} />
  ) : (
  <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(0)} />
  )}
  {submenu === 0 && (
  <ul className="submenu relative top-[100%] left-[0%] w-full pl-3">
  <li className="list-none relative">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !text-[14px] !font-semibold">
  Apparal
  </Button>
  </Link>
  {inner_submenu === 0 ? (
  <FaRegSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(0)} />
  ) : (
  <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(0)} />
  )}
  {inner_submenu === 0 && (
  <ul className="inner_submenu relative top-[100%] left-[0%] w-full pl-3">
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Smart Tablet
  </Link>
  </li>
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Crepe T-Shirt
  </Link>
  </li>
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Leather Watch
  </Link>
  </li>
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Rolling Diamond
  </Link>
  </li>
  </ul>
  )}
  </li>
  </ul>
  )}
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Jewellery
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Watches
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Outerwear
  </Button>
  </Link>
  {submenu === 1 ? (
  <FaRegSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(1)} />
  ) : (
  <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(1)} />
  )}
  {submenu === 1 && (
  <ul className="submenu relative top-[100%] left-[0%] w-full pl-3">
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Wooden Chair
  </Link>
  </li>
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Sneakers
  </Link>
  </li>
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Shoes
  </Link>
  </li>
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Purse
  </Link>
  </li>
  <li className="list-none relative mb-1">
  <Link to="/" className="link w-full !text-left !justify-start !px-3 !text-[14px] transition">
  Xbox Controller
  </Link>
  </li>
  </ul>
  )}
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Cosmetics
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Accessories
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Electronic</Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Furniture
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Sunglasses
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Rolling Diamond
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Xbox Controller
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Leather Watch
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Smart Tablet
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Purse
  </Button>
  </Link>
  </li>
  <li className="list-none flex items-center relative flex-col">
  <Link to="/" className="w-full">
  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !px-3 !text-[rgba(0,0,0,0.8)]">Sunglasses
  </Button>
  </Link>
  </li>
  </ul>
  </div>
  </Box>
  );

  return (
  <Drawer open={props.isOpenCatPanel} onClose={() => props.openCategoryPanel(false)}>
  {DrawerList}
  </Drawer>
  );
  };  

  export default CategoryPanel;