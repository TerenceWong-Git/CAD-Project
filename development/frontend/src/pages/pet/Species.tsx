import { Box, Button, Group, Radio, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Species() {
  const [loadPetSpecies, setLoadPetSpecies] = useState<any[]>([]);
  const [isTriggered, setIsTriggered] = useState<number>(0);
  const [value, setValue] = useState<any>(null);

  const form = useForm({
    initialValues: {
      species: null,
    },
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/pet/species`
      );
      const json = await res.json();

      setLoadPetSpecies(json);
    }
    fetchData();
  }, []);

  ///////////////////////   Cat Species   ///////////////////////
  const catFilter = loadPetSpecies.filter((item) => {
    return item.id === 1;
  });
  console.log("catFilter: ", catFilter);
  const catIdFilter = catFilter.map((item) => item.id);
  console.log("catIdFilter: ", catIdFilter);
  const catNameFilter = catFilter.map((item) => item.chiSpecies);
  console.log("catNameFilter: ", catNameFilter);

  const catSpeciesFilter = loadPetSpecies.filter((item) => {
    return item.familyId === 1;
  });

  console.log("catSpeciesFilter: ", catSpeciesFilter);
  const catSubSpeciesFilter = catSpeciesFilter.map((item) => item.chiSpecies);
  console.log("catSubSpeciesFilter: ", catSubSpeciesFilter);
  ///////////////////////   Cat Species   ///////////////////////

  ///////////////////////   Dog Species   ///////////////////////
  const dogFilter = loadPetSpecies.filter((item) => {
    return item.id === 2;
  });
  const dogIdFilter = dogFilter.map((item) => item.id);
  const dogNameFilter = dogFilter.map((item) => item.chiSpecies);
  const dogSpeciesFilter = loadPetSpecies.filter((item) => {
    return item.familyId === 2;
  });
  const dogSubSpeciesFilter = dogSpeciesFilter.map((item) => item.chiSpecies);
  ///////////////////////   Dog Species   ///////////////////////

  //   const handleSubmit = async (values: typeof form.values) => {
  //     const registrationInfo = {
  //       email: values.email,
  //       username: values.username,
  //       password: values.password,
  //       phoneNumber: values.phoneNumber,
  //       gender: values.gender,
  //       district: values.district,
  //       yearBirth: values.yearBirth,
  //       monthBirth: values.monthBirth,
  //       species: values.species,
  //       species2: values.species2,
  //     };

  //     const path = process.env.REACT_APP_BACKEND_URL;
  //     const res = await fetch(`${path}/pet/species`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json; charset=utf-8",
  //       },
  //       body: JSON.stringify(registrationInfo),
  //     });

  //     console.log(res.status);
  //     const result = await res.json();
  //     console.log(result);
  //     if (res.status === 201) {
  //       console.log("You create account successfully");
  //       navigate("/");
  //     } else {
  //       console.log(`${result.message}`);
  //     }
  //   };

  return (
    <div>
      <Box
        component="form"
        maw={400}
        mx="auto"
        // onSubmit={form.onSubmit((values) => console.log(values))}
        >
        <div>
          <Radio.Group value={value} onChange={setValue}>
            {/* <Radio value={catIdFilter} label={catNameFilter} onClick={() => setIsTriggered(1)} />
            <Radio value={dogIdFilter} label={dogNameFilter} onClick={() => setIsTriggered(2)} /> */}
            <Radio
              value={'1'}
              label={catNameFilter}
              onClick={() => setIsTriggered(1)}
            />
            <Radio
              value={'2'}
              label={dogNameFilter}
              onClick={() => setIsTriggered(2)}
            />
          </Radio.Group>
        </div>

        <div>{isTriggered === 0 && <div></div>}</div>

        <div>
          {isTriggered === 1 && (
            <div>
              <Select
                data={catSubSpeciesFilter}
                {...form.getInputProps("species")}
              />
            </div>
          )}
        </div>

        <div>
          {isTriggered === 2 && (
            <div>
              <Select
                data={dogSubSpeciesFilter}
                {...form.getInputProps("species")}
              />
            </div>
          )}
        </div>

        <div>
          <Group position="right" mt="md">
            {/* <Button type="submit">Submit</Button> */}
          </Group>
        </div>
      </Box>
    </div>
  );
}
