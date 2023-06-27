import React from 'react'
import {BiMailSend} from 'react-icons/bi'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#202020] text-gray-300 flex justify-center items-center p-4 pt-[150px]'>
        {/* form with Getform.io */}
        <form method='POST'action="https://getform.io/f/98604098-8074-4869-9eae-7b3fc6c51f64" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-amber-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 flex pt-3'>
                <span>
                    <BiMailSend className='mr-1 fill-amber-300'/>
                </span>
                Submit the form below or send me an email:  tomekklewicki@gmail.com
                    </p>
            </div>
            <input type="text" placeholder='Name' name='name' className='w-full p-2 border-b-4 border-amber-300 text-gray-700'/>
            <input type="text" placeholder='Email' name='email' className='my-4 w-full p-2 border-b-4 border-amber-300 text-gray-700'/>
            <textarea rows='10' placeholder='Message' name='message' className='w-full p-2 border-b-4 border-amber-300 text-gray-700'/>
            <button className='text-white border-2 hover:border-amber-300 px-4 py-3 mx-auto flex items-center mt-1'>Send The Message</button>
        </form>

    </div>
  )
}

export default Contact