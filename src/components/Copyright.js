import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'

export default function Copyright() {
    return (
      <Paper>
        <Typography variant="body2" color="text.primary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <Typography variant="body2" color="text.primary" align="center">
          {'Background Image by '}
          <Link color="inherit" href="https://unsplash.com/@charles_forerunner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Charles Forerunner
          </Link>{' on '}
          <Link color="inherit" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            UnSplash
          </Link>
          {'.'}
        </Typography>
        <Typography variant="body2" color="text.primary" align="center">
          {'National Flags by '}
          <Link color="inherit" href="https://flagpedia.net">
            Flagpedia.net
          </Link>
          {'.'}
        </Typography>
        <Typography variant="body2" color="text.primary" align="center">
          {'Website by '}
          <Link color="inherit" href="https://kevchaplin.github.io/">
            Kevin Chaplin
          </Link>
          {'.'}
        </Typography>
      </Paper>
    );
  }