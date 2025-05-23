import { useColorModeValue, Stack, Box, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export interface ISubNav {
  label: string;
  subLabel?: string;
  href?: string;
  children?: Array<ISubNav>;
}

const SubNav = ({ label, href, subLabel }: ISubNav) => {
  return (
    <NextLink href={href || '#'} legacyBehavior>
      <Link
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text transition={'all .3s ease'} _groupHover={{ color: 'green.400' }} fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
        </Stack>
      </Link>
    </NextLink>
  );
};

export default SubNav;
