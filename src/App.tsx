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

function App() {
  const [currentPotions, setCurrentPotions] = useState(potions);
  const [modal, setModal] = useState(false);
  const [level, setLevel] = useState<number>(35);
  const [craftTime, setCraftTime] = useState<number | null>(null);
  const [potion, setPotion] = useState<Potion | null>(null);


  const showModal = (potion: Potion) => {
    setPotion(potion);
    setModal(true);
    console.log(potion);
    console.log(modal);
  };

  const transformIntoNumber = (value: string): number => {
    return Number(value);
  };
  const findPotionsbyLevel = (potions: Potion[], level: number) => {
    let value = (document.getElementById("level") as HTMLInputElement).value;
    const num = transformIntoNumber(value); //transform into number
    setLevel(num);
    console.log(level);
    setCurrentPotions(filterByLevelRequirement(potions, num));
  };
  const findPotionsbyRarity = (potions: Potion[]) => {
    let value = (document.getElementById("rar") as HTMLInputElement).value;
    console.log(value);
    setCurrentPotions(getPotionsByRarity(potions, value));
  };
  const findPotionsbyEffect = (potions: Potion[]) => {
    let value = (document.getElementById("efe") as HTMLInputElement).value;
    console.log(value);
    setCurrentPotions(findPotionByEffect(potions, value));
  };
  const showCraftTime = (potions: Potion[]) => {
    let value = calculateCraftingTime(potions);
    console.log(value, "minutes");
    setCraftTime(value)
  };
  const applyAllFilters = (potions: Potion[]) => {
    let newPotions = potions;
    let level = (document.getElementById("level") as HTMLInputElement).value;
    const numlevel = transformIntoNumber(level); //transform into number

    let rarity = (document.getElementById("rar") as HTMLInputElement).value;
    let effect = (document.getElementById("efe") as HTMLInputElement).value;

    newPotions = filterByLevelRequirement(potions,numlevel);
    newPotions = getPotionsByRarity(newPotions,rarity);
    newPotions = findPotionByEffect(newPotions,effect);
    
    setCurrentPotions(newPotions);
  };
  const resetPotions = () => {
    setCurrentPotions(potions);
  };

  useEffect(() => {
    console.log(currentPotions);
  }, [currentPotions]);

  return (
    <>
      <div className="space-y-4">
        {potion ? (
          <div className="">
            <h2>Effects</h2>
            <p>---------------</p>
            <h2>Primary Effect</h2>
            <p>Attribute: {potion.effects.primary.attribute}</p>
            <p>Duration: {potion.effects.primary.duration.amount} {potion.effects.primary.duration.unit}</p>
            <p>----</p>
            <h2>Secondary Effects</h2>
            {potion.effects.secondary.map((effect) => (
            <>
            <p>Effect Name: {effect.attribute}</p>
            <p>Duration: {effect.duration.amount} {effect.duration.unit}</p>
            <p>----</p>
            </>
          ))}
            <h2>Ingredients</h2>
            <p>---------------</p>
            {potion.ingredients.map((ingredient) => (
            <>
            <p>Ingredient Name: {ingredient.name}</p>
            <p>Location: {ingredient.origin.location}</p>
            <p>Region: {ingredient.origin.region}</p>
            <p>----</p>
            </>
          ))}
            <h2>Restrictions</h2>
            <p>---------------</p>
            <p>Level Requirement: {potion.usage.restrictions.levelRequirement}</p>
            <p>----</p>
            <h2>Restricted Classes</h2>
            {potion.usage.restrictions.classRestrictions.map((classes) => (
            <>
            <p>{classes}</p>
            </>
          ))}
            <h2>Usage Warnings</h2>
            <p>---------------</p>
            {potion.usage.restrictions.warnings.map((warnings) => (
            <>
            <p>{warnings}</p>
            </>
          ))}
            <h2>Creation Time</h2>
            <p>---------------</p>
            <p>Time: {potion.crafting.time.amount} {potion.crafting.time.unit}</p>
            <h2>Instructions</h2>
            <p>---------------</p>
            {potion.usage.instructions.map((instructions) => (
            <>
            <p>{instructions}</p>
            </>
          ))}
          </div>
        ) : (<></>)}
        {currentPotions.length === 0 ? (
          <p className="text-center font-medium text-gray-300">No Potions...</p>
        ) : (
          currentPotions.map((potion) => (
            <div
              key={potion.id}
              className="flex items-center justify-between p-3 rounded border border-gray-500 bg-black/30 hover:bg-black/50 transition-colors duration-200"
              onClick={() => showModal(potion)}
            >
              <img
                src={`../public/${potion.image}`}
                className="w-16 h-16 object-contain rounded-full"
              />
              <span>{potion.name}</span>
              <span>Rarity: {potion.rarity}</span>
              <span>Boss: {potion.meta.availability.drop_rate.boss}</span>
              <span>Chance: {potion.meta.availability.drop_rate.chance}</span>

              <div>
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  type="button"
                  className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
                  onClick={() => showModal(potion)}
                >
                  Details
                </button>
              </div>
            </div>
          ))
        )}

        <div>
          <label htmlFor="level">Level (15-35): {level}</label>
          <input type="range" id="level" name="level" min={15} max="35" />
        </div>
        <button
          className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
          onClick={() => findPotionsbyLevel(potions, level)}
        >
          Level Filter
        </button>
        <form action="#">
          <label htmlFor="rar">Rarities: </label>
          <select name="rarities" id="rar">
            <option value="legendary">legendary</option>
            <option value="mythic">mythic</option>
            <option value="epic">epic</option>
          </select>
        </form>
        <button
          className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
          onClick={() => findPotionsbyRarity(potions)}
        >
          Rarity Filter
        </button>
        <form action="#">
          <label htmlFor="efe">Effects: </label>
          <select name="effects" id="efe">
            <option value="healthRegeneration">healthRegeneration</option>
            <option value="staminaBoost">staminaBoost</option>
            <option value="manaRegeneration">manaRegeneration</option>
            <option value="focusBoost">focusBoost</option>
            <option value="ElementalResistance">ElementalResistance</option>
            <option value="ManaBoost">ManaBoost</option>
            <option value="movementSpeed">movementSpeed</option>
            <option value="dodgeChance">dodgeChance</option>
            <option value="cooldownReduction">cooldownReduction</option>
            <option value="maxHealth">maxHealth</option>
            <option value="stealth">stealth</option>
            <option value="fireResistance">fireResistance</option>
            <option value="burningAura">burningAura</option>
            <option value="criticalStrikeChance">criticalStrikeChance</option>
            <option value="epitimeSlowc">timeSlow</option>
            <option value="regeneration">regeneration</option>
          </select>
        </form>

        <button
          className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
          onClick={() => findPotionsbyEffect(potions)}
        >
          Effect Filter
        </button>
        <br />
        <button
          className="px-4 py-1 bg-gray-300 text-black text-sm rounded hover:bg-gray-200 transition"
          onClick={() => applyAllFilters(potions)}
        >
          Apply All filters
        </button>
        <br />
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
        ) : (<></>)}
      </div>
    </>
  );
}

export default App;
