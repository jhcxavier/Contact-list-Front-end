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
				fetch("https://3000-d246e08a-71ed-4ca8-bf76-1770ce368d3d.ws-us0.gitpod.io/contact", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						name: name,
						phone: phone,
						address: address,
						email: email
					})
				}).then(getRefresh => {
					fetch("https://3000-d246e08a-71ed-4ca8-bf76-1770ce368d3d.ws-us0.gitpod.io/contact")
						.then(response => response.json())
						.then(data => {
							store.contactList = data;
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
