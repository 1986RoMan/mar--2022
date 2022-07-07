import React, {useEffect, useState} from 'react';

import {allService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        allService.getTodos().then(({data})=>{
            setTodos([...data])})
    },[])
    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};


export {Todos};