import CreateUserForm from "../components/Modals/CreateUserForm";
import PostsContainer from "../components/Posts/PostsContainer";

export default function Home() {
    return (
        <>
            <PostsContainer />
            <br/>
            <hr/>
            <br/>
            <CreateUserForm />
        </>
    )
}
