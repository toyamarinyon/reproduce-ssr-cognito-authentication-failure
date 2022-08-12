import { envsafe, str } from "envsafe";

export const env = envsafe({
  NEXT_PUBLIC_AMPLIFY_CONFIGURATION_STYLE: str({
    // because of how nextjs deals with transpiling public env vars
    // we have to put it in as `input`
    input: process.env.NEXT_PUBLIC_AMPLIFY_CONFIGURATION_STYLE,
    choices: ["top-level", "scoped"],
  }),
});
