import React from "react";

function ExtraGecici() {
  return (
    <div>
      <aside className="right-side">
        <div className="search-bar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input className="search" placeholder="Twitter'da Ara" />
        </div>
        <div className="trends">
          <header className="trends-header">
            <h2>
              <span>Trends for you</span>
            </h2>
          </header>
          <div className="trends-items">
            {/* Trends Item Start */}
            <div className="trends-item">
              <div>
                <span>Technology · Trending</span>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <circle cx={5} cy={12} r={2} />
                      <circle cx={12} cy={12} r={2} />
                      <circle cx={19} cy={12} r={2} />
                    </g>
                  </svg>
                </div>
              </div>
              <strong className="hashtag">#FrontendDeveloper</strong>
              <span>42,2 B Tweet</span>
            </div>
            {/* Trends Item End */}
            {/* Trends Item Start */}
            <div className="trends-item">
              <div>
                <span>Trending in Ankara</span>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <circle cx={5} cy={12} r={2} />
                      <circle cx={12} cy={12} r={2} />
                      <circle cx={19} cy={12} r={2} />
                    </g>
                  </svg>
                </div>
              </div>
              <strong className="hashtag">#PlacesToVisit</strong>
              <span>39 B Tweet</span>
            </div>
            {/* Trends Item End */}
            {/* Trends Item Start */}
            <div className="trends-item">
              <div>
                <span>Müsic · Trending</span>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <circle cx={5} cy={12} r={2} />
                      <circle cx={12} cy={12} r={2} />
                      <circle cx={19} cy={12} r={2} />
                    </g>
                  </svg>
                </div>
              </div>
              <strong className="hashtag">#CemAdrian</strong>
              <span>2.215 Tweet</span>
            </div>
            {/* Trends Item End */}
            {/* Trends Item Start */}
            <div className="trends-item">
              <div>
                <span>Trending in World</span>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <circle cx={5} cy={12} r={2} />
                      <circle cx={12} cy={12} r={2} />
                      <circle cx={19} cy={12} r={2} />
                    </g>
                  </svg>
                </div>
              </div>
              <strong className="hashtag">#Twitter</strong>
              <span>22,8 B Tweet</span>
            </div>
            {/* Trends Item End */}
            {/* Trends Item Start */}
            <div className="trends-item">
              <div>
                <span>Trending</span>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <circle cx={5} cy={12} r={2} />
                      <circle cx={12} cy={12} r={2} />
                      <circle cx={19} cy={12} r={2} />
                    </g>
                  </svg>
                </div>
              </div>
              <strong className="hashtag">#ValentinesDay</strong>
              <span>2.717 Tweet</span>
            </div>
            {/* Trends Item End */}
            <div className="more-btn">
              <span>Show more</span>
            </div>
          </div>
        </div>
        <div className="who-to-follow">
          <header className="who-to-follow-header">
            <h2>You might like</h2>
          </header>
          <div className="users">
            {/* User Item Start */}
            <div className="user">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M8.652,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C8.989,16.555,8.838,16.404,8.652,16.404z"></path>
                <path d="M11.348,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C11.685,16.555,11.535,16.404,11.348,16.404z"></path>
                <path d="M17.415,5.281V4.607c0-2.224-1.847-4.045-4.103-4.045H10H6.687c-2.256,0-4.103,1.82-4.103,4.045v0.674H10H17.415z"></path>
                <path d="M18.089,10.674V7.304c0,0,0-0.674-0.674-0.674V5.955H10H2.585v0.674c-0.674,0-0.674,0.674-0.674,0.674v3.371c-0.855,0.379-1.348,1.084-1.348,2.022c0,1.253,2.009,3.008,2.009,3.371c0,2.022,1.398,3.371,3.436,3.371c0.746,0,1.43-0.236,1.98-0.627c-0.001-0.016-0.009-0.03-0.009-0.047v-2.022c0-0.372,0.303-0.674,0.674-0.674c0.301,0,0.547,0.201,0.633,0.474h0.041v-0.137c0-0.372,0.303-0.674,0.674-0.674s0.674,0.302,0.674,0.674v0.137h0.041c0.086-0.273,0.332-0.474,0.633-0.474c0.371,0,0.674,0.302,0.674,0.674v2.022c0,0.016-0.008,0.03-0.009,0.047c0.55,0.391,1.234,0.627,1.98,0.627c2.039,0,3.436-1.348,3.436-3.371c0-0.362,2.009-2.118,2.009-3.371C19.438,11.758,18.944,11.053,18.089,10.674z M5.618,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011s1.011,0.453,1.011,1.011S6.177,18.089,5.618,18.089z M6.629,13.371H5.474c-0.112,0-0.192-0.061-0.192-0.135c0-0.074,0.08-0.151,0.192-0.174l1.156-0.365V13.371z M8.652,12.521c-0.394,0.163-0.774,0.366-1.148,0.55c-0.061,0.03-0.132,0.052-0.2,0.076v-0.934c0.479-0.411,0.906-0.694,1.348-0.879V12.521z M5.281,10c-1.348,0-1.348-2.696-1.348-2.696h5.393C9.326,7.304,6.629,10,5.281,10z M10.674,12.296c-0.22-0.053-0.444-0.084-0.674-0.084s-0.454,0.032-0.674,0.084v-1.168C9.539,11.086,9.762,11.06,10,11.05c0.238,0.01,0.461,0.036,0.674,0.078V12.296z M12.696,13.146c-0.068-0.024-0.14-0.046-0.2-0.076c-0.374-0.184-0.754-0.386-1.148-0.55v-1.188c0.442,0.185,0.87,0.467,1.348,0.879V13.146zM14.382,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011c0.558,0,1.011,0.453,1.011,1.011S14.94,18.089,14.382,18.089z M13.371,13.371v-0.674l1.156,0.365c0.112,0.022,0.192,0.099,0.192,0.174c0,0.074-0.08,0.135-0.192,0.135H13.371z M14.719,10c-1.348,0-4.045-2.696-4.045-2.696h5.393C16.067,7.304,16.067,10,14.719,10z"></path>
                <path d="M10,16.067c-0.186,0-0.337,0.151-0.337,0.337V19.1c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.696C10.337,16.218,10.186,16.067,10,16.067z"></path>
              </svg>
              <div>
                <div>
                  <strong className="user-name">Jack London</strong>
                  <span className="tag">@JackL</span>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            </div>
            {/* User Item End */}
            {/* User Item Start */}
            <div className="user">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M16.853,8.355V5.888c0-3.015-2.467-5.482-5.482-5.482H8.629c-3.015,0-5.482,2.467-5.482,5.482v2.467l-2.741,7.127c0,1.371,4.295,4.112,9.594,4.112s9.594-2.741,9.594-4.112L16.853,8.355z M5.888,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C6.402,17.137,6.173,17.367,5.888,17.367z M5.203,10c0-0.377,0.19-0.928,0.423-1.225c0,0,0.651-0.831,1.976-0.831c0.672,0,1.141,0.309,1.141,0.309C9.057,8.46,9.315,8.938,9.315,9.315v1.028c0,0.188-0.308,0.343-0.685,0.343H5.888C5.511,10.685,5.203,10.377,5.203,10z M7.944,16.853H7.259v-1.371l0.685-0.685V16.853z M9.657,16.853H8.629v-2.741h1.028V16.853zM8.972,13.426v-1.028c0-0.568,0.46-1.028,1.028-1.028c0.568,0,1.028,0.46,1.028,1.028v1.028H8.972z M11.371,16.853h-1.028v-2.741h1.028V16.853z M12.741,16.853h-0.685v-2.056l0.685,0.685V16.853z M14.112,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C14.626,17.137,14.396,17.367,14.112,17.367z M14.112,10.685h-2.741c-0.377,0-0.685-0.154-0.685-0.343V9.315c0-0.377,0.258-0.855,0.572-1.062c0,0,0.469-0.309,1.141-0.309c1.325,0,1.976,0.831,1.976,0.831c0.232,0.297,0.423,0.848,0.423,1.225S14.489,10.685,14.112,10.685z M18.347,15.801c-0.041,0.016-0.083,0.023-0.124,0.023c-0.137,0-0.267-0.083-0.319-0.218l-2.492-6.401c-0.659-1.647-1.474-2.289-2.905-2.289c-0.95,0-1.746,0.589-1.754,0.595c-0.422,0.317-1.084,0.316-1.507,0C9.239,7.505,8.435,6.916,7.492,6.916c-1.431,0-2.246,0.642-2.906,2.292l-2.491,6.398c-0.069,0.176-0.268,0.264-0.443,0.195c-0.176-0.068-0.264-0.267-0.195-0.444l2.492-6.401c0.765-1.911,1.824-2.726,3.543-2.726c1.176,0,2.125,0.702,2.165,0.731c0.179,0.135,0.506,0.135,0.685,0c0.04-0.029,0.99-0.731,2.165-0.731c1.719,0,2.779,0.814,3.542,2.723l2.493,6.404C18.611,15.534,18.524,15.733,18.347,15.801z"></path>
              </svg>
              <div>
                <div>
                  <strong className="user-name">Martin Eden</strong>
                  <span className="tag">@martinE</span>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            </div>
            {/* User Item End */}
            {/* User Item Start */}
            <div className="user">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <polygon points="18.198,7.95 3.168,7.95 3.168,8.634 9.317,9.727 9.317,19.564 12.05,19.564 12.05,9.727 18.198,8.634 "></polygon>
                <path d="M2.485,10.057v-3.41H2.473l0.012-4.845h1.366c0.378,0,0.683-0.306,0.683-0.683c0-0.378-0.306-0.683-0.683-0.683H1.119c-0.378,0-0.683,0.306-0.683,0.683c0,0.378,0.306,0.683,0.683,0.683h0.683v4.845C1.406,6.788,1.119,7.163,1.119,7.609v2.733c0,0.566,0.459,1.025,1.025,1.025c0.053,0,0.105-0.008,0.157-0.016l-0.499,5.481l5.9,2.733h0.931C8.634,13.266,5.234,10.458,2.485,10.057z"></path>
                <path d="M18.169,6.584c-0.303-3.896-3.202-6.149-7.486-6.149c-4.282,0-7.183,2.252-7.484,6.149H18.169z M15.463,3.187c0.024,0.351-0.103,0.709-0.394,0.977c-0.535,0.495-1.405,0.495-1.94,0c-0.29-0.268-0.418-0.626-0.394-0.977C13.513,3.827,14.683,3.827,15.463,3.187z"></path>
                <path d="M18.887,10.056c-2.749,0.398-6.154,3.206-6.154,9.508h0.933l5.899-2.733L18.887,10.056z"></path>
              </svg>
              <div>
                <div>
                  <strong className="user-name">Alex de Souza</strong>
                  <span className="tag">@alex</span>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            </div>
            {/* User Item End */}
            <div className="more-btn">
              <span>Show more</span>
            </div>
          </div>
        </div>

        <footer>
          <nav>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
            <span>Imprint</span>
            <span>Accessibility</span>
            <span>Ads info</span>

            <span>
              More{" "}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <circle cx={5} cy={12} r={2} />
                  <circle cx={12} cy={12} r={2} />
                  <circle cx={19} cy={12} r={2} />
                </g>
              </svg>
            </span>
            <span>© 2023 Twitter, Inc.</span>
          </nav>
        </footer>
      </aside>
    </div>
  );
}

export default ExtraGecici;
