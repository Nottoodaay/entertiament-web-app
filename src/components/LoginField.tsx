import { useState } from "react"

export const LoginField = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div>
        <div></div>
        <div className='
        w-[328px] h-[366px]
        flex flex-col gap-[40px]
        bg-[#161D2F] rounded-xl
        pl-[24px]
        '>
            <h1 className=' text-[32px] text-[#FFFFFF]'>Login</h1>
            <div className=' flex flex-col gap-[24px]'>
                <input 
                className='
                 w-[280px] h-[38px] 
                  border-b border-[#5A698F]
                  text-[white] outline-none
                 bg-[#161D2F]
                 ' 
                 type="text" 
                 placeholder=' Email Adress'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 />
                <input 
                className='
                 w-[280px] h-[38px] 
                  border-b border-[#5A698F]
                  text-[white] outline-none
                 bg-[#161D2F]
                 ' 
                 type="password" 
                 placeholder='Password'
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />
            </div>
            <button
             className=' 
             w-[280px] h-[48px] 
             rounded-md 
             flex items-center justify-center
            bg-[#FC4747] text-[white]'
             >Login to your account</button>
        </div>
    </div>
  )
}
