import React from 'react';
import Styles from "./ErrPage.module.scss"
import classNames from "classnames";
interface Props{

}
const ErrPage:React.FC<Props> = () => {
    return (
        <div className={classNames("absolute text-red-700 text-2xl",[Styles.ErrPage])}>
            Sorry Page Not Found
        </div>
    );
};

export default ErrPage;

