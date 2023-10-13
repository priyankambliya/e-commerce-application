import { useQuery } from 'react-query'
import axios from 'axios'
import { Hourglass } from 'react-loader-spinner'

import { COMMON_URL } from '../../../security/config.json'
import { Link } from 'react-router-dom'

const fetchUsers = async () => {
    const { data } = await (await axios.get(COMMON_URL))
    return data
}

function DefaultPage() {

    const { data: users, error, isLoading } = useQuery('users', fetchUsers)

    if (isLoading) {
        return <div className='flex justify-center'><Hourglass /></div>
    }
    if (error) {
        return <div className='text-center'>{error.message}..</div>
    }
    return (
        <>
            <div className='grid grid-cols-3 m-2 gap-2'>
                {
                    users.map(user => (
                        <Link to={`/home/user-detail/${user._id}`} key={user.id} className='bg-white h-56 text-center rounded-md border border-gray-300 shadow-xl'>
                            <h1 className='text-2xl text-gray-500 mt-2'>{user._id}</h1>
                            <hr
                                class="h-0.5 mx-2 my-3" />
                            <p className='text-slate-400 overflow-y-hidden'>Id:{user.nickname}</p>
                            <p className='text-slate-400 overflow-y-hidden'>UserName:{user.email}</p>
                            <p className='text-slate-400 overflow-y-hidden'>Email:{user.nickname}</p>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default DefaultPage