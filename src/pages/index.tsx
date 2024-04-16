import Image from "next/image";
import { Button,Box } from "@mui/material";
import { Inter } from "next/font/google";
import { useForm, useFieldArray } from "react-hook-form";
const inter = Inter({ subsets: ["latin"] });
import InputField from "@/component/InputField";
import { rules } from "@/rules/formRules";
import DataField from "@/component/DataField";
import { SelectField } from "@/component/SelectField";

type FORMDATA = {
  nameField: { firstName: string; lastName: string }[];
  phone: string;
  date: null;
  age: number;
};

function Home() {
  const { control, handleSubmit } = useForm<FORMDATA>({
    defaultValues: {
      nameField: [{ firstName: "", lastName: "" }],
      phone: "",
      date: null,
      age: 0,
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: "nameField",
      control,
    }
  );

  const onSubmit = (data: FORMDATA) => {
    console.log(data);
    console.log("danish");
    // @ts-ignore
    console.log(typeof data.date.$d.toLocaleDateString());
  };
  return (
    <div className="flex justify-center items-center h-dvh">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {fields.map((items, index) => {
          return (
            <div key={index} className="flex">
              <InputField
                type="text"
                placeholder="enter your firstname "
                control={control}
                rules={rules}
                label="First Name"
                name={`nameField.${index}.firstName`}
              />
              <InputField
                type="text"
                placeholder="enter your lastname "
                control={control}
                rules={rules}
                label="Last Name"
                name={`nameField.${index}.lastName`}
              />
              {}
              <Button
                className="bg-[#000] text-[#fff] hover:bg-[#000] hover:text-[#fff]"
                onClick={() => {
                  remove(index);
                }}
              >
                delete
              </Button>
              <Button
                className="bg-[#000] text-[#fff] hover:bg-[#000] hover:text-[#fff]"
                onClick={() => {
                  append({ firstName: "", lastName: "" });
                }}
              >
                append
              </Button>
            </div>
          );
        })}
        <Box className="flex flex-col gap-10">
          <DataField control={control} name="date" />
          <InputField
            name="phone"
            control={control}
            rules={rules}
            placeholder="enter number"
            type="number"
            label="Phone Number"
          />
          <SelectField control={control} label="Age" name="age" rules={rules} />
        </Box>
        <Button
          className="bg-[#000] text-[#fff] hover:bg-[#000] hover:text-[#fff]"
          type="submit"
        >
          submit
        </Button>
      </form>
    </div>
  );
}

export default Home;
