import Link from "next/link";
import React from "react";

const Video = () => {
  return (
    <div className="ltn__video-popup-area ltn__video-popup-margin">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="ltn__video-bg-img ltn__video-popup-height-600  bg-image"
              data-bs-bg={"/img/hero.jpg"}
            >
              {/* <Link
                className="ltn__video-icon-2 ltn__video-icon-2-border"
                href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
                data-rel="lightcase:myCollection"
                 disabled="true"
              >
                <i className="fa fa-play"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
