import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Potion } from '../types/Potion';
import { useEffect } from 'react';


interface Props {
  potions: Potion[];
  findPotionsByRarity: (potions: Potion[], rarity: string) => void;
}
const RaritySelect: React.FC<Props> = ({ potions, findPotionsByRarity }) => {
  const [rarity, setRarity] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRarity(event.target.value as string);
  };

    useEffect(() => {
      console.log(rarity);
      findPotionsByRarity(potions,rarity);
    }, [rarity]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rarity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rarity}
          label="rar"
          onChange={handleChange}
        >
          <MenuItem value={'legendary'}>Legendary</MenuItem>
          <MenuItem value={'epic'}>Epic</MenuItem>
          <MenuItem value={'mythic'}>Mythic</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default RaritySelect;