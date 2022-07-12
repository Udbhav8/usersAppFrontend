import { Stack, Text, Box } from "@chakra-ui/react";
import React from "react";
import { FormFieldText, RadioField } from "../components/FormField";

interface FormProps {
  values: { [field: string]: any };
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
}

export const UserForm = (props: FormProps) => {
  const { values, setFieldValue } = props;
  return (
    <Stack mx={{ base: "1rem", md: "2rem" }} spacing="0.75rem">
      <Text
        mt="1rem"
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="semibold"
        textColor="black"
      >
        Info
      </Text>
      <FormFieldText fieldName="firstName" placeHolder="John"></FormFieldText>
      <FormFieldText fieldName="lastName" placeHolder="Doe"></FormFieldText>
      <FormFieldText
        fieldName="email"
        placeHolder="JohnDoe@gmail.com"
      ></FormFieldText>
      <FormFieldText
        fieldName="number"
        placeHolder="415-310-1619"
      ></FormFieldText>
      <Box>
        <Text
          minH="3rem"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"
          textColor="black"
        >
          Role
        </Text>
        <RadioField
          values={values}
          fieldName="role"
          setFieldValue={setFieldValue}
        ></RadioField>
      </Box>
    </Stack>
  );
};
