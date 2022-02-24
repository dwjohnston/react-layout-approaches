import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { BarPage } from '../pages/BarPage';
import { FooPage } from '../pages/FooPage';
import { HomePage } from '../pages/Homepage';

export type MyRouterProps = {

}

export const MyRouter = (props: MyRouterProps) => {
  const { } = props;
  return <BrowserRouter>

    <Routes>
      <Route path="/foo" element={<FooPage />}/>
      <Route path="/bar" element={<BarPage />}/>
      <Route index element={<HomePage/>}/>
    </Routes>


    
  </BrowserRouter>;
};
