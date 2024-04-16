import React from "react";
import { Select, MenuItem, Box } from "@mui/material";
import { Controller } from "react-hook-form";

type INPUTTYPE = {
  name: string;
  control: any;
  rules: any;
  label: string;
};

export const SelectField = ({ name, control, rules, label }: INPUTTYPE) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <Select
              className="w-[200px]"
              onChange={onChange}
              label={label}
              value={value || ""}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={10}>ten</MenuItem>
              <MenuItem value={20}>twenty</MenuItem>
              <MenuItem value={30}>thirty</MenuItem>
              <MenuItem value={40}>Forty</MenuItem>
            </Select>
            {error && <p>{error?.message}</p>}
          </>
        );
      }}
    />
  );
};
