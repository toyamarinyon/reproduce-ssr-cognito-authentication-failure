import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { env } from "../env";

const formScheme = z.object({
  email: z.string(),
  password: z.string(),
});
export const LoginForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
  });
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 xl:grid-cols-8 w-full">
      <form
        action="#"
        method="POST"
        className="col-start-1 xl:col-start-4 col-span-2"
        onSubmit={handleSubmit(async ({ email, password }) => {
          await Auth.signIn(email, password);
          router.reload();
        })}
      >
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    {...register("email")}
                    type="text"
                    id="email"
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
                    {...register("password")}
                    id="password"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
          {env.NEXT_PUBLIC_AMPLIFY_CONFIGURATION_STYLE === "top-level" && (
            <div className="px-4 py-3 border-t border-gray-100 bg-indigo-50 text-indigo-900">
              <p>
                Current configuration is Top level configuration so the getting
                session on SSR will be success after login.
              </p>
            </div>
          )}
          {env.NEXT_PUBLIC_AMPLIFY_CONFIGURATION_STYLE === "scoped" && (
            <div className="px-4 py-3 border-t border-gray-100 bg-red-50 text-red-900">
              <p>
                Current configuration is Scoped configuration so the getting
                session on SSR will be failure after login.
              </p>
            </div>
          )}
          <div className="px-4 py-6 border-t border-gray-100 sm:px-6">
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
  );
};
