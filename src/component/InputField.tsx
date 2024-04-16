import React, { FC } from "react";
import  {TextField} from "@mui/material"
import { Controller } from "react-hook-form";
type INPUTTYPE = {
  name: string;
  control: any;
  rules: any;
  label: string;
  placeholder: string;
  type: string;
};

const InputField: FC<INPUTTYPE> = ({
  name,
  control,
  rules,
  label,
  placeholder,
  type,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange },fieldState:{error} }) => {
        return (
          <div>
            
            <TextField type={type} label={label} onChange={onChange} placeholder={placeholder} helperText={error?.message} error={!!error}/>
          </div>
        );
      }}
    />
  );
};

export default InputField;
