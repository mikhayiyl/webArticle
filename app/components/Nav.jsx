"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { useTheme } from "next-themes";

const Nav = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropDown, settoggleDropDown] = useState(false);

    useEffect(() => {
        const populateProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        populateProviders();
    }, []);



    const { systemTheme, theme, setTheme } = useTheme();




    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg"
                    alt="promptopia Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text dark:text-amber-300">Promptopia</p>
            </Link>

            {/* desktop nav */}

            <div className="sm:flex hidden">
                {session?.user ?
                    <div className="flex gap-3 md:gap-5">
                        <Link href='/create-prompt' className="black_btn  dark:text-black dark:bg-slate-200">
                            create post
                        </Link>
                        <button type="button"
                            onClick={signOut}
                            className="outline_btn  dark:text-black dark:bg-slate-200">
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                    :

                    <>
                        {providers && Object.values(providers).map(p => (
                            <button
                                type="button"
                                key={p.name}
                                onClick={() => signIn(p.id)}
                                className="black_btn dark:bg-yellow-200 dark:text-zinc-950"
                            >
                                Sign In
                            </button>))}
                    </>

                }
            </div>
            <div className='copy_btn dark:bg-zinc-100 absolute right-1 gap-3' onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
                <Image
                    src={
                        theme === "dark"
                            ? "/assets/icons/moon.svg"
                            : "/assets/icons/sun.svg"
                    }

                    alt={theme === "dark" ? "moon.svg" : "sun.svg"}
                    width={12}
                    height={12}
                />
            </div>


            {/* mobile nav */}
            <div className="sm:hidden flex relative">
                {session?.user ? <div className="flex">
                    <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full mr-5 cursor-pointer"
                        alt="profile"
                        onClick={() => settoggleDropDown(prev => !prev)}
                    />

                    {toggleDropDown &&
                        <div className="dropdown ">
                            <Link href="/profile"
                                className="dropdown-link  dark:text-slate-900 font-bold"
                                onClick={() => settoggleDropDown(false)}
                            >My Profile
                            </Link>
                            <Link href="/create-prompt"
                                className="dropdown-link  dark:text-slate-900 font-bold"
                                onClick={() => settoggleDropDown(false)}
                            >Create Post
                            </Link>
                            <button type="button"
                                onClick={() => {
                                    settoggleDropDown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full black_btn"
                            >
                                Sign Out
                            </button>
                        </div>}

                </div> : <>


                    {providers && Object.values(providers).map(p => (
                        <button
                            type="button"
                            key={p.name}
                            onClick={() => signIn(p.id)}
                            className="black_btn dark:bg-white dark:text-slate-950 mr-7"
                        >
                            Sign In
                        </button>))}

                </>}
            </div>

        </nav>
    )
}

export default Nav