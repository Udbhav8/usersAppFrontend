import { Stack, Flex, Divider, Button, Center } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import router from "next/router";
import React from "react";
import { Role } from "../types";
import { UserForm } from "../components/UserForm";
import { Header } from "../components/Header";
export const UserCreate = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const fetching = isSubmitting;

  return (
    <Stack as="section" w="100%">
      <Header
        heading="Add a Team Member"
        description="Set Name,Role,Email and Phone."
        showIcon={false}
      ></Header>
      <Divider />

      <Stack>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            role: Role.REGULAR,
            number: "",
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
              "https://usersappudbhav.herokuapp.com/users/",
              {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(userData),
              }
            );

            if (res.status === 201) {
              router.push("/");
            } else {
              console.log(res);
              throw new Error("error creating user");
            }

            setIsSubmitting(false);
          }}
        >
          {({ values, setFieldValue, errors, touched }) => {
            return (
              <Form>
                <UserForm values={values} setFieldValue={setFieldValue} />

                <Flex justifyContent="end" m="2rem">
                  <Center>
                    <Button
                      colorScheme="blue"
                      variant="solid"
                      isLoading={fetching}
                      type="submit"
                    >
                      Save
                    </Button>
                  </Center>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Stack>
    </Stack>
  );
};
