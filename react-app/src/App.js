import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Feed from './pages/feed';
import TopUsers from './pages/topuser';
import TrendingPosts from './pages/trendingposts';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="mt-3 mb-4">Social Media Analytics Dashboard</h1>
        <nav>
          <Link className="btn btn-primary m-2" to="/">Feed</Link>
          <Link className="btn btn-primary m-2" to="/top-users">Top Users</Link>
          <Link className="btn btn-primary m-2" to="/trending-posts">Trending Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;