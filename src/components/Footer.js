import React from 'react'
import './Footer.css'
import { Link } from 'gatsby'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    <footer className="footer">
    
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        ホーム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        当サイトについて
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        記事一覧
                      </Link>
                    </li>
                    
                    
                  </ul>
                </section>
            </div>
             
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
