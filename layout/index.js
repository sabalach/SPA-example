import React from 'react';
import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content name="keywords" />
      <meta content name="description" />
      {/* Favicons */}
      <link href="/static/img/favicon.png" rel="icon" />
      <link href="/static/img/apple-touch-icon.png" rel="apple-touch-icon" />
      {/* Bootstrap CSS File */}
      <link href="/static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      {/* Libraries CSS Files */}
      <link href="/static/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
      <link href="/static/lib/animate/animate.min.css" rel="stylesheet" />
      <link href="/static/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
      <link href="/static/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="/static/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
      {/* Main Stylesheet File */}
      <link href="/static/css/style.css" rel="stylesheet" />
    </Head>

    {props.children}

    <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

    <script src="lib/jquery/jquery.min.js"></script>
    <script src="lib/jquery/jquery-migrate.min.js"></script>
    <script src="lib/popper/popper.min.js"></script>
    <script src="lib/bootstrap/js/bootstrap.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/counterup/jquery.waypoints.min.js"></script>
    <script src="lib/counterup/jquery.counterup.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>
    <script src="lib/typed/typed.min.js"></script>
    <script src="js/main.js"></script>
  </div>
)


export default Layout;
