// import React from "react";
// import { Button } from "@mui/material";
// import { useForm } from "react-hook-form";
// import InputField from "../InputField";
// import { rules } from "@/rules/formRules";
// const DynamicForm = () => {
//   const { handleSubmit, control } = useForm({
//     defaultValues: {
        
//     },
//   });

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <form
//       noValidate
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex justify-center items-center h-dvh"
//     >
//       <InputField
//         type="text"
//         placeholder="enter your firstname "
//         control={control}
//         rules={rules}
//         label="First Name"
//         name={`firstName`}
//       />
//       <InputField
//         type="text"
//         placeholder="enter your lastname "
//         control={control}
//         rules={rules}
//         label="Last Name"
//         name={`lastName`}
//       />

//       <Button type="submit">submit</Button>
//     </form>
//   );
// };

// export default DynamicForm;

import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { rules } from "@/rules/formRules";

const DynamicForm = ({ res }: { res: any[] }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center h-dvh"
    >
      {res.map((item, index) => (
        <React.Fragment key={index}>
          {[...Array(item.count)].map((_, innerIndex) => (
            <InputField
              key={innerIndex}
              type="text"
              placeholder={`Enter your ${item.type}'s name`}
              control={control}
              rules={rules}
              label={`${item.type} Name`}
              name={`field-${index}-${innerIndex}`}
            />
          ))}
        </React.Fragment>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default DynamicForm;


