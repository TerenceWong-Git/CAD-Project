import { useForm } from "@mantine/form";
import { Button, Group, TextInput, Box, PasswordInput } from "@mantine/core";
import { useNavigate } from "react-router";
import { loginThunk } from "./redux/AuthSlice";
import { useAppDispatch } from "../../redux/Hook";
import Footer from "../../components/Footer";

// ask ask login fail alert
export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    const registrationInfo = {
      email: values.email,
      password: values.password,
    };

    dispatch(loginThunk(registrationInfo))
      .unwrap()
      .then(() => navigate("/landing"))
      .catch((err) => {
        console.log("err: ", err);
        alert("Unsuccessful login, please check your email and password!");
      });
  };

  return (
    <>
      <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput id="email" label="Email" placeholder="Email" withAsterisk mt="md" {...form.getInputProps("email")} />
        {/* <TextInput id="username" label="Username" placeholder="Username" withAsterisk mt="md" {...form.getInputProps("username")} /> */}
        {/* <TextInput id="password" label="Password" placeholder="Password" withAsterisk mt="md" {...form.getInputProps("password")} /> */}
        <PasswordInput placeholder="Password" label="Password" withAsterisk {...form.getInputProps("password")} />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Box>
      <Footer />
    </>
  );
}
