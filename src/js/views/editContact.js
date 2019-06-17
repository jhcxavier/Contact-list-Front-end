import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Edit extends React.Component {
	render() {
		return (
			<div className="container">
				<div>
					<h2>Contact List</h2>
				</div>
				<div>
					<h5>Edit Contact</h5>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<form>
								<div className="form-row">
									<div className="col-md-6">
										<input name="name" type="text" className="form-control" placeholder="Name" />
									</div>
									<div className="col-md-6">
										<input
											name="phone"
											type="text"
											className="form-control"
											placeholder="Phone Number"
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail4" />
										<input
											name="email"
											type="email"
											className="form-control"
											id="inputEmail4"
											placeholder="Email"
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputAddress" />
										<input
											name="address"
											type="text"
											className="form-control"
											id="inputAddress"
											placeholder="Address"
										/>
									</div>
								</div>
								<Link to="/contact/">
									<button
										className="btn btn-primary mb-3"
										type="button"
										onClick={() => {
											actions.addContact(
												document.querySelector("[name=name]").value,
												document.querySelector("[name=email]").value,
												document.querySelector("[name=phone]").value,
												document.querySelector("[name=address]").value
											);
										}}>
										Add Contact
									</button>
									<button className="btn btn-primary mb-3 float-right" type="button">
										Go Back
									</button>
								</Link>
							</form>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
