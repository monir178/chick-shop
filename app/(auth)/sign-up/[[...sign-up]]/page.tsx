import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex items-center my-20 md:my-0 justify-center">
      <SignUp />
    </div>
  );
}
