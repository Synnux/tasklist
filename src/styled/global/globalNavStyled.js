import styled from 'styled-components';

// Styled Component
const GlobalNavStyled = styled.nav`
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: space-between;

  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;

    a {
      text-decoration: none;
      color: #FAFAFA;
    }

    section {
      padding: 40px 0px 0px 0px;
    }
`;

export default GlobalNavStyled;
