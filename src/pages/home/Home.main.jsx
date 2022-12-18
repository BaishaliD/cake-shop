import React, { useState, useEffect } from "react";
import Categories from "../home_old/Collections";
import Hero from "./Hero";
import NewLaunch from "./NewLaunch";
import Occasions from "./Occasions";
import Flavours from "./Flavours";

export default function Home() {
  return (
    <div className="pt-16 bg-hero">
      <Hero />
      <NewLaunch />
      <Occasions />
      <Categories />
      <Flavours />
    </div>
  );
}
