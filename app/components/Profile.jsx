import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <section className='w-full'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient  dark:text-zinc-50'>{name} Profile</span>
            </h1>
            <p className='desc text-left dark:text-zinc-50'>{desc}</p>

            <div className='mt-10 prompt_layout'>
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Profile;
