import React, { useState } from 'react'
import './SocialMedia.css'

function SocialMedia() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="social-media">
      <button
        type="button"
        className="socialButton"
        onClick={toggleDropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="megaphone"
          viewBox="0 0 16 16">
          <path
            d={`M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 
          1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 
          7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 
          2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 
          1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 
          1.692.064c.327.017.65.037.966.06z`}
          />
        </svg>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={`M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 
            11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 
            9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 
            9.17678 18.2374 9.17678 18.5303 9.46967Z`}
            fill="#ccc"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="social-media-dropdown">
          <ul className="social-media-list">
            <li>
              <img
                alt=""
                src="src/assets/Twitter.png"
                className="imageList"
              />
              Twitter
            </li>
            <li>
              <img
                alt=""
                src="src/assets/reddit.png"
                className="imageList"
              />
              Reddit
            </li>
            <li>
              <img
                alt=""
                src="src/assets/blog.png"
                className="imageList"
              />
              Blog
            </li>
            <li>
              <img
                alt=""
                src="src/assets/newsletter.png"
                className="imageList"
              />
              Newsletter
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SocialMedia
