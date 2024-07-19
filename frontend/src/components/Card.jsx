export default function Card({ user }) {
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
        </div>
    )
}
