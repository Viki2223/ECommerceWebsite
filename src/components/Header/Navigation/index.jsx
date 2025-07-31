import Button from '@mui/material/Button';
import { useState } from 'react';
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css";
import { RiMenu2Fill } from "react-icons/ri";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = (open) => {
    setIsOpenCatPanel(open);
  }

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 !font-bold !w-full"
              onClick={() => openCategoryPanel(true)}>
              <RiMenu2Fill className="!text-[18px] !font-bold" />
              SHOP BY CATEGORIES
              <LiaAngleDownSolid className="!text-[13px] !ml-auto !font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[80%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none relative group">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md transition-all z-10">
                  <ul>
                    <li className="list-none w-full relative">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Men</Button>
                        <div className="submenu invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md transition-all z-10">                      
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">T-Shirt</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Jeans</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Footwear</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Watch</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Pants</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Women</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Kids</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Girls</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !font-bold">Boys</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/">
                  <Button className="!text-[14px] !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col3 w-[20%]">
            <p className="!text-[14px] !font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="!text-[18px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel isOpenCatPanel={isOpenCatPanel} openCategoryPanel={openCategoryPanel} />
    </>
  );
};

export default Navigation;
