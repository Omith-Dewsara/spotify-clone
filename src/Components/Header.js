import React from "react";
import "../styles/Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

function Header() {
	const [{ user }, dispatch] = useDataLayerValue();
	console.log(user)

	return (
		<div className="header">
			<div className="header__left">
				<AiOutlineSearch style={{fontWeight: "600"}}/>
				<input 
					placeholder="Search for Artists, or podcasts"
					type="text"
				/>
			</div>
			<div className="header__right">
				<Avatar 
					src={user?.images[0]?.url}
					alt={user?.display_name}
				/>
				<h4> { user?.display_name } </h4>
			</div>
		</div>
	)
}

export default Header;