'use client';
import { Button, Navbar } from 'flowbite-react';
import cart_image from "../assets/shopping-cart.png"


export default function NavbarWithCTAButton() {
    return (
        <Navbar
            fluid
            className='bg-gray-800 '
        >
            <Navbar.Brand href="/">
                <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src={cart_image}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-[#AAAAAA]">
                    ShopEase
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 bg-[#374961] hover:bg-[#516b8d] duration-300 rounded-lg">
                <Button className='text-white' >
                    Get started
                </Button>
                <Navbar.Toggle />
            </div>
            {/* <Navbar.Collapse>
                <Navbar.Link active href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse> */}
        </Navbar>
    )
}


