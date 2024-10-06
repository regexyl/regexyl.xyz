import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1> */}
      <p className="mb-4">{`Hi, I'm Regina and I like making things.`}</p>
      <p className="mb-4">{`I'm currently a frontend engineer at agemo.ai in London, working on making a product that automates the creation of stateless functions from natural language.`}</p>
      <p className="mb-4">
        If you'd like a chat to talk about anything,{" "}
        <Link
          className="text-orange-800 dark:text-orange-300 hover:text-orange-900 dark:hover:text-orange-200 transition hover:underline"
          href="https://cal.com/regexyl"
        >
          my calendar
        </Link>{" "}
        is open.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
