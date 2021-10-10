import Head from "next/head";
import { useRouter } from "next/router";
import DarkModeFloatingButton from "./DarkModeFloatingButton";

const Container = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "A2 Online Judge",
    description:
      "Get started with competitive programming with curated problems from A2OJ.",
    image: "https://the-a2oj.vercel.app/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen py-8">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://the-a2oj.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://the-a2oj.vercel.app${router.asPath}`}
        />
      </Head>
      {children}
      <DarkModeFloatingButton />
    </div>
  );
};

export default Container;
