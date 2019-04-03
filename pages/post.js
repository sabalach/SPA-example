import React from 'react';
import Layout from '../layout';
import axios from 'axios';
import Link from 'next/link';

class Single extends React.Component {
  static async getInitialProps({query}) {
    const res = await axios.get(`https://oyaop.com/wp-json/wp/v2/latest?slug=${query.slug}`);
    return { post: res.data[0] };
  }

  render() {
    const { post } = this.props;
    return (
      <Layout title={post.title.rendered}>
        <div>

          <section className="blog-wrapper sect-pt4" id="blog">
            <div className="container">
              <Link href="/">
                <a>
                  <h1 className="article-title">&lt;&lt; Back To Home</h1>
                </a>
              </Link>
              <div className="row">
                <div className="col-md-8">
                  <div className="post-box">
                    <div className="post-thumb">
                      <img src={post.jetpack_featured_media_url} className="img-fluid"  />
                    </div>
                    <div className="post-meta">
                      <h1 className="article-title">{post.title.rendered}</h1>
                      <ul>
                        <li>
                          <span className="ion-ios-person" />
                          <a href="#">Jason London</a>
                        </li>
                        <li>
                          <span className="ion-pricetag" />
                          <a href="#">{post.categories[0].name}</a>
                        </li>
                        <li>
                          <span className="ion-chatbox" />
                          <a href="#">14</a>
                        </li>
                      </ul>
                    </div>
                    <div className="article-content" dangerouslySetInnerHTML={{__html: post.content.rendered}}>
                    </div>
                  </div>
                  <div className="box-comments">
                    <div className="title-box-2">
                      <h4 className="title-comments title-left">Comments (34)</h4>
                    </div>
                    <ul className="list-comments">
                      <li>
                        <div className="comment-avatar">
                          <img src="/static/img/testimonial-2.jpg" />
                        </div>
                        <div className="comment-details">
                          <h4 className="comment-author">Oliver Colmenares</h4>
                          <span>18 Sep 2017</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                            ipsam temporibus maiores
                            quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet corporis.
                          </p>
                          <a href={3}>Reply</a>
                        </div>
                      </li>
                      <li>
                        <div className="comment-avatar">
                          <img src="/static/img/testimonial-4.jpg"  />
                        </div>
                        <div className="comment-details">
                          <h4 className="comment-author">Carmen Vegas</h4>
                          <span>18 Sep 2017</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                            ipsam temporibus maiores
                            quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet corporis,
                            veritatis deserunt.
                          </p>
                          <a href={3}>Reply</a>
                        </div>
                      </li>
                      <li className="comment-children">
                        <div className="comment-avatar">
                          <img src="/static/img/testimonial-2.jpg"  />
                        </div>
                        <div className="comment-details">
                          <h4 className="comment-author">Oliver Colmenares</h4>
                          <span>18 Sep 2017</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                            ipsam temporibus maiores
                            quae.
                          </p>
                          <a href={3}>Reply</a>
                        </div>
                      </li>
                      <li>
                        <div className="comment-avatar">
                          <img src="/static/img/testimonial-2.jpg"  />
                        </div>
                        <div className="comment-details">
                          <h4 className="comment-author">Oliver Colmenares</h4>
                          <span>18 Sep 2017</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                            ipsam temporibus maiores
                            quae natus libero optio.
                          </p>
                          <a href={3}>Reply</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="form-comments">
                    <div className="title-box-2">
                      <h3 className="title-left">
                        Leave a Reply
                      </h3>
                    </div>
                    <form className="form-mf">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control input-mf" id="inputName" placeholder="Name *" required />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <input type="email" className="form-control input-mf" id="inputEmail1" placeholder="Email *" required />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="url" className="form-control input-mf" id="inputUrl" placeholder="Website" />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea id="textMessage" className="form-control input-mf" placeholder="Comment *" name="message" cols={45} rows={8} required defaultValue={''} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="widget-sidebar sidebar-search">
                    <h5 className="sidebar-title">Search</h5>
                    <div className="sidebar-content">
                      <form>
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
                          <span className="input-group-btn">
                            <button className="btn btn-secondary btn-search" type="button">
                              <span className="ion-android-search" />
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="widget-sidebar">
                    <h5 className="sidebar-title">Recent Post</h5>
                    <div className="sidebar-content">
                      <ul className="list-sidebar">
                        <li>
                          <a href="#">Atque placeat maiores.</a>
                        </li>
                        <li>
                          <a href="#">Lorem ipsum dolor sit amet consectetur</a>
                        </li>
                        <li>
                          <a href="#">Nam quo autem exercitationem.</a>
                        </li>
                        <li>
                          <a href="#">Atque placeat maiores nam quo autem</a>
                        </li>
                        <li>
                          <a href="#">Nam quo autem exercitationem.</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-sidebar">
                    <h5 className="sidebar-title">Archives</h5>
                    <div className="sidebar-content">
                      <ul className="list-sidebar">
                        <li>
                          <a href="#">September, 2017.</a>
                        </li>
                        <li>
                          <a href="#">April, 2017.</a>
                        </li>
                        <li>
                          <a href="#">Nam quo autem exercitationem.</a>
                        </li>
                        <li>
                          <a href="#">Atque placeat maiores nam quo autem</a>
                        </li>
                        <li>
                          <a href="#">Nam quo autem exercitationem.</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-sidebar widget-tags">
                    <h5 className="sidebar-title">Tags</h5>
                    <div className="sidebar-content">
                      <ul>
                        <li>
                          <a href="#">Web.</a>
                        </li>
                        <li>
                          <a href="#">Design.</a>
                        </li>
                        <li>
                          <a href="#">Travel.</a>
                        </li>
                        <li>
                          <a href="#">Photoshop</a>
                        </li>
                        <li>
                          <a href="#">Corel Draw</a>
                        </li>
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ Section Blog-Single End /*/}
          {/*/ Section Contact-Footer Star /*/}
          <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: 'url(img/overlay-bg.jpg)'}}>
            <div className="overlay-mf" />
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="copyright-box">
                      <p className="copyright">© Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
                      <div className="credits">
                        {/*
                    All the links in the footer should remain intact.
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
                  */}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </section>
          {/*/ Section Contact-footer End /*/}
        </div>

      </Layout>
    );
  }
}

export default Single;
