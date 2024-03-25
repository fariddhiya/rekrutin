'use client';

import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import {
  isContainSpecialCharacter,
  isContainUpperLower,
  isValidLength,
} from '../_lib/validation';
import { isValidEmail } from '../../lib/validation';
import { useRouter } from 'next/navigation';
import { AlertMessage } from '../../../components/alert';

const RegisterForm = () => {
  const router = useRouter();
  const [dataEmail, setDataEmail] = useState({
    isValidEmail: false,
  });

  const [dataPassword, setDataPassword] = useState({
    isValidLength: false,
    isContainSpecialCharacter: false,
    isContainUpperCase: false,
  });

  interface IUserData {
    email: string;
    password: String;
  }

  const [data, setData] = useState<IUserData>({
    email: '',
    password: '',
  });

  const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const validEmail = isValidEmail(email);

    if (validEmail) {
      setData({
        ...data,
        email: email,
      });
    }
  };

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  const handlePasswordValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    const validLength = isValidLength(password);
    const containSpecialCharacter = isContainSpecialCharacter(password);
    const containUpperLower = isContainUpperLower(password);

    const validPassword =
      validLength && containSpecialCharacter && containUpperLower;

    setDataPassword({
      isValidLength: validLength,
      isContainSpecialCharacter: containSpecialCharacter,
      isContainUpperCase: containUpperLower,
    });

    if (validPassword) {
      setData({
        ...data,
        password: password,
      });
    } else if (!validPassword) {
      setData({
        ...data,
        password: '',
      });
    }
  };

  const handleButton = () => {
    if (!data.email || !data.password) {
      setShowError(true);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className='w-1/2'>
      {showError && (
        <div className='absolute left-1/2 top-5 -translate-x-1/2 transform'>
          <AlertMessage description='Your error message here' />
        </div>
      )}

      <div>
        <Form>
          <label>email</label>
          <Input
            placeholder='example@email.com'
            maxLength={240}
            onChange={handleEmailValidation}
          />
        </Form>
        <Form.Item>
          <label>password</label>
          <Input.Password
            placeholder='example password'
            type=''
            onChange={handlePasswordValidation}
          />
        </Form.Item>
        <div className='my-5'>
          <ul className='list-none text-sm text-slate-500'>
            <li
              className={
                dataPassword.isValidLength ? 'text-green-500' : 'text-red-400'
              }
            >
              Password must be contain 8 character
            </li>
            <li
              className={
                dataPassword.isContainSpecialCharacter
                  ? 'text-green-500'
                  : 'text-red-400'
              }
            >
              Password must be contain 1 special character
            </li>
            <li
              className={
                dataPassword.isContainUpperCase
                  ? 'text-green-500'
                  : 'text-red-400'
              }
            >
              Password must be contain 1 uppercase and 1 lowercase
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Button
          className='font-poppins h-10 w-full bg-[#243238] !text-white hover:!bg-[#7693F5]'
          type='primary'
          onClick={handleButton}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
