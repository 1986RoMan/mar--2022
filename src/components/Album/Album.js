import React from 'react';

const Album = ({album:{id,title}}) => {
    return (
        <div>
            {id}--{title}
        </div>
    );
};

export {Album};