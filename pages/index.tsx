import type { GetServerSideProps, NextPage } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StatePresenter } from "../components/StatePresenter";
import { readFileSync } from "fs";

const formScheme = z.object({
  email: z.string(),
  password: z.string(),
});
export const getServerSideProps: GetServerSideProps = async () => {
  readFileSync("./pages/index.tsx");
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formScheme),
  });
  return (
    <main className="h-screen container mx-auto flex flex-col items-center justify-center space-y-8 px-8">
      <header>
        <h1 className="text-slate-900 text-4xl font-bold mb-4">
          Reproduce SSR Cognito authentication failure app
        </h1>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-8 w-full">
        <form
          action="#"
          method="POST"
          className="col-start-1 md:col-start-4 col-span-2"
        >
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="password"
                      name="password"
                      id="company-website"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-gray-100 sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <StatePresenter /> */}
    </main>
  );
};

export default Home;
