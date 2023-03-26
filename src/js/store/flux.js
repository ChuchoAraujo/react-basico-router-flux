const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nombre: 'Jesus',
			apellido: 'Araujo',
			juntar: '',
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			juntarNombre: () => {
				const store = getStore() // Llamando a una función getStore() que devuelve un objeto con información del estado de la aplicación. (useStateGlobal)
				const juntar = store.nombre + " " + store.apellido; // codigo de accion o cambios
				setStore({ juntar: juntar }) // Llamando a una función setStore() pasandole un objeto con una propiedad juntar que tiene como valor la variable creada anteriormente
				// Lo que hace setStore es actualizar el estado de la aplicación con el nuevo valor de juntar. previamente creada arriba en el store
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
