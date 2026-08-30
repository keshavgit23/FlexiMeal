import React from 'react';
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/BrandLogo.jpeg";

interface FooterLink {
    label: string;
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface FooterLinkGroup {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    iconClass: string;
    href: string;
    label: string;
}

const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
    {
        title: 'Product',
        links: [
            { label: 'Explore Messes', href: '/explore-messes' },
            // { label: 'How It Works', href: '#' },
            { label: 'For Students', href: '/for-students' },
            { label: 'For Mess Owners', href: '/for-messes' },
        ],
    },
    {
        title: 'For Students',
        links: [
            { label: 'Pay-As-You-Go', href: '/for-students#payg-loop' },
            { label: 'Flexible Subscriptions', href: '/for-students#monthly-loop' },
            { label: 'Skip Meal Credits', href: '/for-students#bookings-history' },
            { label: 'Campus Partners', href: '/explore-messes' },
        ],
    },
    {
        title: 'Contact & Legal',
        links: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Partner Helpline', href: '#' },
            { label: 'support@fleximeal.in', href: '#' },
        ],
    },
];

const SOCIAL_LINKS: SocialLink[] = [
    { iconClass: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
    { iconClass: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    { iconClass: 'fa-brands fa-x-twitter', href: '#', label: 'X (formerly Twitter)' },
];

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-12 border-t border-gray-800" id="main-footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column (Spans 2 cols) */}
                    <div className="col-span-2 flex flex-col gap-3">
                        <Link
                            to="/"
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                });
                            }}
                            className="flex items-center gap-3 group"
                        >
                            <div className="w-12 h-12 overflow-hidden rounded-full shadow-sm transition-transform group-hover:scale-105">
                                <img
                                    src={BrandLogo}
                                    alt="FlexiMeal"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <span className="font-heading font-extrabold text-2xl font-['Outfit',sans-serif]">
                                Flexi<span className="text-brand-saffron text-[#FF6B00]">Meal</span>
                            </span>
                        </Link>
                        <p className="text-xs text-gray-400 mt-3 max-w-sm leading-relaxed">
                            FlexiMeal is a smart mess-food platform giving students meal flexibility while empowering mess owners with predictive demand prediction.
                        </p>
                        <p className="text-xs text-amber-400 font-bold mt-4">
                            “Your Meal. Your Choice. Your Flexibility.”
                        </p>
                    </div>

                    {/* Dynamic Link Groups */}
                    {FOOTER_LINK_GROUPS.map((group) => (
                        <div key={group.title} className="flex flex-col gap-3">
                            <h4 className="font-bold text-sm text-gray-200 mb-4 font-heading font-['Outfit',sans-serif]">
                                {group.title}
                            </h4>
                            <ul className="space-y-2 text-xs text-gray-400">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        {/* <a
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(link.label, e)}
                                            className="hover:!text-white transition duration-150"
                                        >
                                            {link.label}
                                        </a> */}
                                        <Link
                                            to={link.href}
                                            className="hover:!text-white transition duration-150"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar: Copyright & Socials */}
                <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
                    <p>© 2026 FlexiMeal Tech Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0 text-base">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="hover:text-brand-saffron hover:text-[#FF6B00] transition duration-150"
                            >
                                <i className={social.iconClass} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
