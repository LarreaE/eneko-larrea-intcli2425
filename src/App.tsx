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
import PotionModal from "./components/PotionModal";
import LevelSlider from "./components/Slider";
import RaritySelect from "./components/RaritySelect";
import EffectSelect from "./components/EffectSelect";
import PotionCard from "./components/PotionCard";

function App() {
  const [currentPotions, setCurrentPotions] = useState(potions);
  const [modal, setModal] = useState(false);
  const [, setLevel] = useState<number>(35);
  const [craftTime, setCraftTime] = useState<number | null>(null);
  const [, setRarity] = useState<string>("leyendary");
  const [, setPotion] = useState<Potion | null>(null);

  const showModal = (potion: Potion) => {
    setPotion(potion);
    setModal(true);
    console.log(potion);
    console.log(modal);
  };

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
  // const applyAllFilters = (potions: Potion[]) => {
  //   let newPotions = potions;
  //   let level = (document.getElementById("level") as HTMLInputElement).value;
  //   const numlevel = transformIntoNumber(level); //transform into number

  //   let rarity = (document.getElementById("rar") as HTMLInputElement).value;
  //   let effect = (document.getElementById("efe") as HTMLInputElement).value;

  //   newPotions = filterByLevelRequirement(potions, numlevel);
  //   newPotions = getPotionsByRarity(newPotions, rarity);
  //   newPotions = findPotionByEffect(newPotions, effect);

  //   setCurrentPotions(newPotions);
  // };

  const resetPotions = () => {
    setCurrentPotions(potions);
    setCraftTime(null);
    setPotion(null);
  };

  useEffect(() => {
    console.log(currentPotions);
  }, [currentPotions]);

  return (
    <>
      <div className="space-y-4">
        <div className="flex">
          {currentPotions.length === 0 ? (
            <p className="text-center font-medium text-gray-300">
              No Potions...
            </p>
          ) : (
            currentPotions.map((potion) => (
              <PotionCard potion={potion}/>
            ))
          )}
        </div>

        <div>
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
        <button
          className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
          onClick={() => resetPotions()}
        >
          Reset
        </button>
        {craftTime != null ? (
          <>
            <p>Time to create all filtered potions = {craftTime} minutes</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
