import { urlForImage } from "@/sanity/lib/image";

export const PortableTextStyles = {
  types: {
    image: ({ value }: any) => {
      return (
        <img src={urlForImage(value)} alt={value.alt} className="rounded-md" />
      );
    },
  },
  block: {
    normal: ({ children }: any) => {
      return (
        <p className="text-scooter-900 dark:text-scooter-50 my-6">{children}</p>
      );
    },
    h1: ({ children }: any) => {
      return (
        <h1 className="text-3xl font-semibold text-scooter-900 dark:text-scooter-50">
          {children}
        </h1>
      );
    },
    h2: ({ children }: any) => {
      return (
        <h2 className="text-xl font-semibold text-scooter-900 dark:text-scooter-50">
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => {
      return (
        <h3 className="text-lg font-semibold text-scooter-900 dark:text-scooter-50">
          {children}
        </h3>
      );
    },
    h4: ({ children }: any) => {
      return (
        <h4 className=" font-semibold text-scooter-900 dark:text-scooter-50">
          {children}
        </h4>
      );
    },
    h5: ({ children }: any) => {
      return (
        <h5 className="text-base font-semibold text-scooter-900 dark:text-scooter-50">
          {children}
        </h5>
      );
    },
  },
  marks: {
    strong: ({ children }: any) => {
      return (
        <strong className="font-semibold text-scooter-900 dark:text-scooter-50">
          {children}
        </strong>
      );
    },
  },
};
