import { Field } from "payload/types";

export const backgroundColor: Field = {
  name: 'bgColor',
  type: 'select',
  defaultValue: 'white',
  options: [
    {
      label: 'White',
      value: 'white',
    },
    {
      label: 'Black',
      value: 'black',
    }
  ]
}