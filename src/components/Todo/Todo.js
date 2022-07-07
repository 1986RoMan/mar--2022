import React from 'react';

const Todo = ({todo:{id,title}}) => {
    return (
        <div>
            {id}--{title}
        </div>
    );
};

export {Todo};