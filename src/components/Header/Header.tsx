import React from 'react';
import classNames from "classnames";
import Styles from "./Header.module.scss"

const logo = "https://cdn.dribbble.com/users/5698127/avatars/small/21fc4bf4d140fc80c956784fb686ae1b.png?1629292698"

interface Props {

}

const Header: React.FC<Props> = () => {
    return (
        <div className={classNames([Styles.Header], 'fixed top-0 p-[20px] w-[100%] bg-black h-[30px] z-1')}>
            <div className={classNames([Styles.Header_content], 'flex flex-nowrap flex-row w-[100%] ')}>
                <img
                    className={classNames([Styles.Header_logo], ' left-0 cursor-pointer  w-[30px]  pl-[20px]')}
                    src={logo + '?.333'} alt=""/>

                <img className={classNames([Styles.Header_avatar], '  w-[30px] ')}
                     src="https://avatars.githubusercontent.com/u/70114537?v=4" alt=""/>

            </div>
        </div>
    );
};

export default Header;
