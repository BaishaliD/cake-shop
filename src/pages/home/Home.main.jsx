import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import NewLaunch from "./NewLaunch";
import Occasions from "./Occasions";
import Flavours from "./Flavours";
import Types from "./Types";
import Team from "./Team";
import MailList from "./MailList";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="pt-16 bg-hero">
      <Hero />
      <NewLaunch />
      <Occasions />
      <Categories />
      <Types />
      <Flavours />
      <Team />
      <MailList />
      <Footer />
    </div>
  );
}
