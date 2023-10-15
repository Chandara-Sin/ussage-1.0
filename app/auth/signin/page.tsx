import Credential from "@/app/auth/signin/components/credential";
import Google from "@/app/auth/signin/components/google";
import { verifyAuth } from "@/libs/auth";

const SignInPage = async () => {
  await verifyAuth();
  return (
    <main className="bg-white">
      <section className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
        <Credential />
        <Google />
      </section>
    </main>
  );
};

export default SignInPage;
