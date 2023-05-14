export type Buttontype = {
  bg: string;
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
  type?: string;
  width?: string;
};
export type AutoCompleteType = {
  label: string;
  labelText: string;
  optionsArr: string[];
  errors: any;
  register:any;
  name:string
  control:any
};
export type text = string;
export type Inputs = {
  number: number;
  difficulty: string;
  category: string;
};
