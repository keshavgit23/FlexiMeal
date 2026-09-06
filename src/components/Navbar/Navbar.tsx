import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../ui/Buttons/Button.tsx";
import BrandLogo from "../../assets/BrandLogo.jpeg";

type UserRole = "visitor" | "student" | "owner";

interface NavbarProps {
    currentRole: UserRole;
    onRoleChange?: (role: UserRole) => void;
}

const visitorLinks = [
    { label: "Home", path: "/" },
    { label: "Explore Messes", path: "/explore-messes" },
    // { label: "How It Works", path: "/how-it-works" },
    { label: "For Students", path: "/for-students" },
    { label: "For Mess Owners", path: "/for-messes" },
];

function Navbar({
    onRoleChange,
}: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const closeIfDesktop = (
            e: MediaQueryListEvent | MediaQueryList
        ) => {
            if (e.matches) {
                setIsMenuOpen(false);
            }
        };
        closeIfDesktop(mediaQuery);

        mediaQuery.addEventListener("change", closeIfDesktop);

        return () => {
            mediaQuery.removeEventListener("change", closeIfDesktop);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8">
                    {/* Brand */}
                    <Link
                        to="/"
                        onClick={() => {
                            setIsMenuOpen(false);
                            onRoleChange?.("visitor");
                        }}
                        className="group flex items-center gap-3"
                    >
                        <div className="h-12 w-12 overflow-hidden rounded-full shadow-md transition-transform group-hover:scale-105">
                            <img
                                src={BrandLogo}
                                alt="FlexiMeal"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="text-left">
                            <span className="font-heading text-2xl font-extrabold tracking-tight text-gray-900 transition group-hover:text-brand-tomato">
                                Flexi<span className="text-brand-saffron">Meal</span>
                            </span>

                            <p className="-mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                Choice Made Simple
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
                        {visitorLinks.map((link) => {
                            const isActive =
                                location.pathname === link.path;

                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center justify-end gap-3">

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button
                                variant="outline"
                                className="!border-2 !border-gray-200 text-[11px]"
                                onClick={() => {
                                    // Clerk login
                                }}
                            >
                                Student Login
                            </Button>

                            <Button
                                variant="primary"
                                className="hidden"
                                onClick={() => {
                                    // Future route
                                }}
                            >
                                🍽️ Order a Meal
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() =>
                                setIsMenuOpen((prev) => !prev)
                            }
                            aria-label={
                                isMenuOpen
                                    ? "Close menu"
                                    : "Open menu"
                            }
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu-panel"
                            className="bg-red-500 text-white p-4 lg:hidden rounded-xl"
                        >
                            <i
                                className={`fa-solid ${
                                    isMenuOpen
                                        ? "fa-xmark"
                                        : "fa-bars"
                                }`}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    id="mobile-menu-panel"
                    className="lg:hidden absolute inset-x-0 top-full z-50 border-t border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)]"
                >
                    <nav className="flex flex-col px-4 py-4 sm:px-6 items-center">
                        {visitorLinks.map((link) => {
                            const isActive =
                                location.pathname === link.path;

                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() =>
                                        setIsMenuOpen(false)
                                    }
                                    className={`${
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    } py-3 text-base font-semibold`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex flex-col gap-3 border-t border-[var(--color-border-subtle)] px-4 py-4 sm:px-6">
                        <Button
                            variant="outline"
                            className="w-full justify-center !border-2 !border-gray-200 text-[11px]"
                            onClick={() => {
                                setIsMenuOpen(false);
                                // Clerk login
                            }}
                        >
                            Student Login
                        </Button>

                        <Button
                            variant="primary"
                            className="w-full justify-center"
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                        >
                            🍽️ Order a Meal
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;