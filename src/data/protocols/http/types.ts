export type TRequestHttpPostClient = {
  url: string;
  body?: TBodyHttpPostClient | undefined;
};

export type TBodyHttpPostClient = {
  email?: string;
  password?: string;
};
