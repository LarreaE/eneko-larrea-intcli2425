import { useEffect, useState } from "react";
import "./App.css";
import { potions } from "./data/data";
import { filterByLevelRequirement } from "./helpers/potionHelpers";

function App() {
  const [count, setCount] = useState(0);
  const [currentPotions, setCurrentPotions] = useState(potions);

  return (
    <>
      <div className="space-y-4">
        {currentPotions.length === 0 ? (
          <p className="text-center font-medium text-gray-300">
            The cart is empty...
          </p>
        ) : (
          currentPotions.map((potion) => (
            <div
              key={potion.id}
              className="flex items-center justify-between p-3 rounded border border-gray-500 bg-black/30 hover:bg-black/50 transition-colors duration-200"
            >
              <img
                src={`../public/${potion.image}`}
                className="w-16 h-16 object-contain rounded-full"
              />
              <span>{potion.name}</span>
              <span>{potion.type}</span>
              <div>
                <button
                  className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
                  onClick={() => {}}
                >
                  Hello
                </button>
              </div>
            </div>
          ))
        )}
        <button
          className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
          onClick={() => filterByLevelRequirement(potions,25)}
        >
          Hello
        </button>
      </div>
    </>
  );
}

export default App;
