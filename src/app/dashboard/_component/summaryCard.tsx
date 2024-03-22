import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
import { BullishIco } from '../../../common/assets/images';
import { FcBullish } from 'react-icons/fc';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaArrowTrendUp } from 'react-icons/fa6';

export default function SummaryCard({ active }: { active: boolean }) {
  return (
    <div
      className={`flex h-40 w-64 flex-col justify-between rounded-2xl ${active ? 'bg-[#8e82fe]' : 'border-[2px] border-solid border-[#8e82fe36] bg-white'} p-5`}
    >
      <div className='h-full'>
        <p className={`pb-4 ${active ? 'text-slate-100' : 'text-slate-800'}`}>
          Total applicants
        </p>
        <h1
          className={`text-6xl font-normal ${active ? 'text-white' : 'text-black'}`}
        >
          145
        </h1>
      </div>

      <div className='flex items-center justify-between '>
        <div className='flex w-14 items-center justify-between rounded-full bg-[#f4f3ff] p-1 px-3'>
          <FaArrowUp
            className={`${active ? 'fill-[#8e82fe]' : 'fill-black'}`}
          />
          <p className={`${active ? 'text-[#8e82fe]' : 'text-black'}`}>20%</p>
        </div>

        <FaArrowTrendUp
          className={`!h-12 !w-12 ${active ? 'fill-slate-100' : 'fill-[#8e82fe]'}`}
        />
      </div>
    </div>
  );
}
