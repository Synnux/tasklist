import React from 'react';

// Styled Component
import HeaderStyled from 'styled/global/headerStyled';
import Logo from 'components/global/logo';
import GlobalNav from 'components/global/globalNav';

// Component
const Header = () => (
	<HeaderStyled>
		<Logo />
		<GlobalNav />
	</HeaderStyled>
);

export default Header;
