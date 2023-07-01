declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DOCS_PATH: string;
      BASE_PATH: string;
      CLIENT_BASE_URL: string;

      COOKIE_AGE: string;
      TOKEN_SECRET: string;
    }
  }
}

export {};
