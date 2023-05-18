import { Buttontype } from '../type/type';

function ButtonCustom({ bg, children, onClick, type, width }: Buttontype) {
  return (
    <button
      style={{ backgroundColor: bg, width: width }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
export default ButtonCustom;
