import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { StatePresenter } from "../components/StatePresenter";
import { Auth, withSSRContext } from "aws-amplify";
import { useEffect, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);
  try {
    await Auth.currentSession();
    return {
      props: {
        isSignedInSSR: true,
      },
    };
  } catch {
    return {
      props: {
        isSignedInSSR: false,
      },
    };
  }
};

const Home: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>();
  useEffect(() => {
    Auth.currentSession()
      .then(() => setIsSignedIn(true))
      .catch(() => {
        setIsSignedIn(false);
      });
  }, []);
  const router = useRouter();
  if (isSignedIn == null) {
    return <div></div>;
  }
  return (
    <main className="h-screen container mx-auto flex flex-col items-center justify-center space-y-8 px-8">
      <header>
        <h1 className="text-slate-900 text-4xl font-bold mb-4">
          Reproduce SSR Cognito authentication failure app
        </h1>
      </header>
      {isSignedIn ? (
        <>
          <StatePresenter
            getSessionOnClient="success"
            getSessionOnSSRResult={props.isSignedInSSR ? "success" : "failure"}
          />
          <div className="text-left w-full">
            <button
              type="submit"
              onClick={async () => {
                await Auth.signOut();
                router.reload();
              }}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <LoginForm />
      )}
    </main>
  );
};

export default Home;
