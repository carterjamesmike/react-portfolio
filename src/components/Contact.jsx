import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue)
    } else {
      setMessage(inputValue)
    }

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (!name) {
      setErrorMessage('Please enter a name or organization')
      return;
    }
    if (!message) {
      setErrorMessage('Please enter a message');
      return;
    };

    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('')


  };


  return (
    <div name='Contact' className='w-full h-screen primary-bg flex justify-center items-center p-4'>
        <form method='POST' action="https://submit-form.com/fjqdLiZg" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 accent-color text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit form below</p>
            </div>
            <input onChange={handleInputChange} value={name} className='bg-[#ccd6f6] p-2' type="text" placeholder='Name or Organization' name='name' required />
            <input onChange={handleInputChange} value={email} className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required/>
            <textarea onChange={handleInputChange} value={message} className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
        {errorMessage && (
        <div>
          <p className="text-xl text-white">{errorMessage}</p>
        </div>
      )}        
    </div>
    
  )
}

export default Contact