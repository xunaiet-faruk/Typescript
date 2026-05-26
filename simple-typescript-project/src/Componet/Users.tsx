type UserProps = { name: string, age: number, isLogged: boolean }
const Users = ({ name, age, isLogged }: UserProps) => {
    return (
        <div>
            <h2>Users</h2>
            <p>The user name is {name}</p>
            <p>The user age is {age}</p>
            <p>The user is {isLogged ? 'logged in' : 'not logged in'}</p>
        </div>
    );
};

export default Users;