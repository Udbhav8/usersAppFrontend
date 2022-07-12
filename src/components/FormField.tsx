import React from "react";
import {
  Divider,
  FormControl,
  Spacer,
  Input,
  RadioGroup,
  Radio,
  VStack,
} from "@chakra-ui/react";

import { Role } from "../types";
import { Field } from "formik";

export const FormFieldText = (props: {
  fieldName: string;
  placeHolder: string;
}) => {
  const { fieldName, placeHolder } = props;
  return (
    <Field name={fieldName}>
      {(props: { field: any; form: any }) => (
        <FormControl id={fieldName} isRequired>
          {" "}
          <Spacer />
          <Input
            {...props.field}
            variant="outline"
            size="lg"
            w="full"
            id={fieldName}
            placeholder={placeHolder}
            maxLength={100}
            isRequired
          />
        </FormControl>
      )}
    </Field>
  );
};

export const RadioField = (props: {
  fieldName: string;
  values: { [field: string]: any };
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
}) => {
  const { fieldName, setFieldValue, values } = props;
  return (
    <RadioGroup
      onChange={(e: any) => setFieldValue(fieldName, e)}
      value={values.role}
    >
      <VStack alignItems="start" direction="row">
        <Radio value={Role.REGULAR}>Regular - Cannot delete members</Radio>\
        <Divider />
        <Radio value={Role.ADMIN}>Admin - Can delete members</Radio>
        <Divider />
      </VStack>
    </RadioGroup>
  );
};
