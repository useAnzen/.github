import { ClassNames } from "@44north/classnames";
import Head from "next/head";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export async function getStaticProps(context) {
    const content = readFileSync(
        resolve(process.cwd(), "./profile/README.md"),
        "utf8"
    );

    return {
        props: { content }, // will be passed to the page component as props
    };
}

export default function Homepage({ content }: { content: string }) {
    return (
        <>
            <Head>
                <title>useAnzen</title>
            </Head>
            <main
                className={new ClassNames([
                    "flex h-screen w-full items-center justify-center",
                    "bg-gradient-to-br",
                    "from-slate-100 dark:from-slate-700",
                    "to-slate-300 dark:to-slate-900",
                ]).list()}
            >
                <figure>
                    <svg
                        className={new ClassNames([
                            "h-[50vh] min-h-[100px] w-auto min-w-[100px]",
                            "text-[#383A3A] dark:text-stone-200",
                        ]).list()}
                        viewBox="0 0 251 210"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M217.708 36L186.935 93.7386L118.065 95.336L54 209.448L187.456 210L251 92.1702L217.708 36Z" />
                        <path
                            d="M33.2428 174L63.9708 116.281L132.74 114.683L197 0.203339L63.4505 0L0 117.849L33.2428 174Z"
                            fill="#CC5134"
                        />
                    </svg>
                </figure>
            </main>
        </>
    );
}
