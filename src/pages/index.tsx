import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NewTweetForm from "~/components/NewTweetForm";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const tweet = api.tweet.create.useQuery({ text: "from tRPC" });

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center border-b bg-white p-2">
        <Image
          src="https://cdn.pixabay.com/photo/2017/03/24/07/28/twitter-2170426_1280.png"
          alt="home image"
          width={50}
          height={50}
          quality={100}
          className="rounded-full"
        />
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
    </>
  );
};

export default Home;
