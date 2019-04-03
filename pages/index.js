import React from 'react';
import Layout from '../layout';
import axios from 'axios';
import PostCard from '../components/PostCard';

class Main extends React.Component {

  static async getInitialProps() {
    const res = await axios.get('https://oyaop.com/wp-json/wp/v2/latest');
    return { posts: res.data };
  }

  render() {
    return (
      <Layout title="SPA for Oya-Op">
        {/*/ Section Blog Star /*/}
        <section id="blog" className="blog-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Single Page Application
                  </h3>
                  <p className="subtitle-a">
                    Welcome to Single Page Application..
                  </p>
                  <div className="line-mf" />
                </div>
              </div>
            </div>
            <div className="row">
              {this.props.posts.map(post => <PostCard key={post.slug} post={post}/>)}
            </div>
          </div>
        </section>
        {/*/ Section Blog End /*/}

      </Layout>
    );
  }
}

export default Main;
