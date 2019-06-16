const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				}
			],
			contactList: []
		},
		actions: {
			addContact: (name, phone, email, address) => {
				const store = getStore();
				fetch("https://3000-d6565c2a-79cb-427b-9e32-c64064c66b52.ws-us0.gitpod.io/contact", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						name: name,
						phone: phone,
						address: address,
						email: email
					})
				}).then(getRefresh => {
					fetch("https://3000-d6565c2a-79cb-427b-9e32-c64064c66b52.ws-us0.gitpod.io/contact")
						.then(response => response.json())
						.then(data => {
							store.todos = data;
							setStore({ store });
						});
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
