"use client"

import { formUrlQuery } from '@/sanity/utils';
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack']

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    
    if(active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }
    
    router.push(newUrl, { scroll: false });
  }

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ?"gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters