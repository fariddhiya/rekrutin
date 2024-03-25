import Image from 'next/image';
import { AvatarIco } from '../../../common/assets/images';
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa';

export default function InterviewCardDashboard() {
  return (
    <div className='my-5 flex h-32 w-full rounded-xl border-2 border-solid border-slate-300 px-3 py-3'>
      <div className='flex w-20 justify-center'>
        <Image src={AvatarIco} alt='' className='!h-12 !w-12' />
      </div>
      <div className='flex h-full w-3/4 flex-col justify-between'>
        <p className='font-bold text-slate-900'>Kristin Watson</p>
        <p className='text-slate-500'>UI/UX Designer</p>
        <div className='flex w-full items-center'>
          <FaRegCalendarAlt className='mr-2 fill-[#8e82fe]' />
          <p className='text-sm text-slate-700'>April 13 2023 - 10.00 AM</p>
        </div>
        <div className='flex w-full items-center justify-end'>
          <p className='mr-2 text-[#8e82fe]'>Join meeting</p>
          <div className='flex items-center justify-center rounded-full border-2 border-solid border-[#8e82fe] p-1.5'>
            <FaArrowRight className='!h-3 !w-3 !fill-[#8e82fe]' />
          </div>
        </div>
      </div>
    </div>
  );
}
