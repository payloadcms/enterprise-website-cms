import { Field } from "payload/types";

export const backgroundColor: Field = {
  name: 'backgroundColor',
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