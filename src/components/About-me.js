import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useTranslation } from 'react-i18next'

import portrait from '../images/portrait.jpg'

// Bio and protrait 
export default function AboutMe() {
    const { t } = useTranslation()

    return (
        <Stack id="about-me" direction="column" alignItems="center" justifyContent="center" spacing={5} sx={
            {   gap: 2,
                px: 2,
                minHeight: '100vh',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)'}}>
            <Typography variant="h2">
                {t('aboutMe.title')}
            </Typography>
            <img src={portrait} style={{borderRadius: '50%'}}/>
            <Typography variant="body1" sx={{width: ['100%', '75%', '50%']}}>
                {t('aboutMe.para1')}
                <br /><br />
                {t('aboutMe.para2')}
                <br /><br />
                {t('aboutMe.para3')}
            </Typography>
        </Stack>
    );
  }