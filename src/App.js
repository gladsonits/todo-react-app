import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header title='React Blog....' />
      <Nav />
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/post' Component={NewPost}></Route>
        <Route exact path='/post/:id' Component={PostPage}></Route>
        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
