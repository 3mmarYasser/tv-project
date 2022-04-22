import React, {useState, useEffect} from 'react';
import classNames from "classnames";
import Styles from "./Header.module.scss"
import {Avatar} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
        <header
            className={classNames([Styles.Header], 'fixed w-[100%] flex justify-between  top-0 p-[5px]   h-[60px] z-10 items-center', {'bg-[#0d0318]': show})}>
            <h1 className=' left-0 cursor-pointer text-2xl ml-[10px]'><span
                className="text-[#5418c5]">Tv</span> Show</h1>

            <div className={classNames([Styles.Header_content], 'flex items-center mr-[10px]')}>

                <div className={classNames("flex", [Styles.Links])}>
                    <SearchIcon className="hover:text-[#5418c5]" sx={{
                        color: `white`,
                        width: 25,
                        height: 25,
                        cursor: "pointer",
                        marginRight: "20px"

                    }}/>
                    <ul className={classNames([Styles.Header_list], "flex list-none items-center text-1xl mr-[35px]")}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>


                <Avatar alt="Remy Sharp"
                        onClick={handleClick}
                        sx={{
                            bgcolor: '#3c0550',
                            width: 35,
                            height: 35,

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
                    <MenuItem onClick={handleClose}>account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <div className={classNames("mr-[5px] ml-[20px] cursor-pointer ", [Styles.Menu])}>
                    <MenuIcon/>
                </div>
            </div>
        </header>
    );
};

export default Header;
