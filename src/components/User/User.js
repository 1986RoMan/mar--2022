

const User = ({user,userPostsById}) => {

    return (
        <div>
            {user.id}--{user.name}
            <button onClick={()=>userPostsById(user.id)}>posts</button>
        </div>
    );
};

export {User};
