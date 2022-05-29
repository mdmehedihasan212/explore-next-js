import React from 'react';

const index = ({ users }) => {
    return (
        <div>
            <h1>Users size: {users.length}</h1>
        </div>
    );
};

export default index;

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}