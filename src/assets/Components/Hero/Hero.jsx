import React from "react";
import "./Hero.css";
import { FaDiamond, FaBolt, FaYoutube, FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { FaDev } from 'react-icons/fa';

const Hero = ({ type }) => {
  let content;
  if (type === "links") {
    content = (
      <div className="links-list">
        <a className="link-btn" href="https://twitter.com/tomaengineer" target="_blank" rel="noopener noreferrer"><FaXTwitter style={{ marginRight: 8 }} /> Twitter</a>
        <a className="link-btn" href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ marginRight: 8 }} /> LinkedIn</a>
        <a className="link-btn" href="/blogs" target="_blank" rel="noopener noreferrer"><FaDev style={{ marginRight: 8 }} /> Blog</a>
        <a className="link-btn" href="https://github.com/sytn" target="_blank" rel="noopener noreferrer"><FaGithub style={{ marginRight: 8 }} /> GitHub</a>
      </div>
    );
  } else if (type === "blogs") {
    content = (
      <div className="blogs-list">
        <a className="blog-card" href="https://dev.to/sytn/heyo-43kg" target="_blank" rel="noopener noreferrer">
          <div className="blog-title-row">
            <span className="blog-title">This is my first post. testing the platform.</span>
            <span className="blog-badge">New</span>
          </div>
          <div className="blog-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, necessitatibus.</div>
          <div className="blog-meta">March 10 · 6 minutes read</div>
        </a>
        <a className="blog-card" href="https://dev.to/sytn" target="_blank" rel="noopener noreferrer">
          <div className="blog-title-row">
            <span className="blog-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, id!</span>
          </div>
          <div className="blog-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, labore.</div>
          <div className="blog-meta">March 5, 2024 · 2 minutes read</div>
        </a>
        <a className="blog-card" href="https://dev.to/sytn" target="_blank" rel="noopener noreferrer">
          <div className="blog-title-row">
            <span className="blog-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, natus.</span>
          </div>
          <div className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eligendi?</div>
          <div className="blog-meta">January 10, 2024 · 13 minutes read</div>
        </a>
      </div>
    );
  } else if (type === "posts") {
    content = (
      <div className="posts-list">
        <div className="post-card">
          <div className="post-title">I'll fetch my Twitter posts to here.</div>
        </div>
      </div>
    );
  } else {
    content = (
      <>
        <h1>Hello</h1>
        <p>My name is Berkcan Alkan,<br />
          I'm a Software Engineer<br />
          and X(twitter) user<br />
          from Turkiye
        </p>
        <button className="hero-button">Contact me</button>
      </>
    );
  }

  return (
    <div className="hero-container">
      <div className="hero-content">
        {content}
      </div>
    </div>
  );
}

export default Hero;