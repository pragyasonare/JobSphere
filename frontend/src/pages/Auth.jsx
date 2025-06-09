import React,{useState} from 'react'
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { SignUp } from "../components";
import { Office } from '../assets';

const Auth = () => {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(true);
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  if (user.token) {
    return window.location.replace(from);
  }
  return (
    <div className='w-screen h-screen z-0 '>
    <img
     src={Office}    alt='Office' 
    className='object-contain   w-full ' />
      <SignUp open={open} setOpen= {setOpen} />
    </div>
  );
};


export default Auth