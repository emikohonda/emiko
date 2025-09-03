'use client';

import Link from "next/link";
import '@/styles/layout.css';
import { useEffect, useState } from "react";

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#works', label: 'Works' },
    { href: '#profile', label: 'Profile' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // 一番画面上に近い交差中のセクションを探す
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                threshold: 0.3,
                rootMargin: '-50px 0px -40% 0px', // ← 固定ヘッダーの高さ考慮
            }
        );

        const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="logo">
                    <Link href="/">.emiko</Link>
                </div>

                <button
                    className="nav-toggle menu-btn"
                    onClick={toggleMenu}
                    aria-label="MENU"
                    aria-expanded={isOpen}
                >
                    ☰
                </button>

                <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map(({ href, label }) => {
                            const sectionId = href.replace('#', '');
                            const isActive = activeSection === sectionId;

                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={isActive ? 'active' : ''}
                                        onClick={() => {
                                            setIsOpen(false);
                                            setActiveSection(sectionId);
                                        }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
