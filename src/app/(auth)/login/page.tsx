import LoginForm from "@/components/LoginForm";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getSession();
  const user = session;
  console.log(user);
  if (user) redirect("/");
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="bg-white border border-[#d1d1d1] py-10 px-[25px] rounded-lg max-w-[375px]">
          <h1 className="text-xl font-bold text-[#4b4b4b] mb-[10px]">
            Login into App
          </h1>
          <p className="text-sm text-[#4b4b4b] mb-5">
            Please enter your details to continue.
          </p>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
