import React from 'react';
// feed more data to photos
// get a list of url s3 at least 30
const Photo = ({
  imgUrl, text,
}) => (
  <>
    <div className="showcase-photo-box">
      <a href="https://www.yelp.com">
        <img
          alt="pictures from restaurant"
          className="photo-box-img"
          height="250"
          src={imgUrl}
          // srcSet={`${img258} 1.03x,${img348} 1.39x,${img300} 1.20x`}
          width="250"
        />
      </a>
    </div>
    <div className="photo-box-memo">
      <div className="media-block photo-box-memo_caption">
        <div className="media-avatar avatar">
          <div className="photo-box pb-30s">
            <a href="https://www.yelp.com">
              <img
                alt="John"
                className="photo-box-img"
                height="30"
                // src="https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg"
                src="http://pbs.twimg.com/profile_images/1099856449918943232/hKv3Fddh.jpg"
                // srcSet="https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/60s.jpg 2.00x,https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/90s.jpg 3.00x,https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/ss.jpg 1.33x"
                width="30"
              />
            </a>
          </div>
        </div>
        <div className="media-story">
          <span className="photo-desc">{text}</span>
          <span className="author">
            {' by '}
            <a className="username" href="https://www.yelp.com">John</a>
          </span>
        </div>
      </div>
    </div>
  </>
);
export default Photo;
