interface Props {
  type: string;
  placeholder: string;
  errors: any;
  register: any;
}

const Input = ({ type, placeholder, errors, register }: Props) => {
  return ( 
    <>
      <input 
        className={`border-b-2 py-1 mb-4 w-full font-semibold text-base text-branco focus:border-azul focus:outline-none ${
          errors ? "border-error focus:border-error" : "border-branco"
        }`}
        placeholder={placeholder}
        type={type} 
        {...register}
      />
    </>
   );
}
 
export default Input;