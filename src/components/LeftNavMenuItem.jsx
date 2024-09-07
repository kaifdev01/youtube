import React from 'react'

const LeftNavMenuItem = ({ text, action, className, icon }) => {
    return (
        <div className={"overflow-hidden dyy text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + className
        }
            onClick={action}>
            <span className=' text-xl mr-5'> {icon} </span>
            <span className='text-[15px]'>

                {text}
            </span>
        </div>
    )
}

export default LeftNavMenuItem
