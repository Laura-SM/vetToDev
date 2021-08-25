import React from 'react';
import './style.scss';

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
        <a className="blog__anchor" href="https://blog.vettodev.com" target="_blank" aria-label="blog-link" title="Laura's blog" rel="noreferrer">Visit my blog!</a>
      </div>
    </div>
  );
}

export default Blog;
