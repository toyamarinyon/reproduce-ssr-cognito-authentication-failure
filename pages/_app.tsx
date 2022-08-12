import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import {
  configWithScopedConfiguration,
  configWithTopLevelConfiguration,
} from "../aws";
import { env } from "../env";

if (env.NEXT_PUBLIC_AMPLIFY_CONFIGURATION_STYLE === "top-level") {
  console.log("Using top level configuration");
  Amplify.configure({ ...configWithTopLevelConfiguration });
} else {
  console.log("Using scoped configuration");
  Amplify.configure({ ...configWithScopedConfiguration });
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
