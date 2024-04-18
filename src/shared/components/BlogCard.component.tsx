import time from '../assets/svg/time.svg';
import like from '../assets/svg/like.svg';
import share from '../assets/svg/share.svg';
import flash from '../assets/svg/flash.svg';
import bookmark from '../assets/svg/bookmark-outline.svg';

interface IBlogCardProps {
  //   title: string;
  //   description: string;
  //   img: string;
  //   author: string;
  //   time: string;
  //   liked: string;
  //   share: string;
  //   bookmark: string;
  //   popular: boolean;
  showImage: boolean;
}

export const BlogCard = ({ showImage = true }: IBlogCardProps) => {
  return (
    <>
      <a href="eggs.html">
        <div
          className="blog-container"
          id={!showImage ? 'blog-header-description' : ''}
        >
          {showImage ? (
            <img
              className="blog-image"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F12%2F06%2F201302-xl-ratatouille-toasts-with-fried-eggs-2000.jpg"
              alt=""
              srcSet=""
            />
          ) : null}
          {/* Popular tag  */}
          {showImage ? (
            <div className="blog-tag">
              <img src={flash} alt="" />
              <span>popular</span>
            </div>
          ) : null}
          <section className="blog-content">
            <div className="blog-text-mini-head">
              <div className="blog-text-mini-head-item">
                <img src={time} alt="" /> <span>1 hr 20 mins</span>
              </div>
              <div className="blog-text-mini-head-item">
                <img src={like} alt="" /> <span>Super Easy</span>
              </div>
            </div>
            <div className="blog-text-title">
              Ratatouille Toasts with Fried Eggs
            </div>
            <div className="blog-text-description">
              This is an ideal make-ahead brunch recipe; the luscious
              ratatouille tastes even better when made the day before..
            </div>

            <div className="blog-text-footer">
              <div className="blog-footer-author">
                <img
                  src="https://images.unsplash.com/photo-1533674689012-136b487b7736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                  srcSet=""
                />
                <div>
                  <div>Zoe Nathan</div>
                  <div>February 2013</div>
                </div>
              </div>

              <div className="blog-footer-options">
                <span>
                  <img src={share} alt="" srcSet="" />
                </span>
                <span>
                  <img src={bookmark} alt="" srcSet="" />
                </span>
              </div>
            </div>
          </section>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
