import React from 'react';
import { SizedContent } from '../components/SizedContent';
import { StandardLayout } from '../layouts/StandardLayout';

export type BarPageProps = {

}

export const BarPage = (props: BarPageProps) => {
  const { } = props;
  return <StandardLayout

    sideNavContent= {
      <SizedContent width = {100} height ={3000} color = "#7f8">I am the side nav. Note that I scroll independently!</SizedContent>
    }
    subNavContent={
      <SizedContent width={800} height={100} color="#6af"> I am some sub nav content. Note that I am sticky!</SizedContent>
    }
  >
    bar page
    

    
    <SizedContent />
  </StandardLayout>;
};
