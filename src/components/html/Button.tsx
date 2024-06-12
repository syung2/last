type TButton = {
  style?: string;
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
} & React.ComponentProps<"button">;
const Button = (props: TButton) => {
  const {
    children,
    style = `w-[325px] text-white bg-[#4f4f4f]`,
    ...restProps
  } = props;
  return (
    <>
      <button
        {...restProps}
        className={`h-11 rounded-lg cursor-pointer text-sm ${style}`}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
