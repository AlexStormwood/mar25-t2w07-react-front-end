import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import { BaseLayout } from './pages/templates/BaseLayout.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>

		<BrowserRouter>

			<Routes>

				<Route element={<BaseLayout />}>
					<Route index element={<div>TODO! Homepage</div>} />
					<Route path='about' element={<div>TODO! About page </div>} />
					<Route path='contact' element={<div>TODO! Contact page</div>} />

					<Route path='articles'>
						<Route index element={<div>TODO! Articles index/latest page</div>} />
						<Route path='new' element={<div>TODO! Articles new page </div>} />
						<Route path='view/:articleId' element={<div>TODO! Article by ID</div>} />
						<Route path='edit/:articleId' element={<div>TODO! Article edit page </div>} />
						<Route path='search/category/:categoryName' element={<div>TODO! Articles list filtered by categoryName</div>} />
					</Route>

					<Route path='users'>
						<Route index element={<div>TODO! Redirect to profile page</div>} />
						<Route path='register' element={<div>TODO! User registration page</div>} />
						<Route path='login' element={<div>TODO! User login page</div>} />
						<Route path='profile' element={<div>TODO! Redirect to view/:userId with id from JWT or login page</div>} />
						<Route path='view/:userId' element={<div>TODO! User profile page</div>} />
						<Route path='edit/:userId' element={<div>TODO! User profile editing page</div>} />
					</Route>

					<Route path='admin'>
						<Route index element={<div>TODO! Admin master page</div>} />
						<Route path='users' element={<div>TODO! Admin users dashboard</div>} />
						<Route path='articles' element={<div>TODO! Admin articles dashboard</div>} />
					</Route>

				</Route>

			</Routes>

		</BrowserRouter>

	</StrictMode>,
)
