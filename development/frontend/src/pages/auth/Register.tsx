import { useForm, isEmail, isInRange, hasLength, matches } from "@mantine/form";
import { Button, Group, TextInput, NumberInput, Box, Select } from "@mantine/core";
import { useNavigate } from "react-router";
import "./css/Register.css"

export default function Register() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "testpost2@gmail.com",
      username: "testpost2",
      password: "@Tecky1234",
      phoneNumber: 11223344,
      gender: "Male",
      district: "Sha_tin",
      yearBirth: 1991,
      monthBirth: 1,
    },

    validate: {
      email: isEmail("Invalid email"),
      username: hasLength({ min: 8, max: 16 }, "Username must be 8-16 characters long"),
      password: matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must include 8 characters, at least one capital letter, one small letter, number and special character"
      ),
      phoneNumber: isInRange({ min: 10000000, max: 99999999 }, "Phone number must be 8 numbers long"),
      yearBirth: isInRange({ min: 1000, max: 9999 }, "Birth Year must be 4 numbers long"),
      monthBirth: isInRange({ min: 1, max: 12 }, "Birth Month must be 1 to 12"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    const registrationInfo = {
      email: values.email,
      username: values.username,
      password: values.password,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
      district: values.district,
      yearBirth: values.yearBirth,
      monthBirth: values.monthBirth,
    };
    console.log(values.gender);
    const path = process.env.REACT_APP_BACKEND_URL;
    const res = await fetch(`${path}/user/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(registrationInfo),
    });

    console.log(res.status);
    const result = await res.json();
    console.log(result);
    if (res.status === 201) {
      alert("You create account successfully");
      navigate("/login");
    } else {
      alert(`${result.message}`);
    }
  };

  return (
    <div className="register-body">
      <div className="register-title">註冊</div>
      <div className="register-form" >
    <Box component="form" maw={400} onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput id="email" label="電郵" placeholder="Email" withAsterisk mt="md" {...form.getInputProps("email")} />
      <TextInput id="username" label="用戶名稱" placeholder="Username" withAsterisk mt="md" {...form.getInputProps("username")} />
      <TextInput id="password" label="密碼" placeholder="Password" withAsterisk mt="md" {...form.getInputProps("password")} />
      <NumberInput
        hideControls
        id="phoneNumber"
        label="電話號碼"
        placeholder="Phone Number"
        withAsterisk
        mt="md"
        {...form.getInputProps("phoneNumber")}
      />
      <Select id="gender" data={["Male", "Female"]} placeholder="Gender" label="性別" withAsterisk mt="md" {...form.getInputProps("gender")} />
      <Select
        id="district"
        data={[
          { value: "Islands", label: "Islands" },
          { value: "Kwai_Tsing", label: "Kwai Tsing" },
          { value: "North", label: "North" },
          { value: "Sai_Kung", label: "Sai Kung" },
          { value: "Sha_Tin", label: "Sha Tin" },
          { value: "Tai_Po", label: "Tai Po" },
          { value: "Tsuen_Wan", label: "Tsuen Wan" },
          { value: "Tuen_Mun", label: "Tuen Mun" },
          { value: "Yuen_Long", label: "Yuen Long" },
          { value: "Kowloon_City", label: "Kowloon City" },
          { value: "Kwun_Tong", label: "Kwun Tong" },
          { value: "Sham_Shui_Po", label: "Sham Shui Po" },
          { value: "Wong_Tai_Sin", label: "Wong Tai Sin" },
          { value: "Yau_Tsim_Mong", label: "Yau Tsim Mong" },
          { value: "Central_and_Western", label: "Central & western" },
          { value: "Eastern", label: "Eastern" },
          { value: "Southern", label: "Southern" },
          { value: "Wan_Chai", label: "Wan Chai" },
        ]}
        placeholder="District"
        label="地區"
        withAsterisk
        mt="md"
        {...form.getInputProps("district")}
      />
      <NumberInput
        hideControls
        id="yearBirth"
        label="生日年份"
        placeholder="Birth Year"
        withAsterisk
        mt="md"
        {...form.getInputProps("yearBirth")}
      />
      <NumberInput
        hideControls
        id="monthBirth"
        label="生日月份"
        placeholder="Birth Month"
        withAsterisk
        mt="md"
        {...form.getInputProps("monthBirth")}
      />

      <Group position="center" mt="md">
        <Button type="submit" className="register-submit-button">提交</Button>
      </Group>
    </Box>
    </div>
    </div>
  );
}
