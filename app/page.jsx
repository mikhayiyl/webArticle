import Feed from "@app/components/Feed";

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
            </h1>
            <br className='max-md:hidden' />
            <span className='head_text orange_gradient text-center'>AI-Powered Prompts
            </span>
            <p className='desc text-center'>Promptopia is an open-Source AI prompting tool for modern world to discover, create and share creative prompts</p>
            <Feed />
        </section>
    )
}

export default Home;