import { useEffect, useState } from "react";

type GetSessionResult = "success" | "failure";
interface Props {
  getSessionOnSSRResult: GetSessionResult;
  getSessionOnClient: GetSessionResult;
}
export const StatePresenter = ({
  getSessionOnClient,
  getSessionOnSSRResult,
}: Props): JSX.Element => {
  const [cookies, setCookies] = useState<string[][]>([]);
  useEffect(() => {
    setCookies(document.cookie.split(";").map((cookie) => cookie.split("=")));
  }, []);

  return (
    <>
      <section className="w-full">
        <header className="text-slate-900 text-xl font-bold mb-4">
          Current States
        </header>

        <table className="table-auto border-collapse border border-slate-400 px-4">
          <thead className="bg-slate-50">
            <tr>
              <th className="border border-slate-300 text-slate-900 px-4">
                Amplify Auth Configuration Style
              </th>
              <th className="border border-slate-300 text-slate-900 px-4">
                getSession on SSR
              </th>
              <th className="border border-slate-300 text-slate-900 px-4">
                getSession on Client
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 text-slate-900 px-4 py-2">
                Top Level Configuration
              </td>
              <td className="border border-slate-300 text-slate-900 px-4 py-2">
                {getSessionOnSSRResult}
              </td>
              <td className="border border-slate-300 text-slate-900 px-4 py-2">
                {getSessionOnClient}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="w-full">
        <header className="text-slate-900 text-xl font-bold mb-4">
          Current Cookies
        </header>
        <table className="table-auto border-collapse border border-slate-400 px-4 w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="border border-slate-300 text-slate-900 px-4">
                Key
              </th>
              <th className="border border-slate-300 text-slate-900 px-4">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {cookies.map(([key, value]) => (
              <tr key={key}>
                <td className="border border-slate-300 text-slate-900 px-4 py-2">
                  {key}
                </td>
                <td className="border border-slate-300 text-slate-900 px-4 py-2 overflow-hidden relative">
                  {/* <div className="absolute inset-0"> */}
                  {value.substring(0, 15)}...
                  {/* {value} */}
                  {/* </div> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
