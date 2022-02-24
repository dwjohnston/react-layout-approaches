
import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../routes/routes';

export type HeaderContentProps = {

}


const StyledRoot = styled.div` 
display: flex; 

   a {
    display: block; 
    margin: 1em; 
    padding: 1em; 
    color: white; 
    text-decoration: none; 
    border: solid 1px white; 
    border-radius: 0.5em;

    &.active {
        background-color: rgba(200, 200, 255, 0.3);
    }
   } 
`;

export const HeaderContent = (props: HeaderContentProps) => {
    const { } = props;



    const location = useLocation();

    return <StyledRoot>

        {routes.map((v) => <NavLink to={v.path} key={v.path} className={location.pathname === v.path ? "active" : ""}>{v.name}</NavLink>)}

    </StyledRoot>;
};
