import React from "react"

const Header = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
			<div className='container'>
				<h1>Redux CRUD</h1>
			</div>
			<a href='/produtcs/new' className='btn btn-danger nuevo-post d-block d-md-inline-block'>
				Add Product &#43;
			</a>
		</nav>
	)
}

export default Header
