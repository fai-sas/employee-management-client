// /* eslint-disable no-unused-vars */
import { Carousel } from '@material-tailwind/react'

const Testimonial = () => {
  return (
    <>
      <section className='container p-8 mx-auto'>
        <h1 className='text-3xl font-bold text-center '>
          See what others say about the exceptional contributions of our system
        </h1>
        <Carousel
          autoplay={true}
          className='rounded-xl'
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className='absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4'>
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8  bg-gray-800' : 'w-4 bg-gray-700'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {/* 1 */}

          <section className='mt-20 bg-gray-200 dark:bg-gray-800'>
            <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6'>
              <figure className='max-w-screen-md mx-auto'>
                <svg
                  className='h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600'
                  viewBox='0 0 24 27'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                    fill='currentColor'
                  ></path>
                </svg>
                <blockquote>
                  <p className='text-xl font-medium text-gray-900 md:text-2xl dark:text-white'>
                    The employee tracking feature has significantly enhanced our
                    project timelines. It is a comprehensive system that
                    promotes collaboration and ensures timely completion of
                    tasks.
                  </p>
                </blockquote>
                <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                  <img
                    className='object-cover w-16 h-16 rounded-full'
                    src='https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='profile picture'
                  />
                  <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                    <div className='pr-3 font-medium text-gray-900 dark:text-white'>
                      Jane Smith
                    </div>
                    <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                      Project Manager
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* end of 1 */}
          {/* 2 */}
          <section className='mt-20 bg-gray-200 dark:bg-gray-800'>
            <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6'>
              <figure className='max-w-screen-md mx-auto'>
                <svg
                  className='h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600'
                  viewBox='0 0 24 27'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                    fill='currentColor'
                  ></path>
                </svg>
                <blockquote>
                  <p className='text-xl font-medium text-gray-900 md:text-2xl dark:text-white'>
                    Our employee management system has streamlined our workflow.
                    It provides efficient solutions from attendance tracking to
                    project management. An excellent tool for any organization.
                  </p>
                </blockquote>
                <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                  <img
                    className='object-cover w-16 h-16 rounded-full'
                    src='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='profile picture'
                  />
                  <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                    <div className='pr-3 font-medium text-gray-900 dark:text-white'>
                      John Doe
                    </div>
                    <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                      HR Manager
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* end of 2 */}
          {/* 3  */}
          <section className='mt-20 bg-gray-200 dark:bg-gray-800'>
            <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6'>
              <figure className='max-w-screen-md mx-auto'>
                <svg
                  className='h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600'
                  viewBox='0 0 24 27'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                    fill='currentColor'
                  ></path>
                </svg>
                <blockquote>
                  <p className='text-xl font-medium text-gray-900 md:text-2xl dark:text-white'>
                    Our organization has witnessed a remarkable improvement in
                    employee communication and collaboration. The platform has
                    undoubtedly contributed to our overall efficiency.
                  </p>
                </blockquote>
                <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                  <img
                    className='object-cover w-16 h-16 rounded-full'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                    alt='profile picture'
                  />
                  <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                    <div className='pr-3 font-medium text-gray-900 dark:text-white'>
                      Alex Johnson
                    </div>
                    <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                      Team Lead
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* end of 3 */}
        </Carousel>
      </section>
    </>
  )
}

export default Testimonial
