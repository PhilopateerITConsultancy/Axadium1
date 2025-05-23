import { VStack, Heading, Text, Box, useColorModeValue, SimpleGrid } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box w="full">
      {/* Logo removed */}
      <VStack
        minH="70vh"
        justify="center"
        align="center"
        spacing={8}
        bgGradient={useColorModeValue(
          'linear(to-b, white, gray.50)',
          'linear(to-b, gray.800, gray.900)'
        )}
      >
        {/* Headline */}
        <Heading size="2xl" color="teal.500" textAlign="center">
          Welcome to Axadium
        </Heading>
        <Text fontSize="xl" color="gray.600" textAlign="center" maxW="lg">
          The Future of DeFi Banking. Stake, borrow, and earn with next-generation digital assets.
        </Text>

        {/* Feature Highlights */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={10} w="full" maxW="4xl">
          <Box textAlign="center">
            <Heading size="md" color="teal.400">Secure Staking</Heading>
            <Text>Earn rewards with industry-leading security.</Text>
          </Box>
          <Box textAlign="center">
            <Heading size="md" color="teal.400">Instant Loans</Heading>
            <Text>Access liquidity without selling your assets.</Text>
          </Box>
          <Box textAlign="center">
            <Heading size="md" color="teal.400">Multi-Asset Support</Heading>
            <Text>Stake and borrow with ETH, ERC20, and more.</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Home;
