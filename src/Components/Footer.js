import React from "react";
import "../styles/Footer.css";
import { BsShuffle, BsFillVolumeDownFill } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext, BiPlayCircle } from "react-icons/bi";
import { MdRepeat, MdPlaylistPlay } from "react-icons/md";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<img 
					src="https://pbs.twimg.com/profile_images/1874356306/usher-600x362_400x400.jpg"
					alt=""
					className="footer__albumLogo"
				/>
				<div className="footer__songInfo">
					<h4> Yeah! </h4>
					<p> Usher </p>
				</div>
			</div>
			<div className="footer__center">
				<BsShuffle className="footer__green" />
				<BiSkipPrevious className="footer__icon" />
				<BiPlayCircle style={{fontSize: "40px"}} className="footer__icon" />
				<BiSkipNext className="footer__icon" />
				<MdRepeat className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2} className="footer__rightOptions">
					<div>
						<Grid item>
							<MdPlaylistPlay />
						</Grid>
						<Grid item>
							<BsFillVolumeDownFill />
						</Grid>
					</div>
					<Grid item xs>
						<Slider className="footer__slider"/>
					</Grid>
				</Grid>
			</div>	
		</div>	
	)
}

export default Footer;