import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from '../pages/Homepage';
import { routes } from './routes';

export type MyRouterProps = {

}

export const MyRouter = (props: MyRouterProps) => {
  const { } = props;
  return <BrowserRouter>
    <Routes>
      {routes.map((v) => <Route path={v.path} key={v.path} element={v.component({})} />)}
      <Route index element={<HomePage />} />
    </Routes>
  </BrowserRouter>;
};
