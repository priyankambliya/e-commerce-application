import { Dropdown } from 'antd';
import { Link } from "react-router-dom";

const items = [
    {
        key: '1',
        label: (
            <Link >profile</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link >Update password</Link>

        ),
    },
    {
        key: '3',
        label: (
            <Link >Logout</Link>
        ),
    },
];

function DropdownMenu() {

    return (
        <Dropdown
            menu={{
                items,
            }}
            placement="bottom"
            arrow
        >
            <img className="rounded-full h-10 w-10 mt-1" src={"https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }/>
        </Dropdown>
    ) 
}

export default DropdownMenu