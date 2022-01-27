import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import { useTranslation } from 'react-i18next'

export default function Copyright() {

  const { t } = useTranslation()

    return (
      <Paper>
        <Typography variant="body2" color="text.primary" align="center">
          {`${t("footer.copyright")} © `}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <Typography variant="body2" color="text.primary" align="center">
          {`${t("footer.imageBy")} `}
          <Link color="inherit" href="https://unsplash.com/@charles_forerunner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Charles Forerunner
          </Link>
          {` ${t("footer.on")} `}
          <Link color="inherit" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            UnSplash
          </Link>
          {'.'}
        </Typography>
        <Typography variant="body2" color="text.primary" align="center">
        {`${t("footer.flagsBy")} `}
          <Link color="inherit" href="https://flagpedia.net">
            Flagpedia.net
          </Link>
          {'.'}
        </Typography>
        <Typography variant="body2" color="text.primary" align="center">
        {`${t("footer.websiteBy")} `}
          <Link color="inherit" href="https://kevchaplin.github.io/">
            Kevin Chaplin
          </Link>
          {'.'}
        </Typography>
      </Paper>
    );
  }