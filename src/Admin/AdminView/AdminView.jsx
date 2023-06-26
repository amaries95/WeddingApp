export default function AdminView (props) {
    const onLogoutEvent = (event) => {
        props.logoutProp();
    }

    return (
        <>
            <h2>Admin</h2>
            <button onClick={onLogoutEvent}>Log out</button>
        </>
    );
}