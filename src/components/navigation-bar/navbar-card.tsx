import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

export default function NavbarCard({
  slug,
  menu,
  icon,
  pathname,
}: {
  slug: string;
  menu: string;
  pathname: string;
  icon: StaticImageData;
}) {
  const active = pathname.replace(/\//, '') === slug;

  return (
    <Link href={slug} className='flex h-full w-full justify-center'>
      <Button
        className={`!mt-5 !flex !h-14 !w-2/3 items-center p-5 !pl-6 ${
          active ? '!bg-[#6786ec]' : 'bg-white'
        }`}
      >
        <Image
          src={icon}
          alt='Image Login'
          width={23}
          style={{ color: 'red' }}
          className={active ? 'mr-4 fill-red-950' : 'mr-4'}
        />
        <p className='w-1/2 text-left'>{menu}</p>
      </Button>
    </Link>
  );
}
