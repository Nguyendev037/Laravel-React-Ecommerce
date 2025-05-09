import { type BreadcrumbItem } from '@/types';
import { ReactNode } from 'react';
import AppFooter from './app-footer';
import AppNavbar from './app-navbar';

export interface AppLayoutTemplateProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function WebsiteLayout({ children, breadcrumbs }: AppLayoutTemplateProps) {
    return (
        <div className="container w-full h-full pt-4 mx-auto flex flex-col justify-between pt">

            <div>
                <AppNavbar breadcrumbs={breadcrumbs} />
            </div>

            {/* Main Content */}
            <div className="">
                {/* Page Content */}
                <main className="overflow-y-auto p-6">{children}</main>
            </div>

            <footer className="text-center text-sm text-gray-600 shadow-inner">
                <AppFooter />
            </footer>

        </div>
    );
}
