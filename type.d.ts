import { PropsWithChildren } from 'react';
import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

export type FieldValue = {
  value: string;
  label: string;
};

export interface FieldProps extends PropsWithChildren {
  title: string;
  errorMessage?: string;
}

export type FormInputs = {
  department: string;
  reason: string;
  salary: string;
  introduction: string;
  dreams: string;
  email: string;
};

export type RadioProps = {
  name: Path<FormInputs>;
  values: FieldValue[];
  register: UseFormRegister<FormInputs>;
  options: RegisterOptions;
};
