import React from 'react';

// Styled Component
import GlobalNavStyled from 'styled/global/globalNavStyled';

// Component
const GlobalNav = () => (
	<GlobalNavStyled>
		<a href="/home">Dashboard</a>
		<a href="/settings">Settings</a>
	</GlobalNavStyled>
);

export default GlobalNav;
