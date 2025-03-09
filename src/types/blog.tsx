export type Blog = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
  //rest
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
