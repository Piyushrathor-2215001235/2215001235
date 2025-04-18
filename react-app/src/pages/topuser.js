import axios from 'axios';
import { useEffect, useState } from 'react';

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://example.com/api/posts');
      const userComments = {};

      res.data.forEach(post => {
        const user = post.user;
        const count = post.comments.length;
        userComments[user] = (userComments[user] || 0) + count;
      });

      const sortedUsers = Object.entries(userComments)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setTopUsers(sortedUsers);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      <ul className="list-group">
        {topUsers.map(([user, count], i) => (
          <li className="list-group-item" key={i}>
            <strong>{user}</strong>: {count} comments
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;