import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import introBackgroundImg from '../images/intro_background.jpg'

export default function Intro() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const flagSizes = {
        small: ["32", "24" ],
        large: ["48", "36"]
    }

    const languages = [
        { key: 1, language: "Polish", abbrev: "pl" },
        { key: 2, language: "English", abbrev: "gb" },
        { key: 3, language: "Japanese", abbrev: "jp" },
        { key: 4, language: "Russian", abbrev: "ru" },
        { key: 5, language: "German", abbrev: "de" }
     ]

    const flags = languages.map( item => {
        return (
            <img
                key={item.key}
                src={`https://flagcdn.com/72x54/${item.abbrev}.png`}
                srcSet={`https://flagcdn.com/144x108/${item.abbrev}.png 2x, https://flagcdn.com/216x162/${item.abbrev}.png 3x`}
                width={ isMobile ? flagSizes.small[0] : flagSizes.large[0] }
                height={ isMobile ? flagSizes.small[1] : flagSizes.large[1] }
                alt="English">    
            </img>
        )
    })

    return (
        <Box sx={{
            backgroundImage: `url(${introBackgroundImg})`,
            backgroundSize: 'cover'}}
        >
            <Container sx={{
                display: 'grid',
                gridTemplateRows: '100vh 100vh',
                gap: 1,
                alignItems: 'center',
                minHeight: '100vh',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)'
                }}>
                    <Stack alignItems="center" justifyContent="center" spacing={5} sx={{height: 1}}>
                        <Typography id="top" variant="h1" align="center" >
                            Andrzej Zacharski, Ph.D.
                        </Typography>
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
                            {flags}
                            {/* <img
                                src="https://flagcdn.com/72x54/gb.png"
                                srcSet="https://flagcdn.com/144x108/gb.png 2x,
                                    https://flagcdn.com/216x162/gb.png 3x"
                                width="48"
                                height="36"
                                alt="English">    
                            </img>
                            <img
                                src="https://flagcdn.com/72x54/jp.png"
                                srcSet="https://flagcdn.com/144x108/jp.png 2x,
                                    https://flagcdn.com/216x162/jp.png 3x"
                                width="48"
                                height="36"
                                alt="Japanese">    
                            </img>
                            <img
                                src="https://flagcdn.com/72x54/pl.png"
                                srcSet="https://flagcdn.com/144x108/pl.png 2x,
                                    https://flagcdn.com/216x162/pl.png 3x"
                                width="48"
                                height="36"
                                alt="Polish">
                            </img>
                            <img
                                src="https://flagcdn.com/72x54/ru.png"
                                srcSet="https://flagcdn.com/144x108/ru.png 2x,
                                    https://flagcdn.com/216x162/ru.png 3x"
                                width="48"
                                height="36"
                                alt="Russian">
                            </img>
                            <img
                                src="https://flagcdn.com/72x54/de.png"
                                srcSet="https://flagcdn.com/144x108/de.png 2x,
                                    https://flagcdn.com/216x162/de.png 3x"
                                width="48"
                                height="36"
                                alt="German">
                            </img> */}
                        </Stack>
                        <Typography variant="h2" align="center">
                            World class interpretation in Polish, English, Japanese, Russian and German.
                            <br />Business, Politics, Art, Sports, Tourism and more.
                        </Typography>
                    </Stack>
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