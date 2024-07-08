import { useTranslation } from 'react-i18next';

import { Box, Link, Typography } from '@mui/material';

import './ExamplePage.css';
import {
  containerStyle,
  footerStyle,
  headingStyle,
  levvaNameStyle,
  linkStyle,
  pageInfoStyle,
  subtitleStyle,
} from './ExamplePage.styles';

export default function ExamplePage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Box sx={containerStyle}>
      <Box sx={{ textAlign: 'center', zIndex: 2 }}>
        <Typography variant="h1" sx={headingStyle}>
          <Box component="span" sx={levvaNameStyle}>
            levva
          </Box>{' '}
          /desenvolvimento
        </Typography>
        <Box sx={footerStyle}>
          <Typography variant="h2" sx={subtitleStyle}>
            Template Web
          </Typography>
          <Typography variant="h2" sx={pageInfoStyle}>
            {t('example.page-info')}
          </Typography>
          <Link
            href="https://dev.azure.com/levva/levva-Templates/_wiki/wikis/levva-Templates.wiki/1389/Começe-aqui"
            target="_blank"
            sx={linkStyle}
          >
            {t('example.learn-more')}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
