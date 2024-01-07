const Teams = () => {
  return (
    <>
      <div
        className='py-20 overflow-hidden'
        data-aos='fade-left'
        data-aos-duration='1000'
      >
        <div className='px-6 mx-auto xl:container md:px-12'>
          <div className='mb-16 md:w-2/3 lg:w-1/2'>
            <h2 className='mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl'>
              Meet Our Team
            </h2>
            <p className='leading-relaxed text-gray-600 dark:text-gray-300'>
              Jobsy prides itself not only on award winning technology, but also
              on the talent of its people of some of the brightest minds and
              most experienced executives in business.
            </p>
          </div>
          <div className='grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className='relative space-y-6 overflow-hidden group rounded-3xl'>
              <img
                className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0'
                src='https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='woman'
                loading='lazy'
                width='640'
                height='805'
              />
              <div className='absolute inset-x-0 bottom-0 px-8 py-6 mt-auto transition duration-300 ease-in-out translate-y-24 bg-gray-800 h-max dark:bg-white group-hover:translate-y-0'>
                <div>
                  <h4 className='text-xl font-semibold text-white dark:text-gray-700'>
                    Hentoni Doe
                  </h4>
                  <span className='block text-sm text-gray-500'>
                    CEO-Founder
                  </span>
                </div>
                <p className='mt-8 text-gray-300 dark:text-gray-600'>
                  Bringing visionary leadership to guide our team towards
                  excellence.
                </p>
              </div>
            </div>
            <div className='relative space-y-6 overflow-hidden group rounded-3xl'>
              <img
                className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0'
                src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='woman'
                loading='lazy'
                width='640'
                height='805'
              />
              <div className='absolute inset-x-0 bottom-0 px-8 py-6 mt-auto transition duration-300 ease-in-out translate-y-24 bg-gray-800 h-max dark:bg-white group-hover:translate-y-0'>
                <div>
                  <h4 className='text-xl font-semibold text-white dark:text-gray-700'>
                    Jane Smith
                  </h4>
                  <span className='block text-sm text-gray-500'>
                    Marketing Director
                  </span>
                </div>
                <p className='mt-8 text-gray-300 dark:text-gray-600'>
                  A tech-savvy expert driving innovation and technological
                  advancements.
                </p>
              </div>
            </div>
            <div className='relative space-y-6 overflow-hidden group rounded-3xl'>
              <img
                className='mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0'
                src='https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'
                alt='man'
                loading='lazy'
                width='640'
                height='805'
              />
              <div className='absolute inset-x-0 bottom-0 px-8 py-6 mt-auto transition duration-300 ease-in-out translate-y-24 bg-gray-800 h-max dark:bg-white group-hover:translate-y-0'>
                <div>
                  <h4 className='text-xl font-semibold text-white dark:text-gray-700'>
                    Alex Johnson
                  </h4>
                  <span className='block text-sm text-gray-500'>
                    Chief Technology Officer
                  </span>
                </div>
                <p className='mt-8 text-gray-300 dark:text-gray-600'>
                  Crafting compelling narratives to elevate our brand in the
                  market.
                </p>
              </div>
            </div>
            <div className='relative space-y-6 overflow-hidden group rounded-3xl'>
              <img
                className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0'
                src='https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='woman'
                loading='lazy'
                width='640'
                height='805'
              />
              <div className='absolute inset-x-0 bottom-0 px-8 py-6 mt-auto transition duration-300 ease-in-out translate-y-24 bg-gray-800 h-max dark:bg-white group-hover:translate-y-0'>
                <div>
                  <h4 className='text-xl font-semibold text-white dark:text-gray-700'>
                    Emily Brown
                  </h4>
                  <span className='block text-sm text-gray-500'>
                    Human Resources Manager
                  </span>
                </div>
                <p className='mt-8 text-gray-300 dark:text-gray-600'>
                  Nurturing a positive workplace culture where talents thrive
                  and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teams
