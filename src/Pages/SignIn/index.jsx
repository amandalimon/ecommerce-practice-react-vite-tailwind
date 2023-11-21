import { useContext, useState, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  //Acount
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    // Redirect
    return <Navigate replace to={'/ecommerce-practice-react-vite-tailwind/'} />
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    // Create account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    // Sign In
    handleSignIn()
  }

  const renderLogIn = () => {
    return (
      <div className='mt-9'>
        <h1 className='font-bold text-3xl'> Welcome back.</h1>

        <p className='mb-6'>
          <span className='text-sm font-light'>Don't have an account? </span>
          <button className='text-xs font-light underline underline-offset-4'
            onClick={() => setView('create-user-info')} >Create an Account</button>
        </p>

        <p className='flex flex-col text-sm mb-3'>
          <span>Email Adress</span>
          <span className='bg-white rounded-lg font-light p-4'>{parsedAccount?.email}</span>
        </p>

        <p className='flex flex-col text-sm mb-6'>
          <span>Password</span>
          <span className='bg-white rounded-lg font-light p-4'>{parsedAccount?.password}</span>
        </p>

        <Link to="/ecommerce-practice-react-vite-tailwind/" onClick={() => handleSignIn()} disabled={!hasUserAnAccount}>
          <button className='bg-black text-white w-full rounded-lg p-2 disabled:bg-black/40'>Log in</button>
        </Link>

        <a className='text-xs font-light underline underline-offset-4' href='/'>Forgot my password</a>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className='mt-9'>

        <h1 className='font-bold text-3xl'> Create an account</h1>

        <p className='mb-6'>
          <span className='text-sm font-light'>Already have an account? </span>
          <button className='text-xs font-light underline underline-offset-4'
            onClick={() => setView()} >Sign in</button>
        </p>

        <div className='flex flex-col gap-2 mb-3 text-sm'>
          <label htmlFor="name" className='text-sm'>Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Amanda"
            className='border border-black/50 rounded-lg text-sm p-2 placeholder:text-black/60 focus:outline-none'
          ></input>
        </div>

        <div className='flex flex-col gap-2 mb-3 text-sm'>
          <label htmlFor="email" className=''>Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="hellow-world@gmail.com"
            className='border border-black/50 rounded-lg text-sm p-2 placeholder:text-black/60 focus:outline-none'
          ></input>
        </div>

        <div className='flex flex-col gap-2 mb-3 text-sm'>
          <label htmlFor="password" className=''>Your password:</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="********"
            className='border border-black/50 rounded-lg text-sm p-2 placeholder:text-black/60 focus:outline-none'
          ></input>
        </div>

        <Link to="/ecommerce-practice-react-vite-tailwind/">
          <button className='bg-black text-white w-full rounded-lg p-2 mt-9'
            onClick={() => createAnAccount()}>
            Create Account
          </button>
        </Link>

      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

  return (
    <Layout>
      <div className='w-80 mt-9'>
        <h1 className='font-semibold text-lg underline decoration-pink-300'>Shopi</h1>
        {renderView()}
      </div>
    </Layout>
  )
}

export default SignIn
