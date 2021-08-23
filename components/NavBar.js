import React, {useState} from 'react';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon"


const NavBar = ({className, setOpenMenu}) => {
	const [searchInput, setSearchInput] = useState("");

	const handleSearch = () => {
		if(searchInput.length != 0){
			alert("s")
		}
	}

	return (
		<div className={"w-full h-[60px] bg-background flex items-center gap-2 px-1" + " " + className}>
			<IconButton className={"md:hidden"} onClick={()=>{setOpenMenu(prev => !prev)}}>
				<Icon name={"menu"} size={"4xl"} color={"green"}/>
			</IconButton>
			<input
				placeholder={"Search in documentation"}
				className={"flex-grow h-10 pl-2"}
				value={searchInput}
				onChange={(e)=>{setSearchInput(e.target.value)}}
			/>
			<Button
				color="green"
				buttonType="filled"
				size="regular"
				rounded={false}
				block={false}
				iconOnly={true}
				ripple="light"
				onClick={handleSearch}
			>
				<Icon name={"search"} size={"lg"}/>
			</Button>

		</div>
	);
};

const IconButton = ({children, onClick, className}) => {
	return (
		<Button
			color="blueGray"
			buttonType="link"
			size="regular"
			rounded={true}
			block={false}
			iconOnly={true}
			ripple="dark"
			onClick = {onClick}
			className = {className}
		>
			{children}
		</Button>
	);
};

export default NavBar;
