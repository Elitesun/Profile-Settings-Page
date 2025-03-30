"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
    children?: React.ReactNode;
}

interface NavItem {
    href: string;
    label: string;
}

const navigationItems: NavItem[] = [
    { href: '/', label: 'My Profile' },
    { href: '/security', label: 'Security' },
    { href: '/teams', label: 'Teams' },
    { href: '/team-member', label: 'Team Member' },
    { href: '/notifications', label: 'Notifications' },
    { href: '/billing', label: 'Billing' },
    { href: '/data-export', label: 'Data Export' },
];

export function Sidebar({children} : SidebarProps) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <aside className="w-full md:w-[19rem] bg-white border-r border-gray-200 p-4">
                <nav aria-label="Sidebar Navigation" className="flex flex-col gap-2">
                    <div className="w-full flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-2 md:pb-0 mb-4 md:mb-0">
                        {navigationItems.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href}
                                className={`py-2 px-4 font-medium rounded-lg whitespace-nowrap transition-colors ${
                                    pathname === item.href 
                                    ? 'bg-blue-50 text-blue-600' 
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="md:mt-auto hidden md:block">
                        <button 
                            className="w-full py-2 px-4 text-red-500 font-medium rounded-lg transition-colors hover:bg-red-50"
                            aria-label="Delete Account"
                        >
                            Delete Account
                        </button>
                    </div>
                </nav>
            </aside>
            <main className="flex-1 md:p-6">
                <div className="w-full p-4 rounded-xl">
                    {children}
                </div>
            </main>
        </div>
    );
}
