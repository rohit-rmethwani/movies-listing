import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
export const NotFoundPage = () => {

  useEffect(() => {
    document.title = '404 Page Not Found!';

    return () => {
      document.title = 'Film Fiesta';
    };
  }, []);

  return (
    <main>
      <section className='flex flex-col justify-center h-100 items-center px-2 mt-5'>
        <div className='flex flex-col items-center py-4'>
          <h2 className='text-4xl text-slate-800 dark:text-slate-50 font-bold'>
						You seem to be Lost!
					</h2>
          <p className='text-2xl text-slate-800 dark:text-slate-50 mt-4'> 
						404 Page Not Found
					</p>
        </div>
          <Link to="/" className="inline-flex items-center px-5 py-2 
text-sm font-medium text-center text-white bg-primary-800 
rounded-lg hover:bg-primary-1000 focus:outline-none dark:bg-primary-800 
dark:hover:bg-primary-1000">
            Back To Home!
          </Link>
      </section>
      
    </main>
  )
}