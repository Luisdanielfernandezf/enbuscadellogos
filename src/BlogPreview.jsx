import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPreview.css";

function BlogPreview() {
  const navigate = useNavigate();

  const blogPosts = [
    { id: 1, title: "Understanding AI in Art", excerpt: "AI-generated art is taking over the creative world. Let's explore..." },
    { id: 2, title: "How React Changed Web Development", excerpt: "A deep dive into how React transformed modern front-end development..." },
    { id: 3, title: "Exploring Generative Models", excerpt: "How AI is evolving to create lifelike images and videos..." },
  ];

  return (
    <div className="blog-preview">
      <h2>Latest Blog Posts</h2>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card" onClick={() => navigate("/blog")}>
          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-excerpt">{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPreview;
