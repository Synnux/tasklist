import React from 'react';

// Components
import MainStyled from './main';
import PageContent from './pageContent';
import PageLayout from './pageLayout';

const PageWrapper = ({ children }) => (
	<MainStyled>
		<PageLayout>
			{/* You can put a page header here */}

			<PageContent>
				{children}
			</PageContent>

			{/* You can put a page footer here */}
		</PageLayout>
	</MainStyled>
);

export default PageWrapper;
