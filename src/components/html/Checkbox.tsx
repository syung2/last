import { useId } from "react";

const Checkbox = ({ children }: { children: React.ReactNode }) => {
  const uuid = useId();
  return (
    <>
      <div className="flex items-center gap-2 [&>input:checked+label:before]:content-['✔'] [&>input:checked+label:before]:text-white [&>input:checked+label:before]:justify-center [&>input:checked+label:before]:items-center [&>input:checked+label:before]:text-sm">
        <input type="checkbox" id={uuid} className="hidden" />
        <label
          htmlFor={uuid}
          className="w-5 h-5 bg-[#4f4f4f] rounded-[5px] inline-block"
        ></label>
        {children}
      </div>
    </>
  );
};
export default Checkbox;
