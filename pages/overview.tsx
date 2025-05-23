import { Box, Heading, Text } from '@chakra-ui/react';
import { Default } from 'components/layouts/Default';

const Overview = () => {
  return (
    <Box>
      <Heading>Platform Overview</Heading>
      <Text mt={4}>Welcome to our DeFi Banking Platform</Text>
    </Box>
  );
};

Overview.getLayout = (page: any) => <Default pageName="Overview">{page}</Default>;

export default Overview; 