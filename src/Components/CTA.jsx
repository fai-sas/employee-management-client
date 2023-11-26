import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <div className='mb-8 bg-white'>
        <div className='p-8 mx-auto '>
          <div className='relative px-6 py-24 overflow-hidden text-center isolate sm:rounded-3xl sm:px-16'>
            <h1 className='text-3xl font-bold text-center '>
              Want Customized Features?
            </h1>
            <p className='max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600'>
              Unleash the potential of customized features designed specifically
              to meet your distinct business needs.
            </p>
            <div className='flex items-center justify-center mt-8 -space-x-2 overflow-hidden isolate'>
              <img
                className='relative z-30 inline-block w-10 h-10 rounded-full ring-2 ring-white'
                src='https://randomuser.me/api/portraits/men/34.jpg'
                alt=''
              />
              <img
                className='relative z-20 inline-block w-10 h-10 rounded-full ring-2 ring-white'
                src='https://randomuser.me/api/portraits/women/2.jpg'
                alt=''
              />
              <img
                className='relative z-10 inline-block w-10 h-10 rounded-full ring-2 ring-white'
                src='https://randomuser.me/api/portraits/women/3.jpg'
                alt=''
              />
              <img
                className='relative z-0 inline-block w-10 h-10 rounded-full ring-2 ring-white'
                src='https://randomuser.me/api/portraits/men/4.jpg'
                alt=''
              />
              <span className='!ml-2 font-bold italic text-teal-500'>
                Join these awesome members who used personalized features
              </span>
            </div>
            <div className='flex items-center justify-center mt-12 gap-x-6'>
              <Link to='/contact'>
                <button
                  type='button'
                  className='relative inline-flex items-center px-6 py-4 font-semibold text-white bg-teal-600 rounded-lg shadow-sm text-md gap-x-2 hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                >
                  <span className='absolute left-0 w-full text-xs italic text-left text-teal-600 -top-5'>
                    No Obligations
                  </span>
                  Contact Now
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    className='-mr-0.5 h-5 w-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
            <svg
              viewBox='0 0 1024 1024'
              className='absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
              aria-hidden='true'
            >
              <circle
                cx='512'
                cy='512'
                r='512'
                fill='url(#827591b1-ce8c-4110-b064-7cb85a0b1217)'
                fillOpacity='0.7'
              ></circle>
              <defs>
                <radialGradient id='827591b1-ce8c-4110-b064-7cb85a0b1217'>
                  <stop stopColor='#15b8a6'></stop>
                  <stop offset='1' stopColor='#15b8a6'></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default CTA
