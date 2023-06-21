import Link from "next/link";

const Form = ({ type,
    post,
    setpost,
    submitting,
    handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient dark:text-zinc-300">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md dark:text-white">
                {type} and share amazing propmts with the world , and let your imagination run wild with any AI-powered platform
            </p>
            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <label >
                    <span className="font-satoshi font-semibold text-base text-gray-700 dark:text-white">Your AI Prompt</span>

                    <textarea
                        value={post.prompt}
                        onChange={e => setpost({ ...post, prompt: e.target.value })}
                        placeholder="write your prompt here ..."
                        required
                        className="form_textarea dark:text-white"
                    />
                </label>
                <label >
                    <span className="font-satoshi font-semibold text-base text-gray-700 dark:text-white">Tag</span>
                    <span className="font-normal"> (
                        #product , #techology, #health... )</span>
                    <input
                        value={post.tag}
                        onChange={e => setpost({ ...post, tag: e.target.value })}
                        placeholder="#tag"
                        required
                        className="form_input dark:text-white"
                    />
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-sm text-gray-500 dark:text-white">
                        Cancel
                    </Link>
                    <button type="submit" disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white "
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>

            </form>
        </section>
    )
}

export default Form