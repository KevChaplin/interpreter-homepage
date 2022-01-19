import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import introBackgroundImg from '../images/intro_background.jpg'

export default function Intro() {
    return (
        <Box sx={{
            backgroundImage: `url(${introBackgroundImg})`,
            backgroundSize: 'cover',}}>
        <Container sx={{
            display: 'grid',
            gridTemplateRows: '50vh 50vh 100vh',
            gap: 1,
            alignItems: 'center',
            minHeight: '100vh',
            Width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.6)'
            }}>
                <Typography id="top"variant="h1" align="center">
                    Andrzej Zacharski, Ph.D.
                </Typography>
                <Typography variant="h2" align="center">
                    World class interpretation in Polish, English, Japanese, Russian and German.
                    Business, Politics, Art, Sports, Tourism and more.
                </Typography>
                <Typography id="about-me" variant="body1">
                    Andrzej Zacharski, Ph.D. is a native of Poland and originally came to Tokyo in 2003, to study Japanese culture.
                    He graduated from the Meisei University, with the speciality in Japanese language and in 2019 he completed the doctoral course at the University of the Ryukyus, in Okinawa.
                    His natural talent for learning foreign languages has led him to work as multilingual interpreter for various international organizations.
                    For many years he has been co-operating regularly with Polish Karate Federation, Embassy of Poland in Tokyo and Okinawa Prefectural Goverment.
                    In the recent years has also been working for the Public Prosecutor's Office and Okinawa Customs Office.
                    He has experience in teaching martial arts in several languages as well as the languages themselves.
                    His background in sports competition is reflected in the clarity, strength and confidence of his voice.
                    Andrzej can be seen in 2004 top-ranked Japanese movie "Otosan-no Backdrop", as well as 2009 hit movie "Hagetaka".
                </Typography>
        </Container>
        </Box>
    );
  }