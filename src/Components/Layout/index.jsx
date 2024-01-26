const Layout = ({ children }) => {
    return (
        <div className='bg-stone-50 w-full min-h-screen overflow-x-hidden flex flex-col items-center mt-20'>
            {children}
        </div>
    )
}

export default Layout