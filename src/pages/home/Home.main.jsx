import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import NewLaunch from "./NewLaunch";
import Occasions from "./Occasions";
import Flavours from "./Flavours";
import Types from "./Types";
import Team from "./Team";
import MailList from "./MailList";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-24 bg-hero">
      <Hero />
      <NewLaunch />
      <Occasions />
      <Categories />
      <Types />
      <Flavours />
      <Team />
      <MailList />
    </div>
  );
}
