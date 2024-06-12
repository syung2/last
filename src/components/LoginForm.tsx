"use client";

import Button from "@/components/html/Button";
import Checkbox from "@/components/html/Checkbox";
import Input from "@/components/html/Input";
import { githubLogin, googleLogin, login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const router = useRouter();
  const [formState, formAction] = useFormState(login, undefined);

  return (
    <>
      <form action={formAction} className="flex flex-col gap-4">
        <Input type="text" name="email" placeholder="Enter Your Name" />
        <Input
          type="password"
          name="password"
          placeholder="Enter Your Password"
        />
        <Checkbox>
          <span className="text-sm text-[#4f4f4f]">
            I agree with <em className="not-italic font-bold">terms</em> and
            <em className="not-italic font-bold">policies.</em>
          </span>
        </Checkbox>
        <Button type="submit">Login</Button>
        <Button
          type="button"
          onClick={() => {
            googleLogin();
          }}
        >
          Google
        </Button>
        <Button
          type="button"
          onClick={() => {
            githubLogin();
          }}
        >
          Github
        </Button>
        <Button
          type="button"
          style="bg-white border border-[#4f4f4f]"
          onClick={() => router.push("/register")}
        >
          Go To Sign up
        </Button>
      </form>
      {formState && <p>{formState}</p>}
    </>
  );
}
