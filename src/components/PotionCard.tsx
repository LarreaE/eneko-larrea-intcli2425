import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import PotionModal from "./PotionModal";
import { Potion } from "../types/Potion";

interface Props {
  potion: Potion;
}
const PotionCard: React.FC<Props> = ({ potion }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={potion.image}
          alt="potion"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {potion.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <span>Rarity: {potion.rarity}</span>
            <br />
            <span>Boss: {potion.meta.availability.drop_rate.boss}</span>
            <br />
            <span>Chance: {potion.meta.availability.drop_rate.chance}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <PotionModal potion={potion} />
      </CardActions>
    </Card>
  );
};
export default PotionCard;
