import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="top-nav navbar navbar-expand-xl navbar-dark fixed-top py-3">
        <div className="container-xl justify-content-between">
          <a className=" navbar-brand" href="/">
            <svg
              width="141"
              height="40"
              viewBox="0 0 141 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.58 27.288C54.252 27.288 52.964 27.112 51.716 26.76C50.484 26.392 49.492 25.92 48.74 25.344L50.06 22.416C50.78 22.944 51.636 23.368 52.628 23.688C53.62 24.008 54.612 24.168 55.604 24.168C56.708 24.168 57.524 24.008 58.052 23.688C58.58 23.352 58.844 22.912 58.844 22.368C58.844 21.968 58.684 21.64 58.364 21.384C58.06 21.112 57.66 20.896 57.164 20.736C56.684 20.576 56.028 20.4 55.196 20.208C53.916 19.904 52.868 19.6 52.052 19.296C51.236 18.992 50.532 18.504 49.94 17.832C49.364 17.16 49.076 16.264 49.076 15.144C49.076 14.168 49.34 13.288 49.868 12.504C50.396 11.704 51.188 11.072 52.244 10.608C53.316 10.144 54.62 9.912 56.156 9.912C57.228 9.912 58.276 10.04 59.3 10.296C60.324 10.552 61.22 10.92 61.988 11.4L60.788 14.352C59.236 13.472 57.684 13.032 56.132 13.032C55.044 13.032 54.236 13.208 53.708 13.56C53.196 13.912 52.94 14.376 52.94 14.952C52.94 15.528 53.236 15.96 53.828 16.248C54.436 16.52 55.356 16.792 56.588 17.064C57.868 17.368 58.916 17.672 59.732 17.976C60.548 18.28 61.244 18.76 61.82 19.416C62.412 20.072 62.708 20.96 62.708 22.08C62.708 23.04 62.436 23.92 61.892 24.72C61.364 25.504 60.564 26.128 59.492 26.592C58.42 27.056 57.116 27.288 55.58 27.288ZM70.8847 27.192C69.5247 27.192 68.3007 26.912 67.2127 26.352C66.1407 25.776 65.3007 24.984 64.6927 23.976C64.0847 22.968 63.7807 21.824 63.7807 20.544C63.7807 19.264 64.0847 18.12 64.6927 17.112C65.3007 16.104 66.1407 15.32 67.2127 14.76C68.3007 14.184 69.5247 13.896 70.8847 13.896C72.2447 13.896 73.4607 14.184 74.5327 14.76C75.6047 15.32 76.4447 16.104 77.0527 17.112C77.6607 18.12 77.9647 19.264 77.9647 20.544C77.9647 21.824 77.6607 22.968 77.0527 23.976C76.4447 24.984 75.6047 25.776 74.5327 26.352C73.4607 26.912 72.2447 27.192 70.8847 27.192ZM70.8847 24.12C71.8447 24.12 72.6287 23.8 73.2367 23.16C73.8607 22.504 74.1727 21.632 74.1727 20.544C74.1727 19.456 73.8607 18.592 73.2367 17.952C72.6287 17.296 71.8447 16.968 70.8847 16.968C69.9247 16.968 69.1327 17.296 68.5087 17.952C67.8847 18.592 67.5727 19.456 67.5727 20.544C67.5727 21.632 67.8847 22.504 68.5087 23.16C69.1327 23.8 69.9247 24.12 70.8847 24.12ZM84.4512 27.192C83.3792 27.192 82.3312 27.064 81.3072 26.808C80.2832 26.536 79.4672 26.2 78.8592 25.8L80.1072 23.112C80.6832 23.48 81.3792 23.784 82.1952 24.024C83.0112 24.248 83.8112 24.36 84.5952 24.36C86.1792 24.36 86.9712 23.968 86.9712 23.184C86.9712 22.816 86.7552 22.552 86.3232 22.392C85.8912 22.232 85.2272 22.096 84.3312 21.984C83.2752 21.824 82.4032 21.64 81.7152 21.432C81.0272 21.224 80.4272 20.856 79.9152 20.328C79.4192 19.8 79.1712 19.048 79.1712 18.072C79.1712 17.256 79.4032 16.536 79.8672 15.912C80.3472 15.272 81.0352 14.776 81.9312 14.424C82.8432 14.072 83.9152 13.896 85.1472 13.896C86.0592 13.896 86.9632 14 87.8592 14.208C88.7712 14.4 89.5232 14.672 90.1152 15.024L88.8672 17.688C87.7312 17.048 86.4912 16.728 85.1472 16.728C84.3472 16.728 83.7472 16.84 83.3472 17.064C82.9472 17.288 82.7472 17.576 82.7472 17.928C82.7472 18.328 82.9632 18.608 83.3952 18.768C83.8272 18.928 84.5152 19.08 85.4592 19.224C86.5152 19.4 87.3792 19.592 88.0512 19.8C88.7232 19.992 89.3072 20.352 89.8032 20.88C90.2992 21.408 90.5472 22.144 90.5472 23.088C90.5472 23.888 90.3072 24.6 89.8272 25.224C89.3472 25.848 88.6432 26.336 87.7152 26.688C86.8032 27.024 85.7152 27.192 84.4512 27.192ZM109.033 13.896C110.649 13.896 111.929 14.376 112.873 15.336C113.833 16.28 114.313 17.704 114.313 19.608V27H110.569V20.184C110.569 19.16 110.353 18.4 109.921 17.904C109.505 17.392 108.905 17.136 108.121 17.136C107.241 17.136 106.545 17.424 106.033 18C105.521 18.56 105.265 19.4 105.265 20.52V27H101.521V20.184C101.521 18.152 100.705 17.136 99.0732 17.136C98.2092 17.136 97.5212 17.424 97.0092 18C96.4972 18.56 96.2412 19.4 96.2412 20.52V27H92.4972V14.088H96.0732V15.576C96.5532 15.032 97.1372 14.616 97.8252 14.328C98.5292 14.04 99.2972 13.896 100.129 13.896C101.041 13.896 101.865 14.08 102.601 14.448C103.337 14.8 103.929 15.32 104.377 16.008C104.905 15.336 105.569 14.816 106.369 14.448C107.185 14.08 108.073 13.896 109.033 13.896ZM130.098 20.592C130.098 20.64 130.074 20.976 130.026 21.6H120.258C120.434 22.4 120.85 23.032 121.506 23.496C122.162 23.96 122.978 24.192 123.954 24.192C124.626 24.192 125.218 24.096 125.73 23.904C126.258 23.696 126.746 23.376 127.194 22.944L129.186 25.104C127.97 26.496 126.194 27.192 123.858 27.192C122.402 27.192 121.114 26.912 119.994 26.352C118.874 25.776 118.01 24.984 117.402 23.976C116.794 22.968 116.49 21.824 116.49 20.544C116.49 19.28 116.786 18.144 117.378 17.136C117.986 16.112 118.81 15.32 119.85 14.76C120.906 14.184 122.082 13.896 123.378 13.896C124.642 13.896 125.786 14.168 126.81 14.712C127.834 15.256 128.634 16.04 129.21 17.064C129.802 18.072 130.098 19.248 130.098 20.592ZM123.402 16.728C122.554 16.728 121.842 16.968 121.266 17.448C120.69 17.928 120.338 18.584 120.21 19.416H126.57C126.442 18.6 126.09 17.952 125.514 17.472C124.938 16.976 124.234 16.728 123.402 16.728ZM140.558 26.376C140.19 26.648 139.734 26.856 139.19 27C138.662 27.128 138.102 27.192 137.51 27.192C135.974 27.192 134.782 26.8 133.934 26.016C133.102 25.232 132.686 24.08 132.686 22.56V17.256H130.694V14.376H132.686V11.232H136.43V14.376H139.646V17.256H136.43V22.512C136.43 23.056 136.566 23.48 136.838 23.784C137.126 24.072 137.526 24.216 138.038 24.216C138.63 24.216 139.134 24.056 139.55 23.736L140.558 26.376Z"
                fill="#7F37A0"
              />
              <path
                d="M34.35 31.9834C35.3945 30.5833 36.1113 28.9666 36.4474 27.2525C36.7836 25.5383 36.7306 23.7706 36.2922 22.0797C35.8539 20.3888 35.0415 18.8179 33.915 17.483C32.7884 16.148 31.3765 15.0831 29.7833 14.3668C29.4363 12.3703 28.6388 10.4791 27.4514 8.83704C26.2639 7.19496 24.7179 5.84514 22.9306 4.89014C21.1433 3.93514 19.1618 3.40009 17.1368 3.32565C15.1117 3.25121 13.0963 3.63933 11.2437 4.46052C9.39114 5.28172 7.75011 6.51438 6.44532 8.06484C5.14054 9.61531 4.20632 11.4428 3.71366 13.4084C3.221 15.374 3.18285 17.4261 3.60213 19.4087C4.0214 21.3913 4.88706 23.2522 6.13333 24.8501L3.81667 27.1501C3.5854 27.3845 3.42874 27.6821 3.36645 28.0054C3.30416 28.3287 3.33903 28.6632 3.46667 28.9668C3.5917 29.2711 3.80403 29.5317 4.0769 29.7156C4.34976 29.8994 4.67096 29.9984 5 30.0001H14.4833C15.4277 31.9911 16.9167 33.6739 18.7779 34.8537C20.6391 36.0336 22.7964 36.6622 25 36.6668H35C35.329 36.6651 35.6502 36.5661 35.9231 36.3822C36.196 36.1983 36.4083 35.9378 36.5333 35.6334C36.661 35.3299 36.6958 34.9954 36.6335 34.6721C36.5713 34.3487 36.4146 34.0511 36.1833 33.8168L34.35 31.9834ZM13.3333 25.0001C13.3356 25.5582 13.3802 26.1154 13.4667 26.6668H9.01667L9.6 26.1001C9.75622 25.9452 9.88021 25.7608 9.96482 25.5577C10.0494 25.3546 10.093 25.1368 10.093 24.9168C10.093 24.6967 10.0494 24.4789 9.96482 24.2758C9.88021 24.0727 9.75622 23.8884 9.6 23.7334C8.66593 22.8096 7.92542 21.7088 7.42176 20.4955C6.9181 19.2821 6.6614 17.9805 6.66667 16.6668C6.66667 14.0146 7.72024 11.4711 9.5956 9.59569C11.471 7.72032 14.0145 6.66675 16.6667 6.66675C18.7361 6.65432 20.7575 7.29073 22.4465 8.48653C24.1356 9.68233 25.4075 11.3774 26.0833 13.3334C25.7167 13.3334 25.3667 13.3334 25 13.3334C21.9058 13.3334 18.9383 14.5626 16.7504 16.7505C14.5625 18.9384 13.3333 21.9059 13.3333 25.0001ZM30.9 33.3334L30.9833 33.4168H25C23.0722 33.4133 21.2053 32.7416 19.7172 31.5161C18.2291 30.2906 17.212 28.587 16.839 26.6957C16.466 24.8043 16.7603 22.8422 17.6718 21.1435C18.5832 19.4448 20.0554 18.1146 21.8376 17.3796C23.6197 16.6446 25.6016 16.5502 27.4456 17.1125C29.2895 17.6748 30.8815 18.859 31.9502 20.4633C33.019 22.0677 33.4985 23.993 33.307 25.9113C33.1155 27.8295 32.2649 29.622 30.9 30.9834C30.586 31.2911 30.4063 31.7105 30.4 32.1501C30.4009 32.3706 30.4456 32.5887 30.5314 32.7919C30.6172 32.995 30.7425 33.1791 30.9 33.3334Z"
                fill="#7F37A0"
              />
            </svg>
          </a>

          <div className="search-container">
            <ul className="navbar-nav mr-auto">
              <form
                className="form-inline"
                //onSubmit={this.searchUserBiodataTable}
              >
                <div className="col p-0 input-group">
                  <input
                    type="search"
                    className="sosmet-search-form form-control ds-input p-2 f-14"
                    placeholder="Search"
                    //value={searchUserBiodataTable}
                    //onChange={this.onChangeSearchFullname}
                  />
                  <button className="btn ml-1" type="submit">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.71 20.2899L18 16.6099C19.4401 14.8143 20.1375 12.5352 19.9488 10.2412C19.7601 7.94721 18.6997 5.81269 16.9855 4.27655C15.2714 2.74041 13.0338 1.91941 10.7329 1.98237C8.43207 2.04534 6.24275 2.98747 4.61517 4.61505C2.98759 6.24263 2.04546 8.43194 1.9825 10.7328C1.91954 13.0337 2.74053 15.2713 4.27667 16.9854C5.81281 18.6996 7.94733 19.76 10.2413 19.9487C12.5353 20.1374 14.8144 19.44 16.61 17.9999L20.29 21.6799C20.383 21.7736 20.4936 21.848 20.6154 21.8988C20.7373 21.9496 20.868 21.9757 21 21.9757C21.132 21.9757 21.2627 21.9496 21.3846 21.8988C21.5065 21.848 21.6171 21.7736 21.71 21.6799C21.8903 21.4934 21.991 21.2442 21.991 20.9849C21.991 20.7256 21.8903 20.4764 21.71 20.2899V20.2899ZM11 17.9999C9.61556 17.9999 8.26218 17.5894 7.11103 16.8202C5.95989 16.051 5.06268 14.9578 4.53287 13.6787C4.00306 12.3996 3.86443 10.9921 4.13453 9.63427C4.40463 8.27641 5.07131 7.02912 6.05028 6.05016C7.02925 5.07119 8.27653 4.4045 9.63439 4.13441C10.9923 3.86431 12.3997 4.00293 13.6788 4.53275C14.9579 5.06256 16.0511 5.95977 16.8203 7.11091C17.5895 8.26206 18 9.61544 18 10.9999C18 12.8564 17.2625 14.6369 15.9498 15.9497C14.637 17.2624 12.8565 17.9999 11 17.9999V17.9999Z"
                        fill="#929292"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </ul>
          </div>
          <div>
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
          </div>
        </div>
      </nav>
    );
  }
}
