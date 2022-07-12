import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { User } from "../src/types";
import { HomePage } from "../src/components/HomePage";

const Home: NextPage = () => {
  const [users, setUsers] = useState(null);
  const [count, setCount] = useState(0);
  const getUsers = async () => {
    fetch("https://usersappudbhav.herokuapp.com/users/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setCount(data.count);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (!users) {
    return <Flex>Loading...</Flex>;
  }

  return <HomePage users={users} count={count} />;
};

export default Home;
