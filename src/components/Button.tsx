import { Buttontype } from '../type/type';

function ButtonCustom({ bg, children, onClick, type, width }: Buttontype) {
  return (
    <button
      style={{
        backgroundColor: bg,
        width: width,
        border: 'none',
        borderColor: '#EAEAEA',
        color: 'white',
        padding: '.5rem',
        borderRadius: '.3rem',
        fontSize:"1rem"
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
export default ButtonCustom;
