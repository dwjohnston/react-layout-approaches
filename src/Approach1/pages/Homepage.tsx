import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export type HomePageProps = {
    
}

export const HomePage = (props: HomePageProps) => {
  const {} = props;


  // Dunno if there is  a better way to do this, but just redirect to our actual default page 
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/foo");
  }, []); 
  return <></>;
};
