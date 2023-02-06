import "./css/Login.css";
import { useForm } from "@mantine/form";
import { Button, Group, TextInput, Box, PasswordInput } from "@mantine/core";
import { useNavigate } from "react-router";
import { loginThunk } from "./redux/AuthSlice";
import { useAppDispatch } from "../../redux/Hook";
import LoginFooter from "../../components/LoginFooter";

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
      <div className="loginContainer">
        <div className="loginFormContainer">
          <div className="loginLogo">Logo</div>
          <Box style={{ width: "65%" }} component="form" onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput id="email" label="Email" placeholder="Email" withAsterisk mt="md" {...form.getInputProps("email")} />

            <PasswordInput label="Password" placeholder="Password" withAsterisk mt="md" {...form.getInputProps("password")} />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </Box>
        </div>

        <LoginFooter />
      </div>
    </>
  );
}
