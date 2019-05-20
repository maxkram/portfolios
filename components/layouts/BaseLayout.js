import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    cannonical
  } = props;
  const headerType = props.headerType || "default";
  const title = props.title || "Max Kramer Portfolio";
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="My name is Max Kramer and I am a web developer. I have a Master's degrees in Social Sciences and several years of experience working on a wide range of technologies and projects from coding for research to modern web applications in React."
        />
        <meta
          name="keywords"
          content="kramer portfolio, kramer developer, kramer freelancig, kramer programming"
        />
        <meta
          property="og:title"
          content="Max Kramer - programmer, developer, bloger"
        />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Max Kramer and I am a web developer."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          />
        )}
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
