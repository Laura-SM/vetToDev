import React from 'react';
import './Blog.scss';

function Blog() {
  return (
    <div className="blog" id="blog">
      <h2>BLOG</h2>
      <p>
        When I started my career as a developer,
        I decided to have a blog to write about what I am learning.
        If you are curious about my posts, visit my blog. I will appreciate any comment or feedback.
      </p>
      <div className="blog__link">
        <a href="/blog">Visit my blog!</a>
      </div>

    </div>

  );
}

export default Blog;
