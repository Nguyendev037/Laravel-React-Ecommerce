import WebsiteLayout from '@/components/website/website-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface WebSiteLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: WebSiteLayoutProps) => (
    <WebsiteLayout breadcrumbs={breadcrumbs} {...props}>
        {children}
    </WebsiteLayout>
);
