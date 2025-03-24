import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPage.css";

function BlogPage() {
  const navigate = useNavigate();

  const blogPosts = [
    { id: 1, title: "Understanding AI in Art", content: "This is a deep dive into AI-generated art..." },
    { id: 2, title: "How React Changed Web Development", content: "React transformed the way we build UIs..." },
    { id: 3, title: "Exploring Generative Models", content: "Let's explore the future of AI-generated content..." },
  ];

  return (
    <div className="blog-page">
      <h2>All Blog Posts</h2>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3 className="blog-title">{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default BlogPage;
