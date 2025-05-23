import { Box, Heading, Text, VStack, Code } from '@chakra-ui/react';

interface PlaceholderPageProps {
  title: string;
  path: string;
}

const PlaceholderPage = ({ title, path }: PlaceholderPageProps) => {
  return (
    <VStack spacing={4} align="stretch">
      <Heading size="lg">{title}</Heading>
      <Box p={4} borderRadius="md" bg="gray.50" _dark={{ bg: 'gray.700' }}>
        <Text>This is a placeholder page for:</Text>
        <Code mt={2}>{path}</Code>
      </Box>
      <Text>Content for this page will be implemented in future iterations.</Text>
    </VStack>
  );
};

export default PlaceholderPage; 