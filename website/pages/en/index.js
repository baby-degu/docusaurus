/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock
const translate = require('../../server/translate.js').translate

class HomeSplash extends React.Component {
	render() {
		const { siteConfig, language = '' } = this.props
		const { baseUrl, docsUrl } = siteConfig
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
		const langPart = `${language ? `${language}/` : ''}`
		const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`

		const SplashContainer = (props) => (
			<div className="homeContainer">
				<div className="homeSplashFade">
					<div className="wrapper homeWrapper">{props.children}</div>
				</div>
			</div>
		)

		const Logo = (props) => (
			<div className="projectLogo">
				<img src={props.img_src} alt="Project Logo" />
			</div>
		)

		const ProjectTitle = (props) => (
			<h2 className="projectTitle">
				{props.title}
				<small>{props.tagline}</small>
			</h2>
		)

		const PromoSection = (props) => (
			<div className="section promoSection">
				<div className="promoRow">
					<div className="pluginRowBlock">{props.children}</div>
				</div>
			</div>
		)

		const Button = (props) => (
			<div className="pluginWrapper buttonWrapper">
				<a className="button" href={props.href} target={props.target}>
					{props.children}
				</a>
			</div>
		)

		return (
			<SplashContainer>
				<Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
				<div className="inner">
					<ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
					<PromoSection>
						<Button href="https://qiita.com/baby-degu">Qiita</Button>
						<Button href="https://www.udemy.com/user/baby-degu/">Udemy</Button>
						<Button href={docUrl('dao.html')}>DAO</Button>
					</PromoSection>
				</div>
			</SplashContainer>
		)
	}
}

class Index extends React.Component {
	render() {
		const { config: siteConfig, language = '' } = this.props
		const { baseUrl } = siteConfig

		const Block = (props) => (
			<Container padding={['bottom', 'top']} id={props.id} background={props.background}>
				<GridBlock align="center" contents={props.children} layout={props.layout} />
			</Container>
		)

		const FeatureCallout = () => (
			<div className="productShowcaseSection paddingBottom" style={{ textAlign: 'center' }}>
				<h2>Feature Callout</h2>
				<MarkdownBlock>
					<translate>These are features of this project</translate>
				</MarkdownBlock>
			</div>
		)

		const TryOut = () => (
			<Block id="try">
				{[
					{
						content:
							'To make your landing page more attractive, use illustrations! Check out ' +
							'[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
							'The illustrations you see on this page are from unDraw.',
						image: `${baseUrl}img/undraw_code_review.svg`,
						imageAlign: 'left',
						title: 'Wonderful SVG Illustrations',
					},
				]}
			</Block>
		)

		const Description = () => (
			<Block background="dark">
				{[
					{
						content: 'This is another description of how this project is useful',
						image: `${baseUrl}img/undraw_note_list.svg`,
						imageAlign: 'right',
						title: 'Description',
					},
				]}
			</Block>
		)

		const LearnHow = () => (
			<Block background="light">
				{[
					{
						content: 'Each new Docusaurus project has **randomly-generated** theme colors.',
						image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
						imageAlign: 'right',
						title: 'Randomly Generated Theme Colors',
					},
				]}
			</Block>
		)

		const Features = () => (
			<Block layout="fourColumn" background="light">
				{[
					{
						content: 'Openness mitigates the learning-curve of newcomers. Think globally. Optimize globally.',
						image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
						imageAlign: 'top',
						title: 'Make it open',
					},
					{
						content: 'Let\'s think about how we can keep the flat organization. Flat gives reliability. Flat means minimizing the information gap.',
						image: `${baseUrl}img/undraw_open_source.svg`,
						imageAlign: 'top',
						title: 'Keep flat',
					},
					{
						content: 'You don\'t trust code? Then create a trustable code. Or the system. Think about the future.',
						image: `${baseUrl}img/undraw_code_review.svg`,
						imageAlign: 'top',
						title: 'Code first',
					}
				]}
			</Block>
		)

		const Showcase = () => {
			if ((siteConfig.pioneers || []).length === 0) {
				return null
			}

			const showcase = siteConfig.pioneers
				.filter((user) => user.pinned)
				.map((user) => (
					<a href={user.infoLink} key={user.infoLink}>
						<img src={user.image} alt={user.caption} title={user.caption} />
					</a>
				))

			const pageUrl = (page) => baseUrl + (language ? `${language}/` : '') + page

			return (
				<div className="productShowcaseSection paddingTop">
					<h2>
						Who inspires us?
					</h2>
					<p>
						Thank you for leading!
					</p>
					<div className="logos">{showcase}</div>
					<div className="more-users">
						<a className="button" href={pageUrl('pioneers.html')}>
							More About Pioneers
						</a>
					</div>
				</div>
			)
		}

		return (
			<div>
				<HomeSplash siteConfig={siteConfig} language={language} />
				<div className="mainContainer">
					{/* <Features /> */}
					{/* <FeatureCallout /> */}
					{/* <LearnHow /> */}
					{/* <TryOut /> */}
					{/* <Description /> */}
					{/* <Showcase /> */}
				</div>
			</div>
		)
	}
}

module.exports = Index