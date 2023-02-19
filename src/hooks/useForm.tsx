import {useState} from 'react';

export const useForm = <T extends Object>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onChange,
    onResetForm,
  };
};
