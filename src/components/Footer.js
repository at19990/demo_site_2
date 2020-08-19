import React from 'react'
import './Footer.css'
import { Link } from 'gatsby'

import facebook from '../../static/images/social/facebook.svg'
import instagram from '../../static/images/social/instagram.svg'
import twitter from '../../static/images/social/twitter.svg'
import vimeo from '../../static/images/social/vimeo.svg'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    <footer className="footer">
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
    
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
             
            <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    
                    <li>
                      <Link className="navbar-item" to="/contact">
                        お問い合わせ
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        管理者用ページ
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
          
    
            <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
      </div>
        </div>
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
