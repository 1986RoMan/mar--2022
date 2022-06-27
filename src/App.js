import React, {useState} from 'react';

import {Users} from "./components";
import {usersService} from "./services";



function App() {
    const [posts,setPosts] = useState([]);

    const userPostsById=(id)=> {
        usersService.getPostById(id).then(value => setPosts(value.data))
    }
        return (

    <div >
      <Users userPostsById={userPostsById} posts={posts}/>

    </div>
  );
}

export default App;
