import React, {useState, useEffect} from 'react';
import classNames from "classnames";
import Styles from "./Header.module.scss"
import {Avatar} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const logo = "https://cdn.dribbble.com/users/5698127/avatars/small/21fc4bf4d140fc80c956784fb686ae1b.png?1629292698"


const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
        setAnchorEl(null);
    };
    const [show, setShow] = useState<boolean>(true)
    const transitionHeader = (): void => {
        if (window.scrollY < 50) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect((): ReturnType<any> => {
        window.addEventListener("scroll", transitionHeader)
        return () => window.removeEventListener
    }, [])
    return (
        <div
            className={classNames([Styles.Header], 'fixed w-[100%] flex justify-between  top-0 p-[5px]   h-[40px] z-1', {'bg-[#0d0318]': show})}>
            <img
                className=' left-0 cursor-pointer  ml-[10px]'
                src={logo} alt=""/>

            <p className=""/>
            <div className={classNames([Styles.Header_content], 'flex items-center mr-[10px]')}>
                <SearchIcon className="hover:text-[#5418c5]" sx={{
                    color: `${show ? 'white' : "#0d0318"}`,
                    width: 20,
                    height: 20,
                    cursor: "pointer",
                    marginRight: "20px"

                }}/>
                <ul className={classNames([Styles.Header_list], "flex list-none items-center text-xs mr-[30px]", {"text-[#0d0318]": !show})}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                <Avatar alt="Remy Sharp"
                        onClick={handleClick}
                        sx={{
                            bgcolor: '#8f69ac',
                            width: 30,
                            height: 30,
                            fontSize: "15px",
                            cursor: "pointer",

                        }}>Am</Avatar>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default Header;
