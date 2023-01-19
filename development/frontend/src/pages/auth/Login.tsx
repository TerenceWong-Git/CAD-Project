import { useForm, isEmail, isInRange, hasLength, matches } from "@mantine/form";
import { Button, Group, TextInput, NumberInput, Box, Select } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router";

export default function Login() {
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

    const path = process.env.REACT_APP_BACKEND_URL;
    const res = await fetch(`${path}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(registrationInfo),
    });

    const result = await res.json();
    if (res.status == 200) {
      console.log("You login successfully");
      navigate("/map");
    } else {
      console.log(`${result.message}`);
    }
  };

  return (
    <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput id="email" label="Email" placeholder="Email" withAsterisk mt="md" {...form.getInputProps("email")} />
      {/* <TextInput id="username" label="Username" placeholder="Username" withAsterisk mt="md" {...form.getInputProps("username")} /> */}
      <TextInput id="password" label="Password" placeholder="Password" withAsterisk mt="md" {...form.getInputProps("password")} />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
}
