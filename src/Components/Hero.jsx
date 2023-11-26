import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className='relative h-screen p-8 overflow-hidden text-white bg-gradient-to-r from-purple-600 to-blue-600'>
        <div className='absolute inset-0'>
          <img
            src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
            alt='Background Image'
            className='object-cover object-center w-full h-full'
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>

        <div className='relative z-10 flex flex-col items-center justify-center h-full text-center'>
          <h1 className='mb-4 text-3xl font-bold leading-tight'>
            Streamline Your Workforce with Effortless Employee Management
          </h1>
          <p className='max-w-3xl mb-8 text-lg leading-relaxed text-gray-300 '>
            Discover a user-friendly Employee Management platform designed to
            streamline HR tasks effortlessly. From onboarding to performance
            tracking, our solution enhances productivity and fosters
            collaboration. Experience a new era of efficiency in employee
            engagement and organizational success. Elevate your workforce
            management with us.
          </p>
          <Link
            to='login'
            className='px-6 py-2 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out transform bg-yellow-400 rounded-full hover:bg-yellow-300 hover:scale-105 hover:shadow-lg'
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
