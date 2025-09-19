'use client';

import React from "react";
import CardComponent from "@/components/Card/CardComponent";
import { cities } from "@/utils/data";

const CitiesPage = () => {
  return <CardComponent items={cities} type="city" />;
};

export default CitiesPage;

