import React from 'react';

// Components
import Header from 'components/global/header';
import MainStyled from './main';
import PageContent from './pageContent';

const PageWrapper = ({ children }) => (
	<MainStyled>
		<Header />
		<PageContent>
			{children}
		</PageContent>
	</MainStyled>
);

export default PageWrapper;
