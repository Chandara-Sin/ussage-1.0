import Credential from "@/components/Auth/Credential";
import Google from "@/components/Auth/Google";
import { verifyAuth } from "@/libs/auth";
import { getProviders } from "next-auth/react";

const SignInPage = async () => {
  const providers = await getProviders();
  await verifyAuth();
  return (
    <main className="bg-white">
      <section className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
        <Credential />
        <Google providers={providers} />
      </section>
    </main>
  );
};

export default SignInPage;
