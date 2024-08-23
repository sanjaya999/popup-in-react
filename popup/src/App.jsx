import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import Sms from './Sms';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#4b57d2',  // Set background color to match the blue in your dashboard
  color: 'white',       // Set text color to white
  border: 'none',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const [showSubgroup, setShowSubgroup] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleSubgroup = () => setShowSubgroup(!showSubgroup);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Group
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="group-modal-title"
        aria-describedby="group-modal-description"
      >
        <Box sx={style}>
          <Typography id="group-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
            Group Name
          </Typography>
          <Button 
            variant="outlined" 
            onClick={toggleSubgroup} 
            sx={{ textTransform: 'none', color: 'white', borderColor: 'white' }}
          >
            {showSubgroup ? '-' : '+'} Subgroup
          </Button>
          {showSubgroup && (
            <Box sx={{ mt: 2, ml: 4 }}>  {/* Added margin-left to indent members */}
              <Typography variant="subtitle1" component="div">
                <Checkbox sx={{ color: 'white' }} /> Member 1
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{ mt: 1 }}>
                <Checkbox sx={{ color: 'white' }} /> Member 2
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{ mt: 1 }}>
                <Checkbox sx={{ color: 'white' }} /> Member 3
              </Typography>
              {/* Add more members as needed */}
            </Box>
          )}
        </Box>
      </Modal>
      <Sms />
    </>
  );
}

export default App;
