import Image from 'next/image';
import { GoogleIco } from '../../../common/assets/images';
import { Button } from 'antd';

export default function CurrentOpeningCard({
  name,
  company,
  tags,
  applicants,
}: {
  name: string;
  company: string;
  tags: string[];
  applicants: number;
}) {
  return (
    <div className='mr-4 flex h-44 w-80 flex-col justify-between rounded-3xl border-2 border-solid border-slate-300 p-5'>
      <div className='flex h-12'>
        <div className='flex w-16 items-center justify-center '>
          <Image src={GoogleIco} alt='' className='!h-8 !w-8' />
        </div>

        <div className='ml-2 flex flex-col justify-around'>
          <p className='font-bold text-black'>{name}</p>
          <p className='text-slate-600'>{company}</p>
        </div>
      </div>
      <div className='my-2 flex'>
        {tags.map((v, i) => {
          return (
            <p className='m-1 flex items-center justify-center rounded-full bg-[#f4f3ff] px-2 py-1 text-xs font-bold text-[#8e82fe]'>
              {v}
            </p>
          );
        })}
      </div>
      <div className='mb-4 h-0.5 w-full bg-slate-300' />
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-slate-600'>Total applicants</p>
          <p className='text-4xl text-black'>{applicants}</p>
        </div>
        <Button className='flex !h-8 items-center justify-center rounded-xl !bg-[#8e82fe] p-1 px-4 !text-white'>
          <p className=''>Job detail</p>
        </Button>
      </div>
    </div>
  );
}
