import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<div>
					<h2>Contact List</h2>
				</div>
				<div>
					<h5>Add Contact</h5>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<form>
								<div className="form-row">
									<div className="col-md-6">
										<input type="text" className="form-control" placeholder="Name" />
									</div>
									<div className="col-md-6">
										<input type="text" className="form-control" placeholder="Phone Number" />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail4" />
										<input
											type="email"
											className="form-control"
											id="inputEmail4"
											placeholder="Email"
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputAddress" />
										<input
											type="text"
											className="form-control"
											id="inputAddress"
											placeholder="Address"
										/>
									</div>
								</div>

								<button
									className="btn btn-primary mb-3"
									type="button"
									onClick={() => {
										let name = document.querySelector("[name=name]").value;
										let email = document.querySelector("[name=email]").value.trim();
										let phone = document.querySelector("[name=phone]").value.trim();
										let address = document.querySelector("[name=address]").value.trim();
										if (phone === "") phone = null;
										if (address === "") address = null;
										if (name === "") name = null;
										if (email === "") email = null;
										actions.addContact(name, email, phone, address);
									}}>
									Add Contact
								</button>
							</form>
						);
					}}
				</Context.Consumer>

				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.contactList.map((item, index) => {
								return (
									<li key={index} className="list-group-item">
										<div className="row w-100">
											<div className="col-12 col-sm-6 col-md-3 px-0">
												<img
													src="http://demos.themes.guide/bodeo/assets/images/users/m100.jpg"
													alt=""
													className="rounded-circle mx-auto d-block img-fluid"
												/>
											</div>
											<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
												<div className=" float-right">
													{/*<Link to={"/edit/" + item.email}>
														<button className="btn">
															<i className="fas fa-pencil-alt mr-3" />
														</button>
													</Link>*/}
													{/*<Link to="/">
														<button className="btn" onClick={() => this.props.onDelete()}>
															<i className="fas fa-trash-alt" />
														</button>
													</Link>*/}
												</div>
												<p>{item.name}</p>
												<br />
												<i className="fas fa-map-marker-alt text-muted mr-3" />
												<span className="text-muted">{item.address}</span>
												<br />
												<span
													className="fa fa-phone fa-fw text-muted mr-3"
													data-toggle="tooltip"
													title=""
													data-original-title="(870) 288-4149"
												/>
												<span className="text-muted small">{item.phone}</span>
												<br />
												<span
													className="fa fa-envelope fa-fw text-muted mr-3"
													data-toggle="tooltip"
													data-original-title=""
													title=""
												/>
												<span className="text-muted small text-truncate">{item.email}</span>
											</div>
										</div>
									</li>
								);
							});
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
