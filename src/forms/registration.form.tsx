'use client';

import {Form,Input,Button} from '@heroui/react';
import {useState} from 'react';

interface Iprops {
    onclose: () => void;
}

const RegistrationForm = ({onclose}: Iprops) => {

const [formData,setFormData]=useState({
    email:'',
    password:'',
    confirmPassword:''
});
const validateEmail =(email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);


    onclose();
}

return (
    <Form className="max-w-md mx-auto p-4 border rounded-lg shadow-md" onSubmit={handleSubmit}>
        <Input
        aria-label='Email'
        required
        name='email'
        placeholder='Enter your email'
        type='email'
        value={formData.email}
        className="bg-default-100"
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setFormData({...formData,email:e.target.value})}
      />
       <Input
       required
         name='password'
            placeholder='Enter your password'
            type='password'
            value={formData.password}
            className="bg-default-100"
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setFormData({...formData,password:e.target.value})}
         />
        <Input
        required
            name='confirmPassword'
            placeholder='Confirm your password'
            type='password'
            value={formData.confirmPassword}
            className="bg-default-100"
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setFormData({...formData,confirmPassword:e.target.value})}
         />
         <div className='flex w-[100%] gap-4 items-center pt-8 justify-end'>
            <Button onPress={onclose}>Cancel</Button>
            <Button type='submit'>Register</Button>
         </div>
      </Form>
);
}
export default RegistrationForm;



