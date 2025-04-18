import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCard from '../components/postcard';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://example.com/api/posts');
      const sorted = res.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setPosts(sorted);
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 10000); // refresh every 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

export default Feed;