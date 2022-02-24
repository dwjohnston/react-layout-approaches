import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export type SideNavProps = {

}





export const SideNav = (props: React.PropsWithChildren<SideNavProps>) => {
    const { children } = props;



    const [ready, setIsReady] = useState(false);
    const portalRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const sideNavDiv = document.getElementById("side-nav") as HTMLDivElement;


        console.log(sideNavDiv);

        portalRef.current = sideNavDiv;
        setIsReady(true);
    }, []);


    if (!ready) {
        return null;
    }

    else {
        if (!portalRef.current) {
            throw new Error("Can not create a side nav, not container found for it")
        };

        return ReactDOM.createPortal(children, portalRef.current);
    }
};
