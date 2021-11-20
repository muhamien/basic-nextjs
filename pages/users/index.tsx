import Layout from '../../components/Layout';

interface UsersProps{
    dataUsers: Array<any>;
}

export default function Users(props:UsersProps) {
    const {dataUsers} = props;
    console.log(dataUsers);
    return (
        <Layout pageTitle="User">
            <h1 style={{paddingLeft:'64px',}}>User List</h1>   
            <ul style={{paddingLeft:'64px',}}>
                {dataUsers.map((data)=>(
                    <li>
                        <h4>{data.name}</h4>
                        <span>{data.email}</span>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props:{
            dataUsers,
        }
    }
}

