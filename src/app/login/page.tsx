import Image from 'next/image';

import GoogleIcon from '../../common/assets/images/google.png';
import { Button, Input } from 'antd';
import { LoginPanel } from '../components/login-panel';

export default function LoginPage() {
  return (
    <main className='flex h-screen flex-row items-center justify-center bg-slate-100'>
      {/* LEFT-SIDE */}
      <LoginPanel />

      {/* RIGHT-SIDE */}
      <div className='flex h-5/6 w-1/3 flex-col items-center justify-center bg-[#F1F4FE]'>
        <div>
          <h1 className='text-black'>Rekrutin</h1>
        </div>

        <div className='w-1/2'>
          <div>
            <div>
              <label>email</label>
              <Input placeholder='example@email.com' />
            </div>
            <div>
              <label>password</label>
              <Input placeholder='example password' type='' />
            </div>
          </div>

          <div className='my-2 flex w-full justify-end'>
            <Button
              className='!p-0 !px-2 text-[#535353]'
              type='text'
              href='/forgot-password'
            >
              Forgot password?
            </Button>
          </div>

          <div>
            <Button
              className='h-10 w-full bg-[#243238] font-poppins !text-white hover:!bg-[#7693F5]'
              type='primary'
            >
              Sign in
            </Button>
          </div>
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
