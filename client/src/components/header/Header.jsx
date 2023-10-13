import DropdownMenu from "./Dropdownmenu"

function Header() {
    
    return (
        <div className='grid grid-cols-6 gap-2 px-2 py-1 shadow-gray-600 sticky top-0'>
            <div className='bg-slate-500 h-16 items-center text-center rounded-md col-start-1 col-span-6  grid grid-cols-12 gap-2 px-2 py-1 shadow-gray-600'>
                <div className='h-3/4 text-center rounded-md col-start-1 flex items-center text-gray-400 text-2xl font-extrabold col-span-3'>
                    <h1>
                        Learning By Doing
                    </h1>
                </div>
                <div className='h-3/4 rounded-md col-start-4 col-span-3 items-center justify-center text-gray-400 grid grid-cols-3 gap-1'>

                </div>
                <div className=' h-14 text-center rounded-md items-center justify-center col-start-8 col-span-4 grid grid-cols-3'>
                </div>
                <div classNamefull ='w-h-full rounded-lg col-start-12 grid' style={{justifyContent:"center",display:"flex"}}>
                    <DropdownMenu />
                </div>
            </div>
        </div>
    )
}

export default Header