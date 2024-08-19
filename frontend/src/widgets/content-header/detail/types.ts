import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';

export type ActiveBarVariants = 'general' | 'metric';

export type ContentHeaderDetailProps = {
  title: string;
  description: string;
  date: string;
  goals: string[];
  breadcrumbs: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] | undefined;
};

