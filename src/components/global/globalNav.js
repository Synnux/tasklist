import React from 'react';
import { Link } from 'react-router-dom';

// Styled Component
import GlobalNavStyled from 'styled/global/globalNavStyled';

// Component
const GlobalNav = () => (
	<GlobalNavStyled>
		<section>
			<Link to="/home">Dashboard</Link>
		</section>
		<aside>
			<Link to="/settings">Settings</Link>
		</aside>
	</GlobalNavStyled>
);

export default GlobalNav;
