"use client";
import Feed from "@app/components/Feed";
import { ThemeProvider } from "next-themes";

const Home = () => {
    return (
        <ThemeProvider attribute="class">

            <section className='w-full flex-center flex-col'>
                <h1 className='head_text text-center dark:text-white'>
                    Discover & Share
                </h1>
                <br className='max-md:hidden' />
                <span className='head_text orange_gradient text-center'>AI-Powered Prompts
                </span>
                <p className='desc text-center dark:text-white'>Promptopia is an open-Source AI prompting tool for modern world to discover, create and share creative prompts</p>
                <Feed />
            </section>
        </ThemeProvider>
    )
}

export default Home;