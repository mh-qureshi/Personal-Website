import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/services' activeStyle>
			Services 
		</NavLink>
		<NavLink to='/projects' activeStyle>
			Projects 
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
