import { Stack, Flex, Box, Divider, Spacer, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { User } from "../types";
import { UserForm } from "../components/UserForm";
import { Header } from "../components/Header";
import { useRouter } from "next/router";

export const UserEdit = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();
  const userId = router.query?.userId;
  const [user, setUser] = React.useState<User>();

  const getUser = async () => {
    fetch(`http://usersappudbhav.herokuapp.com/user/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  const deleteUser = async () => {
    setIsSubmitting(true);
    const res = await fetch(
      `http://usersappudbhav.herokuapp.com/update-user/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    );
    if (res.status === 200) {
      router.push("/");
    } else {
      console.log("Error while deleting user");
    }
    setIsSubmitting(false);
  };

  React.useEffect(() => {
    if (userId) {
      getUser();
    }
  });
  const fetching = isSubmitting;

  if (!user) {
    return <Box>Loading...</Box>;
  }

  return (
    <Stack as="section" w="100%">
      <Header
        heading="Edit Team Member"
        description="Edit Name, Role, Email and Phone."
        showIcon={false}
      ></Header>
      <Divider />

      <Stack>
        <Formik
          initialValues={{
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            role: user?.role,
            number: user?.number,
          }}
          onSubmit={async (values) => {
            setIsSubmitting(true);

            const userData = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              role: values.role,
              number: values.number,
            };
            console.log(userData);

            const res = await fetch(
              `https://usersappudbhav.herokuapp.com/update-user/${user?.id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "PATCH",
                body: JSON.stringify(userData),
              }
            );

            if (res.status === 200) {
              router.push("/");
            } else {
              console.log(res);
              throw new Error("error editing user");
            }

            setIsSubmitting(false);
          }}
        >
          {({ values, setFieldValue, errors, touched }) => {
            return (
              <Form>
                <UserForm values={values} setFieldValue={setFieldValue} />

                <Flex m="2rem">
                  <Button
                    colorScheme="red"
                    variant="outline"
                    isLoading={fetching}
                    onClick={deleteUser}
                  >
                    Delete
                  </Button>
                  <Spacer />
                  <Button
                    colorScheme="blue"
                    variant="solid"
                    isLoading={fetching}
                    type="submit"
                  >
                    Save
                  </Button>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Stack>
    </Stack>
  );
};
