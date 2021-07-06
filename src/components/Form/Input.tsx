import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  required?: boolean;
  helpText?: React.ReactNode;
}

export function Input({
  name,
  label,
  required,
  helpText,
  ...rest
}: InputProps) {
  return (
    <FormControl isRequired={required}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="teal.300"
        borderColor="gray.400"
        fontWeight={600}
        {...rest}
      />
      {helpText}
    </FormControl>
  );
}
