import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Potion } from "../types/Potion";
import { useEffect } from "react";

interface Props {
  potions: Potion[];
  findPotionsByEffect: (potions: Potion[], effect: string) => void;
}
const EffectSelect: React.FC<Props> = ({ potions, findPotionsByEffect }) => {
  const [effect, setEffect] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEffect(event.target.value as string);
  };

  useEffect(() => {
    console.log(effect);
    findPotionsByEffect(potions, effect);
  }, [effect]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Effects</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={effect}
          label="efe"
          onChange={handleChange}
        >
          <MenuItem value="healthRegeneration">healthRegeneration</MenuItem>
          <MenuItem value="staminaBoost">staminaBoost</MenuItem>
          <MenuItem value="manaRegeneration">manaRegeneration</MenuItem>
          <MenuItem value="focusBoost">focusBoost</MenuItem>
          <MenuItem value="ElementalResistance">ElementalResistance</MenuItem>
          <MenuItem value="ManaBoost">ManaBoost</MenuItem>
          <MenuItem value="movementSpeed">movementSpeed</MenuItem>
          <MenuItem value="dodgeChance">dodgeChance</MenuItem>
          <MenuItem value="cooldownReduction">cooldownReduction</MenuItem>
          <MenuItem value="maxHealth">maxHealth</MenuItem>
          <MenuItem value="stealth">stealth</MenuItem>
          <MenuItem value="fireResistance">fireResistance</MenuItem>
          <MenuItem value="burningAura">burningAura</MenuItem>
          <MenuItem value="criticalStrikeChance">criticalStrikeChance</MenuItem>
          <MenuItem value="epitimeSlowc">timeSlow</MenuItem>
          <MenuItem value="regeneration">regeneration</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default EffectSelect;
