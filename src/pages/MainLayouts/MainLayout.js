import React from 'react';
import {Link,Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div >
            <div className={'header'}>
                <Link to={'todos'}>todos</Link>
                <Link to={'albums'}>albums</Link>
                <Link to={'comments'}>comments</Link>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};