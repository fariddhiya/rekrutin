import Image from 'next/image';
import Login1 from '../../../common/assets/images/login-1.svg';
import { Carousel } from 'antd';

export const LoginPanel = () => {
  return (
    <div className='flex h-5/6 w-1/2 flex-col justify-evenly bg-[#7693F5]'>
      <Carousel autoplay className=''>
        {[1, 2, 3].map((item, index) => (
          <div className='h-full' key={index}>
            <div className='flex flex-col items-center justify-center'>
              <Image
                src={Login1}
                alt={`Image Login ${index + 1}`}
                width={450}
              />
            </div>
            <div className='mx-56 my-4 mb-8 flex h-32 items-center justify-center bg-red-500'>
              <p className='break-words text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
