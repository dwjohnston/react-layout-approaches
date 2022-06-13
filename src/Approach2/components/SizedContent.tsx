import React from 'react';
import styled from 'styled-components';

export type SizedContentProps = {
    height?: number;
    width?: number;
    color?: string;
}


const StyledDiv = styled.div` 
    border: solid 3px #f55; 
    margin: 1em; 
`

export const SizedContent = (props: React.PropsWithChildren<SizedContentProps>) => {
    const { height = 3000, width = 300, color = "#f88",  children } = props;
    return <StyledDiv style={{ height, width, backgroundColor: color }}>
        {children}
    </StyledDiv>;
};
