import React, { Component } from "react";
import Navbar from "../components/navbar";
import Feed from "../components/feed";
import AccountCard from "../components/account-card";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <Navbar></Navbar>
        <div className="section-main container">
          <div className="row">
            <div className="feeds-wrapper col-8 pr-5">
              <Feed></Feed>
              <Feed></Feed>
              <Feed></Feed>
              <Feed></Feed>
              <Feed></Feed>
            </div>
            <aside className="sidebar-wrapper col-4">
              <div className="sidebar-landing-page-heading h4 pr-5">
                Sign Up or Log In To Follow Poster
              </div>
              <div className="sidebar-suggested-account">
                <div className="h6 my-4">Suggested Account</div>
                <div>
                  <AccountCard></AccountCard>
                  <AccountCard></AccountCard>
                  <AccountCard></AccountCard>
                  <AccountCard></AccountCard>
                  <AccountCard></AccountCard>
                </div>
                <div className="mt-3">
                  <a href="#" className="more-account-link">
                    <span className="more-account pr-2">more</span>
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L0.535899 -3.01142e-07L7.4641 -9.06825e-07L4 6Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="info-web">
                <div class="about">
                  <nav class="nav-about">
                    <ul class="underlist-link">
                      <li class="list-link">
                        <a class="link-about" href="/about" target="_blank">
                          About us
                        </a>
                      </li>
                      <li class="list-link">
                        <a class="link-contact" href="/contact">
                          Contact
                        </a>
                      </li>
                      <li class="list-link">
                        <a class="link-privacy-policy" href="/privacy-policy">
                          Privacy Policy
                        </a>
                      </li>
                      <li class="list-link">
                        <a class="link-terms" href="/terms-and-conditions">
                          Terms
                        </a>
                      </li>
                      <li class="list-link">
                        <a class="link-archive" href="#">
                          Archive
                        </a>
                      </li>
                      <li class="list-link">
                        <a class="link-category" href="#">
                          Category
                        </a>
                      </li>
                      <li class="list-link">
                        <a class="link-tags" href="#">
                          Hastags
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <span class="copyright">
                    © 2019 <a href="/">sosmet.com</a>
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}
