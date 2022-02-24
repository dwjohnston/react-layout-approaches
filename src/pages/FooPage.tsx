
import React from 'react';
import { SizedContent } from '../components/SizedContent';
import { StandardLayout } from '../layouts/StandardLayout';

export type FooPageProps = {

}

export const FooPage = (props: FooPageProps) => {
  const { } = props;
  return <StandardLayout>
    foo page

    <SizedContent/>
  </StandardLayout>;
};
