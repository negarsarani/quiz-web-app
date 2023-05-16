export type Buttontype = {
  bg: string;
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
  type?: string;
  width?: string;
};
export type selectType = {
  label:string
  optionsArr:any,
  register:any
  showError:string
  name:string
  errors:any
  labelText:string
  control:any
 

};
export type text = string;
export type Inputs = {
  number: number;
  difficulty: string;
  category: string;
};
