"use client";
import { MenuItem, Select, TextField, InputLabel } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./globals.css";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { CompletedHabits } from "./components/CompletedHabits";

export default function Home() {
   interface habitInterface {
    id: number;
    title: string;
    description: string;
    frequency: string;
    completed: boolean;
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");

  const [allHabits, setallHabits] = useState<habitInterface[]>([]);


  async function handleSubmit() {
    await axios.post("http://localhost:3000/api", {
      title,
      description,
      frequency,
    });

    window.location.reload();
  }

  

  useEffect(() => {
    async function main() {
      const res = await axios.get("http://localhost:3000/api");
      console.log(res.data);
      setallHabits(res.data.allHabits);
    }

    main();
  }, []);

  return (
    <div className="">
  {/* Form Section */}
  <div className="flex mt-4 flex-col md:flex-row justify-around gap-8">

    {/* Habit Form */}
    <div className="flex flex-col items-center p-6 bg-white shadow-md border border-gray-300 w-full max-w-lg gap-6 rounded-lg ">
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Add New Habit
      </h3>

      {/* Title Input */}
      <div className="w-full">
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          placeholder="Title"
          size="small"
          className="bg-gray-50 rounded-md w-full"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Description Input */}
      <div className="w-full">
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Description"
          variant="filled"
          className="bg-gray-50 rounded-md w-full"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Frequency Selector */}
      <div className="w-full">
        <InputLabel id="demo-simple-select-label" className="text-gray-600">
          Frequency
        </InputLabel>
        <Select
          value={frequency}
          label="Frequency"
          aria-placeholder="frequency"
          className="w-full bg-gray-50 rounded-md"
          onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
        >
          <MenuItem value={"daily"}>Daily</MenuItem>
          <MenuItem value={"weekly"}>Weekly</MenuItem>
        </Select>
      </div>

      {/* Submit Button */}
      <div className="w-full text-center">
        <button
          className="w-full px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>

    {/* Completed Habits */}
    <CompletedHabits allHabits={allHabits} />
  </div>

  {/* Cards Section */}
  <div className="relative mt-8">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>

    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Your Habits
      </h2>

      {/* Cards Grid - Responsiveness Improved */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {allHabits.filter((habit) => habit.completed === false).map((habit) => (
          <Card
            key={habit.id}
            id={habit.id}
            title={habit.title}
            description={habit.description}
            frequency={habit.frequency}
            
          />
        ))}
      </div>
    </div>
  </div>

  {/* Footer */}
  <Footer />
</div>

  );
}
