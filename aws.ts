export const configWithTopLevelConfiguration = {
  aws_project_region:
    process.env.NEXT_PUBLIC_APP_AUTH_REGION || "ap-northeast-1",
  aws_cognito_region:
    process.env.NEXT_PUBLIC_APP_AUTH_REGION || "ap-northeast-1",
  aws_user_pools_id:
    process.env.NEXT_PUBLIC_APP_AUTH_USER_POOL_ID || "ap-northeast-1_xxxxxxxxx",
  aws_user_pools_web_client_id:
    process.env.NEXT_PUBLIC_APP_AUTH_USER_POOL_WEB_CLIENT_ID ||
    "xxxxxxxxxxxxxxxxxxxxxxxxxx",
  authenticationFlowType: "USER_PASSWORD_AUTH",
  ssr: true,
};

export const configWithScopedConfiguration = {
  // aws_project_region:
  //   process.env.NEXT_PUBLIC_APP_AUTH_REGION || "ap-northeast-1",
  Auth: {
    region: process.env.NEXT_PUBLIC_APP_AUTH_REGION || "ap-northeast-1",
    userPoolId:
      process.env.NEXT_PUBLIC_APP_AUTH_USER_POOL_ID ||
      "ap-northeast-1_xxxxxxxxx",
    userPoolWebClientId:
      process.env.NEXT_PUBLIC_APP_AUTH_USER_POOL_WEB_CLIENT_ID ||
      "xxxxxxxxxxxxxxxxxxxxxxxxxx",
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
  ssr: true,
};
