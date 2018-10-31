import React from 'react';
import PageWrapper from 'styled/layout';

// Routing Config
export const path = '/(home)?';
export const exact = true;

// Component
const HomePage = () => (
	<PageWrapper>
		<h1>Home Page!</h1>
	</PageWrapper>
);

export default HomePage;
