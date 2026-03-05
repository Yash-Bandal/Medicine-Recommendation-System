// src/pages/Exercises.jsx
import React, { useState } from 'react';

const dummyExercises = [
  {
    name: 'Desi Sapate',
    muscle: 'Full Body',
    type: 'Strength',
    difficulty: 'Medium',
    video: 'https://www.youtube.com/embed/SgE328AQQB0?si=fHreKGdB5hiwON0W',
  },
  {
    name: 'Surya Namaskar',
    muscle: 'Full Body',
    type: 'Cardio',
    difficulty: 'Easy',
    video: 'https://www.youtube.com/embed/QFhgghL3vGM?si=POmOMV_jziZBitOn',
  },
  {
    name: 'Hanuman Dand',
    muscle: 'Uppeer Body',
    type: 'Stability',
    difficulty: 'Medium',
    video: 'https://www.youtube.com/embed/Uciz0m-a9xM?si=CTdTGRG_pUXpCjNS',
  },
];

const Exercises = () => {
  const [exercises] = useState(dummyExercises);

  return (
    <div className="p-6">

      <h1 className='text-[50px]  dark:text-white mb-10'>YB-Health Studios</h1>


      {/* <h1 className="text-2xl font-bold mb-6">Exercise Library</h1> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((ex, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={ex.video}
                title={ex.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48"
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{ex.name}</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Muscle: {ex.muscle}
              </p>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Type: {ex.type}
              </p>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Difficulty: {ex.difficulty}
              </p>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Exercises;
