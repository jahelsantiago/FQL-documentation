import React from 'react';
import Image from "next/image";
import logo from "../public/images/FQL.png"
import {Data} from "../data/Data";

const SideBar = ({className}) => {
	return (
		<div className={"h-screen min-w-[300px] max-w-[300px] bg-backgroundSec sticky top-0 left-0" + " " + className}>
			<Image src={logo} width={"200px"} height={"100px"}/>
			<div className={" divide-y divide-green-900"}>
				<IndexLink text={"Introduction"}/>
				<IndexLink text={"Get Started"}/>
				{Data.map(item => (
					<IndexLink text={item.title} link={item.id}/>
				))}
			</div>
		</div>
	);
};

const IndexLink = ({text, link}) => {
	return (
		<a href={"#" + link}>
			<div className={"bg-transparent hover:bg-green-50 h-10 text-center cursor-pointer text-white hover:text-backgroundSec font-medium"}>
				{text}
			</div>
		</a>
	)
}

export default SideBar;
