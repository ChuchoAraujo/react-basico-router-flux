import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState([])

	useEffect(() => {
	fetch('https://pokeapi.co/api/v2/pokemon/')
		.then(response => response.json())
		.then(result => {
			console.log(result.results)
			setCharacter(result.results)
		})
		.catch(error => console.log(error));
	}, [])


	return (
		<>
			<div className="text-center mt-5">
				<div className="card p-4">
					<p>Ejemplo1</p>
					<h1>--- HOME ---</h1>
					<div className="mt-5">
						<div>
							<Link to="/paginaUno">
								<button className="btn btn-success ms-3">Pagina 1</button>
							</Link>
							<Link to="/paginaDos">
								<button className="btn btn-warning ms-3">Pagina 2</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="card p-4 mt-5">
					<p>Ejemplo 2</p>
					<div>
						<p>Nombre: {store.nombre}</p>
						<p>Apellido: {store.apellido}</p>
					</div>
					<div>
						<button onClick={() => actions.juntarNombre()}>Nombre completo</button>
						<p className="bg-warning mt-4">{store.juntar}</p>
					</div>
				</div>


			</div>
		</>
	);
};
