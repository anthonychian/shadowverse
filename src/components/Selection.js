import React, { useState } from 'react';
import Home from '../components/Home'
import imageCernunnos from '../assets/leaders/Cernunnos/Cernunnos.png'
import imageMizuchi from '../assets/leaders/Mizuchi/Mizuchi.png'
import imageForte from '../assets/leaders/Forte/Forte.png'
import imagePompom from '../assets/leaders/Pompom/Pompom.png'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: "30%",
  width: "30%",
  bgcolor: 'rgb(0, 0, 0, 0.5)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default function Selection() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedOption, setSelectedOption] = useState("Forte")

    function selectLeader(e) {
        console.log(e.target.alt)
        setSelectedOption(e.target.alt)
    }

  return (
    <div>
        <IconButton sx={{ color:"white", position: 'fixed', left: '5%', zIndex: '10', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <MenuIcon sx={{color: "white", width:"50px", height: "50px"}} onClick={handleOpen}></MenuIcon>
        </IconButton>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Card variant="outlined" sx={{backgroundColor: 'rgb(0, 0, 0, 0)'}}>
                    <img
                        onClick={(e) => selectLeader(e)}
                        width="100px"
                        src={imageForte}
                        alt="Forte"
                    />
                    <img
                        onClick={(e) => selectLeader(e)}
                        width="100px"
                        src={imageMizuchi}
                        alt="Mizuchi"
                    />
                    <img
                        onClick={(e) => selectLeader(e)}
                        width="100px"
                        src={imageCernunnos}
                        alt="Cernunnos"
                    />
                    <img
                        onClick={(e) => selectLeader(e)}
                        width="100px"
                        src={imagePompom}
                        alt="Pompom"
                    />
            </Card>
        </Box>
      </Modal>
      <Home name={selectedOption}/>
    </div>
  );
}
