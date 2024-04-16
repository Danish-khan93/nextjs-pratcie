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

// import React from "react";
// import { Box, Button } from "@mui/material";
// import { useForm } from "react-hook-form";
// import InputField from "../InputField";
// import { rules } from "@/rules/formRules";
// import { ClassNames } from "@emotion/react";

// const DynamicForm = ({ res }: { res: any[] }) => {
//   const { handleSubmit, control } = useForm({
//     defaultValues: {},
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
//       {res.map((item, index) => (
//         <React.Fragment key={index}>
//           {[...Array(item.count)].map((_, innerIndex) => (
//             < Box className="flex flex-col gap-9">
//               <InputField
//                 key={innerIndex}
//                 type="text"
//                 placeholder={`Enter your last ${item.type}'s name`}
//                 control={control}
//                 rules={rules}
//                 label={`${item.type}first Name`}
//                 name={`first-${index}-${innerIndex}`}
//               />
//               <InputField
//                 key={   `innerIndex-${index}`}
//                 type="text"
//                 placeholder={`Enter your last ${item.type}'s name`}
//                 control={control}
//                 rules={rules}
//                 label={`${item.type}last Name`}
//                 name={`last-${index}-${innerIndex}`}
//               />
//             </Box>
//           ))}
//         </React.Fragment>
//       ))}
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// export default DynamicForm;


import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import InputField from "../InputField";
import { rules } from "@/rules/formRules";

const DynamicForm = ({ res }: { res: any[] }) => {
  const { control, handleSubmit } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "dynamicFields",
  });

  useEffect(() => {
    // Initialize form with fields based on res array
    res.forEach(({ count, type }) => {
      for (let i = 0; i < count; i++) {
        append({ type, name: `${type}-${i}`, label: `${type} Name` });
      }
    });
  }, [res, append]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center h-dvh"
    >
      {fields.map((field, index) => (
        <InputField
          key={field.id}
          type="text"
          placeholder={`Enter your first name`}
          control={control}
          rules={rules}
          label={"First Name"}
          name={`dynamicFields[${index}].name`}
        />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default DynamicForm;



