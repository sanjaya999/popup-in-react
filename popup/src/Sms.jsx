import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const smsStyles = {
  container: {
    bgcolor: '#4b57d2',  // Background color matching the modal
    color: 'white',       // Text color for readability
    borderRadius: '8px',
    p: 2,
    width: 400,
    maxWidth: '90%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  profilePic: {
    mr: 2,
  },
  contactInfo: {
    flexGrow: 1,
  },
  smsBody: {
    overflowY: 'auto',
    maxHeight: 200,  // Adjust as needed
    mb: 2,
  },
  footer: {
    mt: 2,
  },
  button: {
    textTransform: 'none',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
  },
};


const [open, setOpen] = useState(false);
const [showSubgroup, setShowSubgroup] = useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


function Sms() {
  return (
    <Box sx={smsStyles.container}>
      <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
        Preview SMS
      </Typography>
      <Box sx={smsStyles.header}>
        <Avatar
          alt="Profile"
          src="https://via.placeholder.com/40"
          sx={smsStyles.profilePic}
        />
        <Box sx={smsStyles.contactInfo}>
          <Typography variant="h6">शेरबहादुर देउवा</Typography>
          <Typography variant="body2">सभापति, नेपाली कांग्रेस</Typography>
        </Box>
      </Box>
      <Box sx={smsStyles.smsBody}>
        <Typography variant="body2">
          नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l <br />
          वीपी संगै सुवर्ण शमशेर, गणेशमान सिंह, कृष्णप्रसाद भट्टराई, गिरिजाप्रसाद कोइराला र सुशील कोइरालाले विभिन्न कालखण्डमा यो पार्टीको र समग्र देशको नेतृत्व गर्नुभयो l उहाँहरुको नेतृत्वमा मुलुकले हासिल गरेको राजनैतिक र आर्थिक उपलब्धिको जगमा हामीले नेपाल देशको समृद्धि र खुसी प्राप्तिको यात्रालाई अघि बढाउनु छ l
          राष्ट्रियता, लोकतन्त्र र समाजवादको सिद्धान्त एवं आदर्शप्रति अटुट आस्था, दृढ़ अडान र निरन्तर अभियानमा नेपाली कांग्रेस सदैब अविचलित रहनेछ l <br />
          जय नेपाल । <br />
          शेरबहादुर देउवा<br />
          सभापति, नेपाली कांग्रेस
        </Typography>
      </Box>
      <Divider sx={{ my: 2, bgcolor: 'white' }} />
      <Box sx={smsStyles.footer}>
        <Typography variant="body2">Total Credit:</Typography>
        <Typography variant="body2">Total Receiver:</Typography>
        <Typography variant="body2">Total Amount:</Typography>
      </Box>
      <Button variant="outlined" sx={smsStyles.button}>
        Generate Invoice
      </Button>
    </Box>
  );
}

export default Sms;
