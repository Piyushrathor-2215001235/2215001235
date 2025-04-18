function PostCard({ post }) {
    const imageUrl = `https://picsum.photos/seed/${post.id}/200/150`;
  
    return (
      <div className="card mb-3">
        <img src={imageUrl} className="card-img-top" alt="Post" />
        <div className="card-body">
          <h5 className="card-title">Post #{post.id}</h5>
          <p className="card-text">{post.content}</p>
          <p className="card-text"><strong>Comments:</strong> {post.comments.length}</p>
        </div>
      </div>
    );
  }
  
  export default PostCard;