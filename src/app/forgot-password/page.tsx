'use client';
import Image from 'next/image';

import GoogleIcon from '../../common/assets/images/google.png';
import { Button, Input } from 'antd';
import { LoginPanel } from '../../components/login-panel';
import BackButton from '../../common/assets/images/back.png';
// import { useRouter } from 'next/router';

export default function ForgotPasswordPage() {
  // const router = useRouter();
  return (
    <main className='flex h-screen flex-row items-center justify-center bg-slate-100'>
      {/* LEFT-SIDE */}
      <LoginPanel />

      {/* RIGHT-SIDE */}
      <div className='relative flex h-5/6 w-1/3 flex-col items-center justify-center bg-[#F1F4FE]'>
        {/* Back Button */}
        <div className='absolute left-12 top-12'>
          <Button
            className='flex h-10 w-10 items-center justify-center'
            // onClick={() => router.back()}
          >
            <Image
              className='m'
              src={BackButton}
              alt='Image Login'
              height={15}
              width={15}
            />
          </Button>
        </div>

        <div>
          <h1 className='text-black'>Rekrutin</h1>
        </div>

        <div className='mt-5 w-1/2'>
          <h4 className='text-center text-black'>Forgot Password</h4>

          <div>
            <label>email</label>
            <Input placeholder='example@email.com' />
          </div>

          <Button
            className='font-poppins mt-6 h-10 w-full bg-[#243238] !text-white hover:!bg-[#7693F5]'
            type='primary'
          >
            Send Email
          </Button>
        </div>

        <div className='my-10 flex h-[0.1px] items-center '>
          <div className='h-full w-16 rounded-md bg-[#868686]' />
          <p className='mx-3 text-[#868686]'>or</p>
          <div className='h-full w-16 rounded-md bg-[#868686]' />
        </div>

        <Button className='flex h-12 items-center hover:!bg-[#F3F1FE]'>
          <Image
            className='m'
            src={GoogleIcon}
            alt='Image Login'
            height={25}
            width={25}
          />
          <p className='pl-5 text-[#535353]'>Sign in with Google</p>
        </Button>

        <div>
          <p className='text-[#535353]'>
            Are you new?
            <Button
              type='text'
              className='ml-1 !p-0 !px-2 text-[#7693F5] underline hover:!bg-none hover:!text-blue-700'
              href='/register'
            >
              Create an Account
            </Button>
          </p>
        </div>
      </div>
    </main>
  );
}
