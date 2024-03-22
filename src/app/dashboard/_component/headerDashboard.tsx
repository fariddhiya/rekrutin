export default function HeaderDashboard() {
  return (
    <div className='mb-10'>
      <div className='mb-5 flex items-center'>
        <h1 className='text-4xl font-medium text-black'>Dashboard</h1>
        <div className='ml-5 flex h-8 items-center rounded-xl bg-[#f4f3ff] px-2 font-medium'>
          <p className='!text-sm text-[#8e82fe]'>New Insight</p>
        </div>
      </div>
      <div>
        <p className='w-1/2 leading-7 text-slate-700'>
          Quick view of your hiring status and provides useful insights for
          hiring managers and HR coordinators with easy-to-understand graphs and
          diagrams, including information that you need. Hiring managers and HR
          coordinators can easily track recruiting performance. Hiring process
          can be monitored more efficiently and effectively, helping companies
          recruit the best talent more effectively
        </p>
      </div>
    </div>
  );
}
