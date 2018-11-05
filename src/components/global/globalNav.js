import React from 'react';

// Styled Component
import GlobalNavStyled from 'styled/global/globalNavStyled';

// Component
const GlobalNav = () => (
	<GlobalNavStyled>
		<section>
			<a href="/home">Dashboard</a>
		</section>
		<aside>
			<a href="/settings">Settings</a>
		</aside>
	</GlobalNavStyled>
);

export default GlobalNav;
