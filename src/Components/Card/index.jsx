const Card = ({data}) => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.category}
                </span>
                
                <img className='w-full h-full object-contain' 
                src={data.image} alt="product"/>
                
                <div className='absolute top-0 right-0 font-light bg-white border border-gray-700 rounded-full w-6 h-6 flex justify-center items-center m-2 pb-1 hover:scale-110'>
                    +
                </div>
            </figure>

            <p className='flex justify-between'>
                <span className='mr-2 text-sm font-light truncate'>
                    {data.title}
                </span>
                
                <span className='text-lg font-medium'>
                    ${data.price}
                </span>
            </p>
        </div>
    )
}

export default Card