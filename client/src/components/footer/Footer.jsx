import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className="bg-black text-gray-300 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* About Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">About Us</h3>
                            <p className="text-sm">
                                We share insightful articles on technology, programming, and design. Stay tuned for more
                                updates.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                            <ul className="flex space-x-4">
                                <li><a href="#" className="hover:text-white"><i
                                    className="fab fa-facebook"></i> Facebook</a></li>
                                <li><a href="#" className="hover:text-white"><i className="fab fa-twitter"></i> Twitter</a>
                                </li>
                                <li><a href="#" className="hover:text-white"><i
                                    className="fab fa-instagram"></i> Instagram</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
                            <p className="text-sm mb-3">Sign up for our newsletter to receive the latest updates.</p>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 w-full bg-gray-800 text-white border border-gray-600 rounded-l focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 px-4 py-2 rounded-r text-white hover:bg-blue-700"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                        <p className="text-sm">&copy; 2024 Your Blog Name. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;