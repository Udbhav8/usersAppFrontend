import React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  VStack,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { User, Role } from "../types";
import Link from "next/link";
interface UserComponentProps {
  user: User;
}

export const UserComponent = (props: UserComponentProps) => {
  const { user } = props;

  const getName = (user: User) => {
    if (user.firstName && user.lastName && user.role === Role.REGULAR) {
      return `${user.firstName} ${user.lastName}`;
    } else if (user.firstName && user.lastName && user.role === Role.ADMIN) {
      return `${user.firstName} ${user.lastName} (admin)`;
    }
  };
  return (
    <Link href={`/user/${user.id}/edit`}>
      <ChakraLink>
        <Flex ml={{ base: "1rem", md: "2rem" }} minH="7rem">
          <Avatar
            alignSelf="center"
            name={user?.firstName + user?.lastName}
            size="lg"
            src="https://www.jbrhomes.com/wp-content/uploads/blank-avatar.png"
          ></Avatar>
          <VStack alignItems="start" spacing="0.25rem" my="auto" ml="1rem">
            <Text fontWeight="medium" fontSize="sm" textColor="gray.800">
              {getName(user)}
            </Text>
            <Text fontWeight="normal" fontSize="sm" textColor="gray.500">
              {user?.number}
            </Text>
            <Text
              lineHeight="0.75"
              fontWeight="normal"
              fontSize="sm"
              textColor="gray.500"
            >
              {user?.email}
            </Text>
          </VStack>
          <Divider />
        </Flex>
      </ChakraLink>
    </Link>
  );
};
