import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from "@mantine/form";
import { Button, Group, TextInput, NumberInput, Box, Select, PasswordInput } from "@mantine/core";

export default function Register() {
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      gender: "",
      district: "",
      yearBirth: "",
      monthBirth: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      // username: hasLength({ min: 8, max: 16 }, "Username must be 8-16 characters long"),
      // password: (value) =>
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value)
      //     ? null
      //     : "Password must include at least one capital letter, one small letter, number and special character",
      // phoneNumber: isInRange({ min: 10000000, max: 99999999 }, "Phone number must be 8 numbers long"),
      // yearBirth: isInRange({ min: 1000, max: 9999 }, "Birth Year must be 4 numbers long"),
      // monthBirth: isInRange({ min: 1, max: 12 }, "Birth Month must be 1 to 12"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    console.log("You clicked submit.", values);

    // const data = {
    //   email: values.email,
    //   username: values.username,
    //   password: values.password,
    //   phoneNumber: values.phoneNumber,
    //   gender: values.gender,
    //   district: values.district,
    //   yearBirth: values.yearBirth,
    //   monthBirth: values.monthBirth,
    // };
    // await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput id="email" label="Email" placeholder="Email" withAsterisk mt="md" {...form.getInputProps("email")} />
      <TextInput id="username" label="Username" placeholder="Username" withAsterisk mt="md" {...form.getInputProps("username")} />
      <TextInput id="password" label="Password" placeholder="Password" withAsterisk mt="md" {...form.getInputProps("password")} />
      <TextInput id="phoneNumber" label="Phone Number" placeholder="Phone Number" withAsterisk mt="md" {...form.getInputProps("phoneNumber")} />
      <Select id="gender" data={["Male", "Female"]} placeholder="Gender" label="Gender" withAsterisk mt="md" {...form.getInputProps("gender")} />
      <Select
        id="district"
        data={[
          { value: "Islands", label: "Islands" },
          { value: "Kwai_tsing", label: "Kwai Tsing" },
          { value: "North", label: "North" },
          { value: "Sai_kung", label: "Sai Kung" },
          { value: "Sha_tin", label: "Sha Tin" },
          { value: "Tai_po", label: "Tai Po" },
          { value: "Tsuen_wan", label: "Tsuen Wan" },
          { value: "Tuen_mun", label: "Tuen Mun" },
          { value: "Yuen_long", label: "Yuen Long" },
          { value: "Kowloon_city", label: "Kowloon City" },
          { value: "Kwun_tong", label: "Kwun Tong" },
          { value: "Sham_shui_po", label: "Sham Shui Po" },
          { value: "Wong_tai_sin", label: "Wong Tai Sin" },
          { value: "Yau_tsim_mong", label: "Yau Tsim Mong" },
          { value: "Central_and_western", label: "Central & western" },
          { value: "Eastern", label: "Eastern" },
          { value: "Southern", label: "Southern" },
          { value: "Wan_chai", label: "Wan Chai" },
        ]}
        placeholder="District"
        label="District"
        withAsterisk
        mt="md"
        {...form.getInputProps("district")}
      />
      <TextInput id="yearBirth" label="Birth Year" placeholder="Birth Year" withAsterisk mt="md" {...form.getInputProps("yearBirth")} />
      <TextInput id="monthBirth" label="Birth Month" placeholder="Birth Month" withAsterisk mt="md" {...form.getInputProps("monthBirth")} />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
}
