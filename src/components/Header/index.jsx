import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-300 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season style, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link to="/help-center" className="text-[13px] link font-[500] transition">
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/order-tracking" className="text-[13px] link font-[500] transition">
                    Order Tracking 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-gray-300">
        <div className="container flex items-center justify-start gap-x-8">
          <Link to={"/"}>
            <img src='/logo.jpg' alt="Logo" />
          </Link>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link to="/login" className="link transition text-[15px] font-[500]">
                  Login
                </Link>{" "}
                | &nbsp;
                <Link to="/register" className="link transition text-[15px] font-[500]">
                  Register
                </Link>
              </li>

               <li>
                <Tooltip title="Compare">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoGitCompareOutline size={24} />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
               <li>
                <Tooltip title="Wishlist">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart size={24} />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
               <li>
                <Tooltip title="Cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <MdOutlineShoppingCart size={24} />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation/>
    </header>
  );
};

export default Header;
