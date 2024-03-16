function SkeletonStreamInfo () {
  return (
    <div className='my-4 w-full h-full animate-pulse flex flex-col gap-6'>
      <div className='w-full h-[384px] bg-secondary-gray rounded-sm' />
      <div className='flex flex-col gap-3'>
        <p className='w-96 h-5 bg-secondary-gray rounded-xl' />
        <p className='w-60 h-5 bg-secondary-gray rounded-xl' />
        <div className='flex flex-wrap gap-2'>
          {Array.from({ length: 5 }, (_, i) => <div key={`tag-skeleton-id_${i}`} className='bg-secondary-gray w-20 h-4 rounded-sm' />)}
        </div>
      </div>
    </div>
  )
}

export default SkeletonStreamInfo
