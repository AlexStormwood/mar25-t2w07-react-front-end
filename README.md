# React + Vite

## Live Demo

https://glittery-cascaron-bed5a7.netlify.app/




## Plan

- React project plan and architecture 
	- For basic blog/articles API with user auth 
		- backend won't be real just yet, so we need to fake the API interactions
	- Layouts with React Router 
		- need to figure out the routes that we want 
	- Deployed to Netlify 
		- Remember to do the redirects file for Netlify to make routing work! 


## Routes 


- somewebsite.com/
	- Homepage 
		- Navbar
		- Main homepage content component
		- Footer 
- somewebsite.com/about
	- About page 
		- Navbar
		- Main "about the website & author & contact details" content component
		- Footer 
- somewebsite.com/contact
	- Contact page 
		- Navbar
		- Main "about the website & author & contact details" content component
		- Footer 
- somewebsite.com/articles
	- Latest Articles page 
		- Navbar
		- Main list of articles ordered by date
		- Logged-in user's recently viewed articles list 
		- Footer 
- somewebsite.com/articles/new
	- New Article Form page 
		- Navbar
		- Form to make a new article
			- WYSIWYG editor, search NPM! 
				- https://lexical.dev/ 
		- Redirect if the user ID in the JWT is not the admin/author user 
		- Footer 
- somewebsite.com/articles/:articleId/edit
	- Edit Article Form page 
		- Navbar
		- Form to edit an existing article
			- WYSIWYG editor, search NPM! 
				- https://lexical.dev/ 
		- Redirect if the user ID in the JWT is not the admin/author user 
		- Footer 
- somewebsite.com/articles/category/:categoryName
	- Latest Articles in the Travel category page 
		- Navbar
		- Main list of articles ordered by date grouped by category
		- Footer 
- somewebsite.com/articles/article/:articleId
	- Singular Article page 
		- Navbar
		- View of single article based on :articleId 
		- Share button on this page
		- Related Articles widget (requires tags on articles)
		- Footer 
- somewebsite.com/admin/users
	- List of Users page 
		- Navbar
		- Main list of users if JWT is for admin user
			- admin dashboard view of articles
		- Redirect to homepage if JWT is not for admin user
		- Footer 
- somewebsite.com/users/register
	- User sign-up page
		- Navbar
		- Form for signing up as a new user
		- Redirect to homepage if JWT is present
		- Footer 	
- somewebsite.com/users/login
	- User login page
		- Navbar
		- Form for logging in as an existing user
		- Redirect to homepage if JWT is present
		- Footer 
- somewebsite.com/users/:userId
	- User profile page
		- Navbar
		- Read-only user data
		- Logged-in user's recently viewed articles list 
		- Link to :user/edit page 
		- Form for deleting the user's account 
		- Redirect to homepage if JWT does not contain a user ID matching the :userId
		- Footer 
- somewebsite.com/users/:userId/edit
	- User edit page 
		- Navbar
		- Component for editing user data 
		- Redirect to homepage if JWT does not contain a user ID matching the :userId
		- Footer 




## Global State

- user 
	- username
	- user id 
	- user profile photo 
	- recently viewed articles 
	- refetch if jwt changes 

- user jwt 
	- jwt string 
	- syncing with browser localstorage 

<UserJwtContextProvider>
	<UserObjContextProvider>
		<BrowserRouter>

		</BrowserRouter>
	</UserObjContextProvider>
</UserJwtContextProvider>