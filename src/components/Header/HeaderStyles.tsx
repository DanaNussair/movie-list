import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 14px 70px;
  margin: 40px 100px;
  border: 1px solid #002ed1;
  color: #002ed1;
  border-radius: 50px;
  justify-content: space-between;
  gap: 30px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  font-size: 20pt;
  gap: 72px;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 800px) {
    gap: 10px;
  }
`;

export const NavigationItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  :visited {
    color: #002ed1;
  }
  :hover {
    color: #001a76;
  }
`;
