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
			deleteContact: id => {
				const store = getStore();
				fetch("https://3000-d246e08a-71ed-4ca8-bf76-1770ce368d3d.ws-us0.gitpod.io/contact/" + id, {
					method: "delete"
				}).then(getRefresh => {
					fetch("https://3000-d246e08a-71ed-4ca8-bf76-1770ce368d3d.ws-us0.gitpod.io/contact")
						.then(response => response.json())
						.then(data => {
							store.contactList = data;
							setStore({ store });
						});
				});
			},
			editContact: (name, phone, email, address) => {
				const store = getStore();
				fetch("https://3000-d246e08a-71ed-4ca8-bf76-1770ce368d3d.ws-us0.gitpod.io/contact/" + id, {
					method: "put",
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
			}
		}
	};
};

export default getState;
