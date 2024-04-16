import { NavLink } from "react-router-dom"


export const ItemsSidebar = ({ text, icon,rute }) => {
    return (
        <li>
            <NavLink to={rute}
            className="mb-6 font-semibold text-xl mr-2 flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-md w-full p-1">
                <span className="flex items-center">
                    {text}
                    <img src={icon} alt={icon} className='ml-4' style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                </span>
            </NavLink>
        </li>
    )
}
