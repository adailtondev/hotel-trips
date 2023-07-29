"use client";

import DataPicker from "@/components/DataPicker";
import Input from "@/components/Input";
import React from "react";
import CurrencyInput from "@/components/CurrencyInput";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>
      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" className="" />

        <div className="flex gap-4">
          <DataPicker
            placeholderText="Data de ida"
            onChange={() => {}}
            className="w-full"
          />
          <CurrencyInput
            placeholder="Orçamento"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default TripSearch;
