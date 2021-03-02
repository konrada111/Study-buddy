import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  background-color: #f7f8fa;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: bold;
  text-decoration: none;
  margin: 15px 20px 15px auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.m};
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: 0.4s ease-in-out;
    content: '';
    position: absolute;
    height: 3px;
    width: 19px;
    top: 50%;
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
