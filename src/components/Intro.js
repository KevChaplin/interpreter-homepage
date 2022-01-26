import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
        <Stack id="top" alignItems="center" justifyContent="center" spacing={3} sx={
            {   gap: 1,
                minHeight: '100vh',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)'}}>
            <Typography variant="h1" align="center" >
                Andrzej Zacharski, Ph.D.
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
                {flags}
            </Stack>
            <Typography variant="h4" align="center">
                World class interpretation in Polish, English, Japanese, Russian and German.
                <br />Business, Politics, Art, Sports, Tourism and more.
            </Typography>
        </Stack>
    );
  }