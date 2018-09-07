import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import Homepage from './Homepage';
import MainBlog from './MainBlog';
import AboutPage from './AboutPage';


class Post extends Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/myblog">My Blog</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/thebestmovie">The Best Movie</Link>
              <Link to="/favoritefood">Favorite Food</Link>
            </nav>
            <Route exact path='/' component={Homepage} />
            <Route path='/myblog' component={MainBlog} />
            <Route path='/aboutme' component={AboutPage} />
            <Route path='/thebestmovie' component={FavoriteMovie} />
            <Route exact path='/favoritefood' component={FavoriteFood} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Post;
