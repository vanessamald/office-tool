export default function DisplayUsers ({ user, handleDelete, handleEdit }) {

    console.log(user.id);

    return (
        <>
        <tbody key={user.id}>
            <tr>
                <td className='p-2'>{user.id}</td>
                <td className='p-2'>{user.firstName}</td>
                <td className='p-2'>{user.lastName}</td>
                <td className='p-2'>{user.email}</td>
                <td>
                    <button 
                        onClick={(event) => handleDelete(event, user.id)} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Delete
                    </button>
                </td>
                <td>
                    <button 
                        onClick={(event) => handleEdit(event, user.id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Edit
                    </button>
                </td>       
            </tr>
        </tbody>
        </>
    )
}