
import React, { Children } from 'react';
import styled from "styled-components";
import { HeaderContent } from './HeaderContent';
export type StandardLayoutProps = {

}


const StyledRoot = styled.div`


    position: fixed; 
    top: 0; 
    bottom: 0; 
    right: 0; 
    left: 0; 

    display: grid; 
    grid-template-rows: [header] auto [subnav] auto [main] auto [footer] auto;
    grid-template-columns: [left] auto [center] 1fr [right] auto; 
    overflow: auto; 

    


    background-color: #aaa; 

    #sub-nav {

        &:empty{
            display: none;
        }
        position: sticky; 

        background-color: #888; 
        padding: 0.5em; 
        top:0; 

        grid-column: span 3;
    }



    #side-nav {

        &:empty {
            display: none; 
        }
        
        position: sticky;
        top: 0; 
        background-color: #fad;
        width: 300px; 

        grid-column: left / span 1;
        min-height: 0; 
        overflow:auto; 

    }



    &>.scroll-container {
        min-height: 0; //https://stackoverflow.com/questions/36230944/prevent-flex-items-from-overflowing-a-container
        overflow: auto; 

        grid-column: center / span 2;
        border: 3px solid blue; 



        &>main {
        }


        &>footer {

          // We don't really need to do anything with the footer 
          // It'll naturally sit at the bottom. 
          background-color: #444;         
          padding: 1em; 

        }
    }

    &>header {
        position: sticky; 
        top:0;
        padding: 1em; 


        grid-column: span 3;

        background-color: #44d;
        color: white; 
    }


`

export const StandardLayout = (props: React.PropsWithChildren<StandardLayoutProps>) => {
    const { children, } = props;
    return <StyledRoot>
        <header><p>I am the header</p>
            <HeaderContent />
        </header>

        <div id="sub-nav"></div>

        <div id="side-nav"></div>


        <div className="scroll-container">
            <main>
                {children}
            </main>

            <footer>I am the footer</footer>
        </div >
    </StyledRoot>;


};
