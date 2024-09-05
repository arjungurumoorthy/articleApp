import React from "react";

interface Post {
  id: number;
  date: string;
  title: string;
  category: string;
  source: string;
  content: string;
  author: string;
  image: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <main className="content">
      {posts.length ? (
        posts.map((post) => (
          <article className="post" key={post.id}>
            <div className="post-header">
              <img
                src={`https://dummy-rest-api.specbee.site${post.image}`}
                alt="Post thumbnail"
                className="post-image"
              />
              <div className="post-details">
                <time dateTime={post.date}>{post.date}</time>
                <span className="source">{post.source}</span>
                <h1 className="post-title">{post.title}</h1>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <p className="post-author">{post.author}</p>
          </article>
        ))
      ) : (
        <p>No result found for Selection</p>
      )}
    </main>
  );
};

export default PostList;
