import { useForm } from "@mantine/form";
import { Button, Group, TextInput, Box } from "@mantine/core";
import { useNavigate } from "react-router";
import { loginThunk } from "./redux/authSlice";
import { useAppDispatch } from "../../redux/hook";
import Header from "../../components/Header";

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
      .then(() => navigate("/"))
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Header />
      <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput id="email" label="Email" placeholder="Email" withAsterisk mt="md" {...form.getInputProps("email")} />
        {/* <TextInput id="username" label="Username" placeholder="Username" withAsterisk mt="md" {...form.getInputProps("username")} /> */}
        <TextInput id="password" label="Password" placeholder="Password" withAsterisk mt="md" {...form.getInputProps("password")} />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Box>
    </>
  );
}
