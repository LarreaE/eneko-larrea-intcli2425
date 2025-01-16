import { useEffect, useState } from "react";
import "./App.css";
import { potions } from "./data/data";
import {
  calculateCraftingTime,
  filterByLevelRequirement,
  findPotionByEffect,
  getPotionsByRarity,
} from "./helpers/potionHelpers";
import { Potion } from "./types/Potion";
import LevelSlider from "./components/Slider";
import RaritySelect from "./components/RaritySelect";
import EffectSelect from "./components/EffectSelect";
import PotionCard from "./components/PotionCard";

function App() {
  const [currentPotions, setCurrentPotions] = useState(potions);
  const [, setLevel] = useState<number>(35);
  const [craftTime, setCraftTime] = useState<number | null>(null);
  const [, setRarity] = useState<string>("leyendary");
  const [,] = useState<Potion | null>(null);

  const findPotionsbyLevel = (potions: Potion[], level: number) => {
    setLevel(level);
    setCurrentPotions(filterByLevelRequirement(potions, level));
  };

  const findPotionsByRarity = (potions: Potion[], rarity: string) => {
    setRarity(rarity);
    setCurrentPotions(getPotionsByRarity(potions, rarity));
  };

  const findPotionsbyEffect = (potions: Potion[], effect: string) => {
    console.log(effect);
    setCurrentPotions(findPotionByEffect(potions, effect));
  };

  const showCraftTime = (potions: Potion[]) => {
    let value = calculateCraftingTime(potions);
    console.log(value, "minutes");
    setCraftTime(value);
  };

  // const resetPotions = () => {
  //   setCurrentPotions(potions);
  //   setCraftTime(null);
  //   setPotion(null);
  // };

  useEffect(() => {
    console.log(currentPotions);
    setCraftTime(null);
    //showCraftTime(currentPotions)
  }, [currentPotions]);

  return (
    <>
      <div className="border border-purple-700">
        <div className="border border-green-700">
          <div className="overflow-y-auto overflow-x-auto grid grid-cols-6 gap-6 content-center justify-center space-x-4 ">
            {currentPotions.length === 0 ? (
              <p className="text-center font-medium text-gray-300">
                No Potions...
              </p>
            ) : (
              currentPotions.map((potion) => (
                <PotionCard potion={potion} key={potion.id} />
              ))
            )}
          </div>
        </div>
        <div className="space-x-10 content-center justify-center align-middle justify-items-center border border-separate">
          <div className="space-y-4 flex space-x-10 ">
            <div className="">
              <LevelSlider
                potions={potions}
                findPotionsByLevel={findPotionsbyLevel}
              />
            </div>
            <div>
              <RaritySelect
                potions={potions}
                findPotionsByRarity={findPotionsByRarity}
              />
            </div>
            <div>
              <EffectSelect
                potions={potions}
                findPotionsByEffect={findPotionsbyEffect}
              />
            </div>
            <button
              className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
              onClick={() => showCraftTime(currentPotions)}
            >
              Craft Time
            </button>
            <br />
            {/* <button
            className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
            onClick={() => resetPotions()}
          >
            Reset
          </button> */}
          </div>

          {craftTime != null ? (
            <>
              <p>Time to create all filtered potions = {craftTime} minutes</p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
