import Link from 'next/link';

const PostCard = ({post}) => {
  return (
    <div className="col-md-4">
      <div className="card card-blog">
        <div className="card-img">
          <Link prefetch href={{ pathname: '/post', query: { slug: post.slug } }} as={`/post/${post.slug}`}>
            <a><img src={post.jetpack_featured_media_url} alt className="img-fluid" /></a>
          </Link>
        </div>
        <div className="card-body">
          <div className="card-category-box">
            <div className="card-category">
              <h6 className="category">{post.categories[0].name}</h6>
            </div>
          </div>
          <h3 className="card-title">
            <Link prefetch href={{ pathname: '/post', query: { slug: post.slug } }} as={`/post/${post.slug}`}>
              <a>{post.title.rendered}</a>
            </Link>
          </h3>
          <p className="card-description" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
        </div>
        <div className="card-footer">
          <div className="post-author">
            <a href="#">
              <img src="/static/img/testimonial-2.jpg" alt className="avatar rounded-circle" />
              <span className="author">Morgan Freeman</span>
            </a>
          </div>
          <div className="post-date">
            <span className="ion-ios-clock-outline" /> 10 min
          </div>
        </div>
      </div>
    </div>
  )
};

export default PostCard;
