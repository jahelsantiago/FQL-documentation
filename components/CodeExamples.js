import React from 'react';
import {Data} from  "../data/Data"
import CodeHighlight from "./CodeHighlight";
import {H3, H4} from "./Utils"

const CodeExamples = () => {
	return (
		<div className={"flex flex-col w-full"}>
			{Data.map(item => <SectionCode props={item}/> )}
		</div>
	);
};

const SectionCode = ({props}) => {
	const {title,description, argumentsAttributes, responseAttributes, query, variables, response, id} = {...props}
	return (
		<div id={id}>
			<H3>
				{title}
			</H3>
			<p className={"text-center mb-4"}>
				{description}
			</p>
			<hr/>
			<div className={"flex md:justify-around mb-16 flex-col md:flex-row"}>
				<div>
					{/*Attributes*/}
					<Attributes title={"Arguments"} parameters={argumentsAttributes}/>
					{/*Response Attributes*/}
					<Attributes title={"Response Attributes"} parameters={responseAttributes}/>
				</div>
				<div className={"max-w-6/12"}>
					{/*Query Example*/}
					<H4>Query Example</H4>
					<CodeHighlight codeString={query}/>
					{/*Variables*/}
					<H4>Variables for the query</H4>
					<CodeHighlight codeString={variables}/>
					{/*Response*/}
					<H4>Response example</H4>
					<CodeHighlight codeString={response}/>
				</div>
			</div>
		</div>
	)
}



/**
 * Returns the list of attributes for attributes and response
 * @param title
 * @param parameters
 * @returns {JSX.Element}
 * @constructor
 */
const Attributes = ({title, parameters}) => {
	return(
		<div>
			<H4>{title}</H4>
			{parameters.map((arg => (
				<li className={"ml-4 mb-2"}>
					<span className={"font-medium text-cyan-500 capitalize"}>{arg.name}</span>
					<br/>
					<span className={"ml-6"}>
						{arg.description}
					</span>
				</li>
			)))}
		</div>

	)
}

export default CodeExamples;
