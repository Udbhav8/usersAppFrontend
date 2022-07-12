import { Flex, VStack, Spacer, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { MdAdd as AddIcon } from "react-icons/md";
import { useRouter } from "next/router";
export const Header = (props: {
  count?: number;
  heading: string;
  description?: string;
  showIcon?: boolean;
}) => {
  const { count, heading, description, showIcon } = props;
  const router = useRouter();
  return (
    <Flex minH="7rem" w="full" my="auto">
      <VStack alignItems="start" my="auto" ml={{ base: "1rem", md: "2rem" }}>
        <Text fontWeight="medium" textColor="gray.700" fontSize="2xl">
          {" "}
          {heading}
        </Text>
        <Text
          lineHeight="1"
          fontWeight="medium"
          fontSize="md"
          textColor="gray.500"
        >
          {count !== undefined ? `You have ${count} team members` : description}
        </Text>
      </VStack>
      {showIcon ? (
        <>
          <Spacer />
          <IconButton
            m="0.5rem"
            colorScheme="blue"
            variant="outline"
            aria-label="Add User"
            icon={<AddIcon />}
            onClick={() => router.push("/user/create")}
          ></IconButton>
        </>
      ) : null}
    </Flex>
  );
};
