type TInputProps = {
  type: string;
  placeholder: string;
} & React.ComponentProps<"input">;

const Input = (props: TInputProps) => {
  const { ...restProps } = props;
  return (
    <>
      <input
        {...restProps}
        className="w-[325px] h-11 rounded-lg border border-[#4f4f4f] py-[13.5px] px-4 text-sm placeholder:text-[#acacac]"
      />
    </>
  );
};
export default Input;
