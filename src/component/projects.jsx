import React from "react";
import OnStage from "../img/project1.PNG";
import burgersite from "../img/burgersite.PNG";
import quiznode from "../img/quiznode.PNG";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid mt-5">
					<div className=" project-container mytext container pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"onstagebg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>OnStage</h2>
									</div>
									<div>
										<button
											id="OnStage-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"OnStage"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"burgerbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Eat da Burger!</h2>
									</div>
									<div>
										<button
											id="burgersite-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"burgersite"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"quiznodebg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Quiznode</h2>
									</div>
									<div>
										<button
											id="quiznode-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var quiznodeModal = document.getElementById(
													"quiznode"
												);
												modalBG.style.display = "block";
												quiznodeModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="OnStage" className="modal-card">
						<div className="visual">
							<img src={OnStage} alt=""/>
						</div>
						<div className="modal-info">
							<h2>OnStage</h2>
							<div className="modal-description">
								<ul>
									<li>
									OnStage was created for the given user to easily find any artist and easily preview their current schedule, as well as location. OnStage features an in search text, where the user inputs the name of an artist, which then populates an itemized list and map of current venues booked. OnStage, also features local storage so that the users events are saved to be referenced in the future.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
							<a href="https://github.com/Joey-Sisk/OnStage">OnStage Repo</a>

								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"OnStage"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="burgersite" className="modal-card">
						<div className="visual">
							<img src={burgersite} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Eat da Burger!</h2>
							<div className="modal-description">
								<ul>
									<li>
									Here's a simple application that allows you to add any burger of your choice. It then adds it to the waiting list to be devoured once devoured it's move to the devoured list. If devoured list is starting to get full you have the option to delete the burgers from the list. This application utilizes mysql, express, node and handlebars.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
							<a href="https://thawing-beyond-60111.herokuapp.com/">Eat da Burger!</a>

								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"burgersite"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="quiznode" className="modal-card">
						<div className="visual">
							<img src={quiznode} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Quiznode</h2>
							<div className="modal-description">
								<ul>
									<li>
									We have decided to create an application where users can create and take quizzes online. Users will be required to create an account. This will allow users to save the quizzes that they create as well as save their scores on others quizzes. When a user wants to create a quiz they will have the option to write new questions or select from questions written by other users. When users want to take a quiz they are able to search for quizzes created by specific users or by quiz topic. When a user completes a quiz their score is saved and can be viewed by other users taking the same quiz.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
							<a href="https://calm-journey-11508.herokuapp.com/">Quiznode</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 750,
										fontSize: 1 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"quiznode"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
