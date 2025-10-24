import { Outlet } from "react-router";


export function BaseLayout(){
	return<>
		<nav>
			
		</nav>

		<main>

			<Outlet />

		</main>

		<footer>

		</footer>
	</>
}