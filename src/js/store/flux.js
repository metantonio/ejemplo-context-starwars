const BASE_URL = "https://swapi.dev/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []			
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				//let store = getStore();
				let url = `${BASE_URL}people/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json(); //parchear la respuesta json
					setStore({
						characters: responseObject.results
					});
					//console.log(store.characters)
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
