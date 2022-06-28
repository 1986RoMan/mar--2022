import React, {useState} from 'react';

import {UserPosts, Users} from "./components";
import {usersService} from "./services";

function App() {
    const [posts,setPosts] = useState([]);

    const userPostsById=(id)=> {
        usersService.getPostById(id).then(value => setPosts(value.data))
    }
        return (

    <div style={{display:'flex',flexWrap:'wrap'}}>
      <Users userPostsById={userPostsById}/>
       <UserPosts posts={posts}/>
    </div>
  );
}

export default App;
