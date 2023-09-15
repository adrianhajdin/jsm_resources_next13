import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src='/jsm-logo.svg' width={55} height={40} alt='JSM logo' />
        </Link>

        <Image 
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link
              href="https://jsmastery.pro/next13"
              target="_blank"
            >
              Next.js 13.4 Course
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link
              href="https://jsmastery.pro/masterclass"
              target="_blank"
            >
              Masterclass
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar