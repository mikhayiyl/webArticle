
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

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

    const signOut = async () => { };



    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg"
                    alt="promptopia Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text">Promptopia</p>
            </Link>

            {/* /mobile nav */}

            <div className="sm:flex hidden">
                {session?.user ?
                    <div className="flex gap-3 md:gap-5">
                        <Link href='/create-prompt' className="black_btn">
                            create post
                        </Link>
                        <button type="button" className="outline_btn">
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
                                className="black_btn"
                            >
                                Sign In
                            </button>))}
                    </>

                }
            </div>

            {/* mobile nav */}
            <div className="sm:hidden flex relative">
                {session?.user ? <div className="flex">
                    <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        onClick={() => settoggleDropDown(prev => !prev)}
                    />

                    {toggleDropDown &&
                        <div className="dropdown">
                            <Link href="/profile"
                                className="dropdown-link"
                                onClick={() => settoggleDropDown(false)}
                            >My Profile
                            </Link>
                            <Link href="/create-prompt"
                                className="dropdown-link"
                                onClick={() => settoggleDropDown(false)}
                            >Create Prompt
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
                            className="black_btn"
                        >
                            Sign In
                        </button>))}

                </>}
            </div>

        </nav>
    )
}

export default Nav