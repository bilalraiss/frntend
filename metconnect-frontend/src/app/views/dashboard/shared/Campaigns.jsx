import { Box } from '@mui/material';
import { MatxProgressBar, SimpleCard } from 'app/components';
import { Small } from 'app/components/Typography';

const Trending = () => {
  return (
    <Box>
      <SimpleCard title="Trending">
        <Small color="text.secondary">Today</Small>
        <MatxProgressBar value={75} color="primary" text="Clothing (11k)" />
        <MatxProgressBar value={45} color="secondary" text="Technology (4k)" />
        <MatxProgressBar value={75} color="primary" text="Furnitures (8k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={45} color="primary" text="Clothing (3k)" />
        <MatxProgressBar value={35} color="secondary" text="Technology (1k)" />
        <MatxProgressBar value={25} color="primary" text="Furnitures (6k)" />

      </SimpleCard>
    </Box>
  );
};

export default Trending;
