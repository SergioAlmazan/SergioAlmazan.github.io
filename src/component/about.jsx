import React from "react";
import proPic from "../img/sergio_almazan1.png";
import PropTypes from "prop-types";
import '../styles/index.scss';

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers mytext text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>
				<div className="row d-flex justify-content-center container" style={{ marginTop: 7 + "rem" }}>
					<div className="hidden">
						<img
							className={"img-fluid float-left " + this.props.fadeIn}
							src={proPic}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 350 + "px",
								width: 320 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
						Sergio Almazan is an information Technology specialist, with experience in administration, customer service, computer installation and technical support. Sergio is currently on his way to be a full stack web developer. He likes to challenge himself and learn new things to better himself.

						</p>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
