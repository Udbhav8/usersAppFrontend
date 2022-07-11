import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";

const Home: NextPage = () => {
  const getUsers = async () => {
    fetch("https://usersappudbhav.herokuapp.com/users//")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <Flex>Hello</Flex>;
};

export default Home;
