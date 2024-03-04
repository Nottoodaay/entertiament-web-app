
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'

export const RegisterField = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const handleClick = () =>{
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred)=>{
          console.log('userCreated:', cred.user)
          setEmail('')
          setPassword('')
          setRepeatPassword('')
        })
        .catch((err)=> console.log(err))
    }

  return (
    <div>
        <div></div>
        <div className='
        w-[328px] h-[420px]
        flex flex-col gap-[40px]
        bg-[#161D2F] rounded-xl
        pl-[24px]
        '>
            <h1 className=' text-[32px] text-[#FFFFFF] pt-[24px]'>Login</h1>
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
                 <input 
                className='
                 w-[280px] h-[38px] 
                  border-b border-[#5A698F]
                  text-[white] outline-none
                 bg-[#161D2F]
                 ' 
                 type="password" 
                 placeholder='Repeat Password'
                 value={repeatPassword}
                 onChange={(e)=>setRepeatPassword(e.target.value)}
                 />
            </div>
            <button
             className=' 
             w-[280px] h-[48px] 
             rounded-md 
             flex items-center justify-center
            bg-[#FC4747] text-[white]'
            onClick={handleClick}
             >Login to your account</button>
        </div>
    </div>
  )
}
