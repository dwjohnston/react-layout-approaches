import React from 'react';
import { SizedContent } from '../components/SizedContent';
import { SomeSubComponent } from '../components/SomeSubComponent';
import { SideNav } from '../layouts/SideNav';
import { SubNav } from '../layouts/SubNav';

export type BarPageProps = {

}

export const BarPage = (props: BarPageProps) => {
  const { } = props;
  return <div
  >

    <SubNav>
      <SizedContent width={800} height={100} color="#6af"> I am some sub nav content. Note that I am sticky!</SizedContent>


      <p>hello</p>
    </SubNav>


    <SideNav>
      <SizedContent width={100} height={3000} color="#7f8">I am the side nav. Note that I scroll independently!</SizedContent>
    </SideNav>

    <div style={{
      display: "flex",
      flexFlow: "row nowrap"
    }}>
      <SomeSubComponent />




      <SizedContent />

      <div style={{
        width: 100,
        height: 100,
        border: "solid 1px white",
        position: "sticky",
        top: 50,
      }}>

      </div>
    </div>
  </div>;
};
