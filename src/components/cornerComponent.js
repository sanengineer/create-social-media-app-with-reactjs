import React from "react";
import { NavDropdown } from "react-bootstrap";

// import assets
import noPict from "../assets/images/user_no-pict.jpg";

export const CornerComponent = ({ whoami, logOut, auth }) => {
  //
  //
  // console.log(whoami.length);
  // console.log("LOGOUUUTTT:", logOut);

  let whoAmiProfileSrc;

  if (whoami.avatar) {
    whoAmiProfileSrc = whoami.avatar;
  } else {
    whoAmiProfileSrc = noPict;
  }

  if (auth.isAuthenticated === false) {
    return (
      <ul className="navbar-nav d-lg-flex order-4">
        <li className="...">
          <a className="login-btn btn text-uppercase" href="/login">
            Login
          </a>
        </li>
        <li className="...">
          <a className="signup-btn btn text-uppercase" href="/register">
            Sign Up
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <NavDropdown
        className="testcccc "
        title={
          <img
            className="img-avatar-navbar avatar rounded-circle"
            src={whoAmiProfileSrc}
            alt="user pic"
            width="30"
            height="30"
          />
        }
        id="collasible-nav-dropdown"
      >
        {/* <div className="who-am-i-navbar-detail f-12">
          <strong>Sign In as:</strong>
          <br />
          {whoami.username}
        </div> */}
        {/* <NavDropdown.Divider /> */}
        <div className="dashboard-link f-12">
          <NavDropdown.Item
            href={"/" + whoami.username}
            className="pt-3 pr-2 pb-2 pl-2"
          >
            <span className="icon-profile">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.0605 2.00369 8.16393 2.57131 6.54128 3.63374C4.91862 4.69617 3.63994 6.20754 2.86099 7.98377C2.08204 9.76 1.83643 11.7244 2.15408 13.6378C2.47173 15.5511 3.33893 17.3308 4.65005 18.76C5.58647 19.775 6.72299 20.5851 7.98799 21.1392C9.25298 21.6933 10.619 21.9793 12 21.9793C13.3811 21.9793 14.7471 21.6933 16.0121 21.1392C17.2771 20.5851 18.4136 19.775 19.35 18.76C20.6612 17.3308 21.5284 15.5511 21.846 13.6378C22.1637 11.7244 21.9181 9.76 21.1391 7.98377C20.3602 6.20754 19.0815 4.69617 17.4588 3.63374C15.8362 2.57131 13.9396 2.00369 12 2ZM12 20C9.92851 19.9969 7.93896 19.1903 6.45005 17.75C6.90209 16.6495 7.67108 15.7083 8.6593 15.0459C9.64752 14.3835 10.8104 14.0298 12 14.0298C13.1897 14.0298 14.3526 14.3835 15.3408 15.0459C16.329 15.7083 17.098 16.6495 17.55 17.75C16.0611 19.1903 14.0716 19.9969 12 20ZM10 10C10 9.60444 10.1173 9.21776 10.3371 8.88886C10.5569 8.55996 10.8692 8.30362 11.2347 8.15224C11.6001 8.00087 12.0023 7.96126 12.3902 8.03843C12.7782 8.1156 13.1346 8.30608 13.4143 8.58579C13.694 8.86549 13.8844 9.22186 13.9616 9.60982C14.0388 9.99778 13.9992 10.3999 13.8478 10.7654C13.6964 11.1308 13.4401 11.4432 13.1112 11.6629C12.7823 11.8827 12.3956 12 12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2108 11.0391 10 10.5304 10 10ZM18.91 16C18.0166 14.4718 16.6415 13.283 15 12.62C15.5092 12.0427 15.841 11.3307 15.9555 10.5694C16.0701 9.80822 15.9625 9.03011 15.6458 8.3285C15.3291 7.62688 14.8166 7.03156 14.17 6.61397C13.5233 6.19637 12.7698 5.97425 12 5.97425C11.2303 5.97425 10.4768 6.19637 9.83014 6.61397C9.18346 7.03156 8.67102 7.62688 8.3543 8.3285C8.03758 9.03011 7.93004 9.80822 8.04458 10.5694C8.15912 11.3307 8.49088 12.0427 9.00005 12.62C7.35865 13.283 5.98352 14.4718 5.09005 16C4.37799 14.7871 4.00177 13.4065 4.00005 12C4.00005 9.87827 4.8429 7.84344 6.34319 6.34315C7.84349 4.84285 9.87832 4 12 4C14.1218 4 16.1566 4.84285 17.6569 6.34315C19.1572 7.84344 20 9.87827 20 12C19.9983 13.4065 19.6221 14.7871 18.91 16Z"
                  fill="#010101"
                />
              </svg>
            </span>
            <span className="text-left">Profile</span>
          </NavDropdown.Item>
          <NavDropdown.Item
            href="/edit-profile"
            className="pt-2 pr-2 pb-2 pl-2"
          >
            <span className="icon-setting">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="text-left">Setting</span>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className="text-left pt-2 pr-2 pb-3 pl-3">
            <button className="logout-btn btn f-12 " onClick={() => logOut()}>
              Log Out
            </button>
          </NavDropdown.Item>
        </div>
      </NavDropdown>
    );
  }
};
