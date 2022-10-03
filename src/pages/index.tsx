import { ClassNames } from "@44north/classnames";
import Head from "next/head";
import { md } from "./../utls/md";
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
                    "h-screen flex flex-col space-y-6 justify-center items-center",
                    "bg-gradient-to-tr from-slate-800 to-slate-700",
                ]).list()}
            >
                <svg
                    viewBox="0 0 364 429"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className={new ClassNames([
                        "text-primary",
                        "h-[60vh] min-h-[200px] max-h-[600px]",
                    ]).list()}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 258.598V272.959L43.6923 280.032C43.6923 280.032 47.919 304.552 63.417 330.016L42.2834 360.666L71.8705 390.845L103.336 369.154C103.336 369.154 129.636 386.129 151.239 388.487L159.223 428.097H199.611L208.065 389.43C208.065 389.43 237.182 382.357 253.15 370.097L288.372 393.674L317.96 363.967L294.478 330.016C294.478 330.016 308.097 311.154 314.202 285.691L356 277.203V258.598C319.698 257.498 319.47 257.718 312.74 264.183C311.055 265.802 308.964 267.812 305.797 270.29H251.548C239.622 324.959 183.174 328.13 183.174 328.13C183.174 328.13 122.175 330.95 107.758 270.29H58.2031C55.0364 267.812 52.9446 265.802 51.2601 264.183C44.5305 257.718 44.3016 257.498 8 258.598Z"
                    />
                    <path d="M0.170633 237.828C-0.488227 222.456 0.0388765 185.519 15.3231 176.559C15.3231 133.737 48.2631 69.1742 93.0617 42.8221C96.3557 59.2922 120.731 157.454 126.661 165.359C123.458 130.127 119.464 102.984 116.361 81.899C109.254 33.5933 106.824 17.078 129.296 7.90563C147.891 0.315545 179.365 0 182 0C184.635 0 216.109 0.315545 234.704 7.90563C257.176 17.078 254.746 33.5933 247.639 81.8989C244.536 102.984 240.542 130.127 237.339 165.359C243.269 157.454 267.644 59.2922 270.938 42.8221C315.737 69.1742 348.677 133.737 348.677 176.559C363.961 185.519 364.488 222.456 363.829 237.828L363.809 237.972C363.155 242.557 362.362 248.124 348.677 247.71C313.901 246.656 313.682 246.866 307.235 253.06C305.621 254.61 303.618 256.535 300.584 258.909H63.4156C60.3822 256.535 58.3785 254.61 56.765 253.06C50.3185 246.866 50.0994 246.656 15.3231 247.71C1.63807 248.124 0.844604 242.557 0.191162 237.972L0.170633 237.828Z" />
                </svg>
                {/* <div className={ new ClassNames(["bg-gray-100 p-6 rounded shadow-lg prose"]).list() }>
                <div dangerouslySetInnerHTML={{__html: md(content)}} />
            </div> */}
            </main>
        </>
    );
}
