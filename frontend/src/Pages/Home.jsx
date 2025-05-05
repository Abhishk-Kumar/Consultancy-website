import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import Associations from "../components/Associations";

const Home = () => {
  return (
    <>
      <Hero/>
      <Biography  />
      <Departments />
      <Associations/>
      <MessageForm />
    </>
  );
};

export default Home;
