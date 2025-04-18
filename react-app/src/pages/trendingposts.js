import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCard from '../components/postcard';

function TrendingPosts() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://example.com/api/posts');
      let max = 0;

      res.data.forEach(p => {
        if (p.comments.length > max) max = p.comments.length;
      });

      const maxPosts = res.data.filter(p => p.comments.length === max);
      setTrending(maxPosts);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {trending.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

export default TrendingPosts;