import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Potion } from "../types/Potion";
import { useEffect } from "react";

function valuetext(value: number) {
  return `${value}`;
}

interface Props {
  findPotionsByLevel: (potions: Potion[], level: number) => void;
  potions: Potion[];
}
const LevelSlider: React.FC<Props> = ({ potions, findPotionsByLevel }) => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  useEffect(() => {
    console.log(value);
    findPotionsByLevel(potions,value);
  }, [value]);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        onChange={handleChange}
        aria-label="Level"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={1}
        marks
        min={18}
        max={36}
      />
    </Box>
  );
};
export default LevelSlider;
