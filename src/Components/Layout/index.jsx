const Layout = ({children}) => {
    return (
        <div className='bg-stone-50 w-full gap-4 flex flex-col items-center mt-20'>
            {children}
        </div>
    )
}

export default Layout