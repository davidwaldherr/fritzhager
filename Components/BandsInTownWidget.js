import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const BandsInTownWidget = ({ artistName }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.src = 'https://widget.bandsintown.com/main.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      className="bit-widget-initializer"
      data-artist-name={artistName}
      data-display-local-dates="false"
      data-display-past-dates="false"
      data-auto-style="false"
      data-text-color="#000000"
      data-link-color="#000000"
      data-background-color="rgba(0,0,0,0)"
      data-display-limit="15"
      data-display-start-time="false"
      data-link-text-color="#ffffff"
      data-display-lineup="false"
      data-display-play-my-city="true"
      data-separator-color="rgba(255, 255, 255, 0.5)"
    />
  );
};

export default BandsInTownWidget;
