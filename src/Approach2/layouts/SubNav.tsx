import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export type SubNavProps = {

}



export const SubNav = (props: React.PropsWithChildren<SubNavProps>) => {
    const { children } = props;



    const [ready, setIsReady] = useState(false);
    const portalRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const subNavDiv = document.getElementById("sub-nav") as HTMLDivElement;
        portalRef.current = subNavDiv;
        setIsReady(true);
    }, []);


    if (!ready) {
        return null;
    }

    else {
        if (!portalRef.current) {
            throw new Error("Can not create a sub nav, not container found for it")
        };

        return ReactDOM.createPortal(children, portalRef.current);
    }
};
