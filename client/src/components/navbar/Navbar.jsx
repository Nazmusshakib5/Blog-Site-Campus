import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {navItemID} from './NavItemID.jsx'

const Navbar = () => {
    // Tract The active Link and scroll to the section
    const [activeLink, setActiveLink] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)

    // Function to scroll smooth to the sections
    const scrollToSection = (sectionID) => {
        const element = document.getElementById(sectionID)
        if (element) {
            const marginTop =0
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top: scrollToY, behavior: "smooth"})
        }
    }

    const navBarBg = () => {
        const navBarbg = document.getElementById('navBarbg')
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                navBarbg.classList.add('bgDark')
            } else {
                navBarbg.classList.remove(('bgDark'))
            }
        })

    }

    //Determine auto Active Section when scrolling
    const determineActiveSection = () => {
        for (let i = navItemID.length - 1; i >= 0; i--) {
            const section = document.getElementById(navItemID[i])
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveLink(navItemID[i]);
                    break;
                }
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
            //call the determine function when scrolling
            determineActiveSection()
        }

        navBarBg()

        window.addEventListener('scroll', handleScroll)

        //remove when not scrolling
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, []);

    return (
        <div>
            <nav id='navBarbg'
                 className="NavBody px-4 py-6 w-full top-0 z-10 fixed bg-white shadow-lg">
                <div className=" mx-auto flex justify-between items-center">
                    {/* Left Icon */}
                    <div className="text-black flex me-10 items-center" onClick={()=>scrollToSection('home')}>
                        <Link to='/' className="flex items-center py-1 ">
                           CODEHUB
                        </Link>
                    </div>

                    <div className="hidden md:flex lg:space-x-4 md:space-x-2 text-black md:mr-5 lg:mr-20 lg:gap-8 md:gap-5 gap-3">
                        {navItemID.map((item, i) => (
                            <Link key={i} to='/' onClick={() => scrollToSection(item)}
                                  className={activeLink === item ? 'uppercase hover:text-gray-400 active py-1' : 'uppercase py-1 hover:text-gray-400'}>
                                {item}
                            </Link>

                        ))}
                        <Link  to='/login'
                              className={activeLink === 'login' ? 'uppercase hover:text-gray-400 active py-1' : 'uppercase py-1 hover:text-gray-400'}>
                            LOGIN
                        </Link>
                        <div className='flex items-center'>
                            <input className='bg-neutral-100 rounded-xl py-1 px-4 border me-2'/>
                            <button className='bg-black text-white px-4 py-1 rounded-xl'>Search</button>
                        </div>

                    </div>

                    {/* Right Collapsible Button */}
                    <div className="md:hidden">
                        <button
                            className="text-white focus:outline-none"
                            aria-label="Toggle Menu"
                            onClick={() => {
                                const menu = document.getElementById('mobile-menu');
                                menu.classList.toggle('hidden');
                            }}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden mt-5 hidden bg-black" id="mobile-menu">
                    {navItemID.map((item, i) => (
                        <Link key={i} to='/' onClick={() => scrollToSection(item)}
                              className={activeLink === item ?
                                  'hover:text-gray-400 block px-4 py-2 text-white uppercase active' :
                                  'hover:text-gray-400 block px-4 py-2 text-white uppercase'}>
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;