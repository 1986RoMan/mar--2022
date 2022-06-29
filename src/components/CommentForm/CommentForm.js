import React from 'react';
import {useForm} from "react-hook-form";
import {commentInstance} from "../../service";

const CommentForm = () => {
        const {reset,handleSubmit,register,formState:{errors}} = useForm();
        const mySubmit=(comment)=>{
            console.log(comment)
            commentInstance.createComment(comment)
                .then((json) =>{ console.log(json.data)});
            reset()
        }
        return (
            <div>
                <form onSubmit={handleSubmit(mySubmit)} >
                    name:  <input{...register('name',{required:true})}/>
                    {errors.name && <span>ERROR!!!!</span>}
                    body:  <input{...register('body',{required:true})}/>
                    email:  <input{...register('email',{required:true})}/>
                    <select {...register('postId')}>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                        <option value={'5'}>5</option>
                        <option value={'6'}>6</option>
                        <option value={'7'}>7</option>
                        <option value={'8'}>8</option>
                        <option value={'9'}>9</option>
                        <option value={'10'}>10</option>
                    </select>
                    <button>send</button>
                </form>
        </div>
    );
};

export {CommentForm};