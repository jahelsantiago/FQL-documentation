import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CodeExamples from "./CodeExamples";
import Image from "next/image";
import background from "../public/images/background.jpg"
import {H2, H3} from "./Utils";


const CodeBlock = ({ language, value }) => {
	return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};


const Body = () => {
	return (
		<div className={"w-full h-full"}>

			{/*introduction*/}
			<Section>
				<H2>Introduction</H2>
				<p>
					FQL is a Backend GraphQL application to get financial data including companies information, stock estimates, stock prices, candles, forex and crypto data.				</p>
			</Section>

			{/*Get Started*/}
			<Section>
				<H2>Get started</H2>
				<p>First you need to install the package via NPM or yarn</p>

				<p>Now, add </p>
			</Section>

			{/*Code shows*/}
			<CodeExamples/>
		</div>
	);
};


const Section = ({children}) => {
	return(
		<section className={"my-8 px-4 text-justify"}>
			{children}
		</section>
	)
}



export default Body;
