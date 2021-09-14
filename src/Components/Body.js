import React from "react";
import "../styles/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import { AiFillPlayCircle, AiFillHeart } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import SongRow from "./SongRow";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();

	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img 
					src={discover_weekly?.images[0].url}
					alt=""
				/>
				<div className="body__infoText">
					<strong> PLAYLIST </strong>
					<h2> Discover Weekly </h2>
					<p> { discover_weekly?.discription } </p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<AiFillPlayCircle className="body__shuffle" />
					<AiFillHeart style={{fontSize: "40px"}}/>
					<MdMoreHoriz />
				</div>
				{
					discover_weekly?.tracks.items.map(item => (
						<SongRow track={item.track} />
					))
				}
			</div>
		</div>
	)
}

export default Body;