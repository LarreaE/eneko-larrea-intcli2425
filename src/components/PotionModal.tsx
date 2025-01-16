import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Potion } from "../types/Potion";

const style = {
  position:'absolute',
  overflow:'scroll',
  height:'70%',
  top: '50%',
  left: '50%',  
  transform: 'translate(-50%, -50%)',
  display:'block',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


interface Props {
  potion: Potion;
}
const PotionModal: React.FC<Props> = ({ potion }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            {potion.name}
          </Typography>
          </Box>
         

          <div className="">
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Effects
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Primary Effect
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Attribute: {potion.effects.primary.attribute}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duration: {potion.effects.primary.duration.amount}{" "}
                {potion.effects.primary.duration.unit}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Secondary Effects
              </Typography>
              {potion.effects.secondary.map((effect) => (
                <>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Effect Name: {effect.attribute}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duration: {effect.duration.amount} {effect.duration.unit}
                  </Typography>
                </>
              ))}
            </div>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Ingredients
              </Typography>
              {potion.ingredients.map((ingredient) => (
                <>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Ingredient Name: {ingredient.name}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Location: {ingredient.origin.location}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Region: {ingredient.origin.region}
                  </Typography>
                </>
              ))}
            </div>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Restrictions
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Level Requirement: {potion.usage.restrictions.levelRequirement}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Restricted Classes
              </Typography>
              {potion.usage.restrictions.classRestrictions.map((classes) => (
                <>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {classes}
                  </Typography>
                </>
              ))}
            </div>

            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Usage Warnings
              </Typography>
              {potion.usage.restrictions.warnings.map((warnings) => (
                <>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {warnings}
                  </Typography>
                </>
              ))}
            </div>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Creation Time
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Time: {potion.crafting.time.amount} {potion.crafting.time.unit}
              </Typography>
            </div>

            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Instructions
              </Typography>
              {potion.usage.instructions.map((instructions) => (
                <>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {instructions}
                  </Typography>
                </>
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default PotionModal;
