import React from 'react';

interface SidebarProps {
    children?: React.ReactNode;
}

interface NavItem {
    href: string;
    label: string;
    isActive?: boolean;
}

const navigationItems: NavItem[] = [
    {
        href: '/profil',
        label: 'My Profile',
        isActive: true
    },
    {
        href: '/profil/security',
        label: 'Security'
    },
    {
        href: '/profil/teams',
        label: 'Teams'
    },
    {
        href: '/profil/team-member',
        label: 'Team Member'
    }, {
        href: '/profil/notifications',
        label: 'Notifications'
    }, {
        href: '/profil/billing',
        label: 'Billing'
    }, {
        href: '/profil/data-export',
        label: 'Data Export'
    },
];

export function Sidebar({children} : SidebarProps) {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <aside className="w-full md:w-[19rem] bg-white border-r border-gray-200 p-4">
                <nav className="flex flex-col gap-2">
                    <div className="w-full flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-2 md:pb-0 mb-4 md:mb-0">
                        {navigationItems.map((item) => (
                            <a key={item.href}
                                href={item.href}
                                className={`py-2 px-4 font-medium rounded-lg whitespace-nowrap ${item.isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <div className="md:mt-auto hidden md:block">
                        <button className="py-2 px-4 text-red-500 font-medium rounded-lg transition hover:bg-red-50">
                            Delete Account
                        </button>
                    </div>
                </nav>
            </aside>
            <main className="flex-1 p-4 md:p-6">
                <div className="w-full bg-gray-50 p-4 md:p-6 rounded-xl">
                    {children}
                </div>
            </main>
        </div>
    );
}
