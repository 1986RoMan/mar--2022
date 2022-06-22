import React from 'react';

const Space = ({spac}) => {
    const {mission_name,launch_year,links:{mission_patch_small}}=spac
    return (
        <div>
            {mission_name}-
            {launch_year}---
            <img src={mission_patch_small}/>
            <hr/>
        </div>
    );
};

export {Space};