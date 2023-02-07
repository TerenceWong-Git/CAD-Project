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

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginFormContainer">
          <div className="loginLogo">
            <img height={150} src={`/uploads/smallLogo.png`} alt={""} />
          </div>
          <Box
            style={{ width: "65%" }}
            component="form"
            onSubmit={form.onSubmit(handleSubmit)}
          >
            <TextInput
              id="email"
              label="電郵"
              placeholder="Email"
              withAsterisk
              mt="md"
              {...form.getInputProps("email")}
            />

            <PasswordInput
              label="密碼"
              placeholder="Password"
              withAsterisk
              mt="md"
              {...form.getInputProps("password")}
            />

            <Group position="center" mt="md">
              <Button className="login-submit-button" type="submit">
                登入
              </Button>
            </Group>
          </Box>
          <div className="goRegister">尚未註冊?</div>
          <Button
            className="login-submit-button"
            type="submit"
            onClick={goRegister}
          >
            點此創建帳號
          </Button>
        </div>

        <LoginFooter />
      </div>
    </>
  );
}
