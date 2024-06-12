"use client";
import Button from "@/components/html/Button";
import Checkbox from "@/components/html/Checkbox";
import Input from "@/components/html/Input";
import { register } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

export default function Register() {
  const router = useRouter();
  const [formState, formAction] = useFormState(register, "");

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="bg-white border border-[#d1d1d1] py-10 px-[25px] rounded-lg max-w-[375px]">
          <h1 className="text-xl font-bold text-[#4b4b4b] mb-[10px]">
            Register into App
          </h1>
          <p className="text-sm text-[#4b4b4b] mb-5">
            Please enter your details to continue.
          </p>
          <form action={formAction} className="flex flex-col gap-4">
            <Input type="text" name="name" placeholder="Enter Your Name" />
            <Input type="text" name="email" placeholder="someone@exmaple.com" />
            <Input
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
            <select
              name="role"
              className="w-[325px] h-11 rounded-lg border border-[#4f4f4f] py-[13.5px] px-4 text-sm placeholder:text-[#acacac]"
              defaultValue={"user"}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <Checkbox>
              <span className="text-sm text-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and
                <em className="not-italic font-bold">policies.</em>
              </span>
            </Checkbox>
            <Button type="submit">Login</Button>
            <Button
              type="button"
              style="bg-white border border-[#4f4f4f]"
              onClick={() => {
                router.push("/login");
              }}
            >
              Go To Login
            </Button>
          </form>
          {formState && <p>{formState}</p>}
        </div>
      </div>
    </>
  );
}
