import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Edit extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="mb-4">
					<h5>Edit Contact</h5>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<form>
								<div className="form-row">
									<div className="col-md-6">
										<input
											name="name"
											type="text"
											className="form-control"
											placeholder="Name"
											defaultValue={store.contactList[this.props.match.params.theid].name}
										/>
									</div>
									<div className="col-md-6">
										<input
											name="phone"
											type="text"
											className="form-control"
											placeholder="Phone Number"
											defaultValue={store.contactList[this.props.match.params.theid].phone}
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
											defaultValue={store.contactList[this.props.match.params.theid].email}
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
											defaultValue={store.contactList[this.props.match.params.theid].address}
										/>
									</div>
								</div>

								<Link to="/contact/">
									<button
										className="btn btn-secondary mb-3"
										type="button"
										onClick={() => {
											actions.editContact(
												document.querySelector("[name=name]").value,
												document.querySelector("[name=email]").value,
												document.querySelector("[name=phone]").value,
												document.querySelector("[name=address]").value,

												store.contactList[this.props.match.params.theid].id
											);
										}}>
										Update
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

Edit.propTypes = {
	match: PropTypes.object
};
