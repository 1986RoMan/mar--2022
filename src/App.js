
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentPage, MainLayout, NotFountPage, PostsPage, TodosPage} from "./pages";

function App() {
  return (
    <div >
          <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentPage/>}>
                    <Route path={':postId'} element={<PostsPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFountPage/>}/>
              </Route>
          </Routes>
    </div>
  );
}

export default App;
