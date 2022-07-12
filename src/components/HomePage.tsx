import React from "react";
import { User } from "../types";
import { Box, Divider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { UserComponent } from "../components/User";

interface HomePageProps {
  users: User[];
  count: number;
}
export const HomePage = (props: HomePageProps) => {
  const { users, count } = props;

  return (
    <>
      <Header heading="Team Members" count={count} showIcon={true}></Header>
      <Divider />
      {users.map((user: User) => (
        <Box key={user.id}>
          {" "}
          <UserComponent user={user} key={user.id} />
          <Divider key={user.email} />
        </Box>
      ))}
    </>
  );
};
