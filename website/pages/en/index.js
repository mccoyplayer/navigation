/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="projectLogo">
              <img src={siteConfig.baseUrl + 'img/spiro.svg'} />
            </div>
            <div className="inner">
              <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
              </h2>

              <div className="section promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button href="/docs/getting-started.html">
                      Read guides
                    </Button>
                    <Button href="/docs/api-reference.html">
                      Read API Reference
                    </Button>
                    <Button href="https://expo.io/@react-navigation/NavigationPlayground">
                      Try the demo app
                    </Button>
                    {/* <Button href="https://snack.expo.io/@react-navigation/hello-world">Run "Hello World" in Snack</Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || 'en';
    const showcase = siteConfig.users
      .filter(user => {
        return user.pinned;
      })
      .map(user => {
        return (
          <a href={user.infoLink}>
            <img src={user.image} title={user.caption} />
          </a>
        );
      });

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Container padding={['bottom', 'top']}>
            <GridBlock
              align="center"
              contents={[
                {
                  content:
                    'Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.',
                  // image: siteConfig.baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'top',
                  title: 'Easy-to-use',
                },
                {
                  content:
                    'Platform-specific look-and-feel with smooth animations and gestures.',
                  // image: siteConfig.baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'top',
                  title: 'Components built for iOS and Android',
                },
                {
                  content:
                    'If you know how to write apps using JavaScript you can customize any part of React Navigation.',
                  // image: siteConfig.baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'top',
                  title: 'Completely customizable',
                },
                {
                  content:
                    "React Navigation is extensible at every layer&mdash; you can write your own navigators or even replace the user-facing API.",
                  // image: siteConfig.baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'top',
                  title: 'Extensible platform',
                },
              ]}
              layout="fourColumn"
            />
          </Container>
        </div>
      </div>
    );
  }
}


        // <div className="productShowcaseSection paddingTop" style={{backgroundColor: '#fff'}}>
        //   <h2>{"Who's Using This?"}</h2>
        //   <p>This project is used by all these people</p>
        //   <div className="logos">{showcase}</div>
        //   {/* <div className="more-users">
        //     <a
        //       className="button"
        //       href={
        //         siteConfig.baseUrl + this.props.language + '/' + 'users.html'
        //       }>
        //       More {siteConfig.title} Users
        //     </a>
        //   </div> */}
        // </div>

class ExtraInfo extends React.Component {
  render() {
    return (
      <div>
        <Container padding={['bottom', 'top']}>
          <GridBlock
            align="center"
            contents={[
              {
                content:
                  'Start quickly with built-in navigators that deliver a seamless out-of-the-box experience',
                image: siteConfig.baseUrl + 'img/docusaurus.svg',
                imageAlign: 'top',
                title: 'Easy-to-use',
              },
              {
                content:
                  'Platform-specific look-and-feel with smooth animations',
                image: siteConfig.baseUrl + 'img/docusaurus.svg',
                imageAlign: 'top',
                title: 'Components built for iOS and Android',
              },
            ]}
            layout="fourColumn"
          />
        </Container>

        <div
          className="productShowcaseSection paddingBottom"
          style={{ textAlign: 'center' }}>
          <h2>Feature Callout</h2>
          <MarkdownBlock>These are features of this project</MarkdownBlock>
        </div>

        <Container padding={['bottom', 'top']} background="light">
          <GridBlock
            contents={[
              {
                content: 'Talk about learning how to use this',
                image: siteConfig.baseUrl + 'img/docusaurus.svg',
                imageAlign: 'right',
                title: 'Learn How',
              },
            ]}
          />
        </Container>

        <Container padding={['bottom', 'top']} id="try">
          <GridBlock
            contents={[
              {
                content: 'Talk about trying this out',
                image: siteConfig.baseUrl + 'img/docusaurus.svg',
                imageAlign: 'left',
                title: 'Try it Out',
              },
            ]}
          />
        </Container>

        <Container padding={['bottom', 'top']} background="dark">
          <GridBlock
            contents={[
              {
                content:
                  'This is another description of how this project is useful',
                image: siteConfig.baseUrl + 'img/docusaurus.svg',
                imageAlign: 'right',
                title: 'Description',
              },
            ]}
          />
        </Container>
      </div>
    );
  }
}

module.exports = Index;
