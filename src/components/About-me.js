import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import portrait from '../images/portrait.jpg'

export default function AboutMe() {

    return (
        <Stack id="about-me" direction="column" alignItems="center" justifyContent="center" spacing={5} sx={
            {   gap: 2,
                px: 2,
                minHeight: '100vh',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)'}}>
            <Typography variant="h2">
                About Me
            </Typography>
            <img src={portrait} style={{borderRadius: '50%'}}/>
            <Typography variant="body1" sx={{width: ['100%', '75%', '50%']}}>
                Andrzej Zacharski, Ph.D. is a native of Poland and originally came to Tokyo in 2003, to study Japanese culture.
                He graduated from the Meisei University, with the speciality in Japanese language and in 2019 he completed the doctoral course at the University of the Ryukyus, in Okinawa.
                His natural talent for learning foreign languages has led him to work as multilingual interpreter for various international organizations.
                For many years he has been co-operating regularly with Polish Karate Federation, Embassy of Poland in Tokyo and Okinawa Prefectural Goverment.
                In the recent years has also been working for the Public Prosecutor's Office and Okinawa Customs Office.
                He has experience in teaching martial arts in several languages as well as the languages themselves.
                His background in sports competition is reflected in the clarity, strength and confidence of his voice.
                Andrzej can be seen in 2004 top-ranked Japanese movie "Otosan-no Backdrop", as well as 2009 hit movie "Hagetaka".
            </Typography>
        </Stack>
    );
  }