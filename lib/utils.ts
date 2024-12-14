import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isKindleEmail(email: string): boolean {
  const domain = email.split('@')[1];
  return domain === 'kindle.com';
}
