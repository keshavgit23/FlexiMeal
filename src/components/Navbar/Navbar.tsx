
// export default Navbar;
import { useEffect, useState } from "react";
import Button from "../ui/Buttons/Button.tsx";
import BrandLogo from "../../assets/BrandLogo.jpeg";

type UserRole = "visitor" | "student" | "owner";

interface NavbarProps {
    currentRole: UserRole;
    activeTab: string;
    onTabChange: (tab: string) => void;
    onRoleChange?: (role: UserRole) => void;
}

const visitorLinks = [
    { label: "Home", tab: "home" },
    { label: "Explore Messes", tab: "explore" },
    { label: "How It Works", tab: "how-it-works" },
    { label: "For Students", tab: "for-students" },
    { label: "For Mess Owners", tab: "for-owners" },
];

// const studentLinks = [
//     { label: "Dashboard", tab: "student-dash", icon: "fa-chart-line" },
//     { label: "Explore Messes", tab: "explore", icon: "fa-compass" },
//     { label: "My Bookings", tab: "student-orders", icon: "fa-receipt" },
//     { label: "Attendance", tab: "student-attendance", icon: "fa-calendar-check" },
// ];

// const ownerLinks = [
//     { label: "Partner Hub", tab: "owner-dash", icon: "fa-gauge" },
//     { label: "Menu Manager", tab: "owner-menu", icon: "fa-book-open" },
//     { label: "Demand AI", tab: "owner-demand", icon: "fa-chart-pie" },
//     { label: "Subscribers", tab: "owner-subscribers", icon: "fa-users" },
// ];

function Navbar({
    activeTab,
    onTabChange,
    onRoleChange,
}: NavbarProps) {
    // Hamburger opens below `lg` (1024px); nav links live inline from `lg` up.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Guard against the menu staying "open" in state if the viewport is
    // resized past `lg` while it's expanded (e.g. rotating a tablet).
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const closeIfDesktop = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) setIsMenuOpen(false);
        };
        closeIfDesktop(mediaQuery);
        mediaQuery.addEventListener("change", closeIfDesktop);
        return () => mediaQuery.removeEventListener("change", closeIfDesktop);
    }, []);

    const handleRoleChange = (role: UserRole, tab: string) => {
        onRoleChange?.(role);
        onTabChange(tab);
        setIsMenuOpen(false);
    };

    const handleTabChange = (tab: string) => {
        onTabChange(tab);
        setIsMenuOpen(false);
    };

    return (
        <header className="relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8">
                    {/* Brand */}
                    <button
                        type="button"
                        onClick={() => handleRoleChange("visitor", "home")}
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
                                Smart Mess Tech
                            </p>
                        </div>
                    </button>

                    {/* Desktop nav — inline from lg (1024px) up */}
                    <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
                        {visitorLinks.map((link) => (
                            <a
                                key={link.tab}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onTabChange(link.tab);
                                }}
                                className={activeTab === link.tab ? "nav-link-active" : "nav-link"}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center justify-end gap-3">
                        {/* Desktop-only actions, mirrors the nav's lg cutoff */}
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
                            onClick={() => onTabChange("explore")}
                        >
                            🍽️ Order a Meal
                        </Button>
                        </div>

                        {/* Hamburger toggle — only below lg. Reuses .nav-link
                            for color/hover, so it inherits the exact same
                            token-driven states as the desktop links. */}
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu-panel"
                            className="bg-red-500 text-white p-4 lg:hidden rounded-xl"
                        >
                            <i
                                className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            {isMenuOpen && (
                <div
                    id="mobile-menu-panel"
                    className="lg:hidden absolute inset-x-0 top-full z-50 border-t border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)]"
                >
                    <nav className="flex flex-col px-4 py-4 sm:px-6 items-center">
                        {visitorLinks.map((link) => (
                            <a
                                key={link.tab}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleTabChange(link.tab);
                                }}
                                className={`${activeTab === link.tab ? "nav-link-active" : "nav-link"} py-3 text-base font-semibold`}
                            >
                                {link.label}
                            </a>
                        ))}
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
                            onClick={() => handleTabChange("explore")}
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