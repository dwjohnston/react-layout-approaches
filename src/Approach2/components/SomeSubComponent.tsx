import React, { useState } from 'react';
import styled from 'styled-components';
import { SizedContent } from '../../Approach1/components/SizedContent';
import { SubNav } from '../layouts/SubNav';

export type SomeSubComponentProps = {

}


const StyledRoot = styled.div`
    border: solid 1px black; 
    width: 500px; 
    height: 500px; 
`

export const SomeSubComponent = (props: SomeSubComponentProps) => {
    const { } = props;


    const [value, setValue] = useState(42);
    return <StyledRoot>
        <p>
            I am some sub component.
        </p>
        <p>
            I also want to put something in the sub nav!
        </p>

        <p>Random Value: {value}</p>


        <SubNav>

            <SizedContent width = {300} height = {100} color ="#afa">

                SomeSubComponent put me here!
            <button onClick = {() => setValue(Math.floor(Math.random() * 100))}>Create new random value</button>

            </SizedContent>
        </SubNav>
    </StyledRoot>;
};
