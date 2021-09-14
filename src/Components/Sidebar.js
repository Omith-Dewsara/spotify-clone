import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
	const [{ playlists }, dispatch] = useDataLayerValue();

	console.log(playlists);

	return (
		<div className="sidebar">
			<img 
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
				className="sidebar__logo"
			/>
			<SidebarOption title="Home" Icon={AiFillHome} />
			<SidebarOption title="Search" Icon={AiOutlineSearch} />
			<SidebarOption title="Your Library" Icon={VscLibrary} />

			<br />
			<strong className="sidebar__title"> PLAYLISTS </strong>
			<hr />
			{
				playlists?.items?.map(playlist => (
					<SidebarOption title={playlist.name} />
				))
			}
			<SidebarOption title="Hip Hop" />
			<SidebarOption title="Rock" />
		</div>
	)
}

export default Sidebar;