import { Flex, HStack, Stack } from '@chakra-ui/react';

import Card from './Card';

export default function DashboardContent() {
  return (
    <Flex p="6" flex="1">
      <Stack spacing="4" w="100%" h="100%">
        <HStack spacing="4" w="100%" flex="1">
          <Card>
            <h1>Card 1</h1>
          </Card>
          <Card>
            <h1>Card 2</h1>
          </Card>
          <Card>
            <h1>Card 3</h1>
          </Card>
        </HStack>

        <HStack spacing="4" w="100%" flex="1">
          <Card>
            <h1>Card 4</h1>
          </Card>
          <Card>
            <h1>Card 5</h1>
          </Card>
        </HStack>
      </Stack>
    </Flex>
  );
}
