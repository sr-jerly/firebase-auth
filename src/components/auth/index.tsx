import { FormControl, Box, Button, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import { useState } from "react";
import styled from "@emotion/styled";
import { LoginForm } from "../login-form";
import { RegisterForm } from "../register-form";

function AuthUI(): JSX.Element {
    const [isRegister, setIsRegister] = useState<boolean>(true);

    return (
        <Box
            mx="auto"
            bgColor="#fff"
            boxShadow=" 0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%);"
            p={10}
            mt="5rem"
            maxWidth="30rem"
            borderRadius="lg"
            textAlign="center"
        >
            <FormControl>
                <Heading fontSize={{ base: "2.2rem", sm: "2.4rem", md: "3rem" }} mt={0}>
                    {isRegister ? "Create an account" : "Log in"}{" "}
                </Heading>
                <Stack spacing={2}>
                    {isRegister ? <RegisterForm /> : <LoginForm />}
                </Stack>
                <Stack>
                    <Button colorScheme="blue" margin="2rem 0 2rem 0">
                        {isRegister ? "Sign up" : "Log in"}
                    </Button>
                </Stack>
            </FormControl>
            <Text>
                {isRegister
                    ? "Do you already have an account? "
                    : "You do not have an account?"}{" "}
                <CustomButtom onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? "log in" : "Sign up"}{" "}
                </CustomButtom>
            </Text>
        </Box>
    );
}

export default AuthUI;

const Text = styled.div`
  font-size: 1.2rem;
`;
const CustomButtom = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
  color: cornflowerblue;
  &:hover {
    text-decoration-line: underline;
  }
`;
