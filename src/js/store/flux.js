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
			contactList: [
				{
					name: "João Henrique",
					email: "jhcxavier@gmail.com",
					phone: "510 557 2406",
					address: "Miami FL"
				},
				{
					name: "John Smith",
					email: "johnsmith@gmail.com",
					phone: "555-555-5555",
					address: "Miami FL"
				}
			]
		},
		actions: {
			addContact: (name, phone, email, address) => {
				const store = getStore();
				fetch("https://3000-b22aef74-c7e2-4c91-a393-81c3c5558343.ws-us0.gitpod.io/contact", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						name: name,
						phone: phone,
						address: address,
						email: email
					})
				}).then(getRefresh => {
					fetch("https://3000-b22aef74-c7e2-4c91-a393-81c3c5558343.ws-us0.gitpod.io/contact")
						.then(response => response.json())
						.then(data => {
							store.contactList = data;
							setStore({ store });
						});
				});
			},
			deleteContact: id => {
				const store = getStore();
				fetch("https://3000-b22aef74-c7e2-4c91-a393-81c3c5558343.ws-us0.gitpod.io/contact/" + id, {
					method: "delete"
				}).then(getRefresh => {
					fetch("https://3000-b22aef74-c7e2-4c91-a393-81c3c5558343.ws-us0.gitpod.io/contact")
						.then(response => response.json())
						.then(data => {
							store.contactList = data;
							setStore({ store });
						});
				});
			},
			editContact: (name, phone, email, address, id) => {
				const store = getStore();
				fetch("https://3000-b22aef74-c7e2-4c91-a393-81c3c5558343.ws-us0.gitpod.io/contact/" + id, {
					method: "put",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						name: name,
						phone: phone,
						address: address,
						email: email
					})
				}).then(getRefresh => {
					fetch("https://3000-b22aef74-c7e2-4c91-a393-81c3c5558343.ws-us0.gitpod.io/contact")
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
