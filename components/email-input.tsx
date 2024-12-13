"use client";

import { Input } from "@/components/ui/input";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium">
        Kindle Email Address
      </label>
      <Input
        id="email"
        type="email"
        placeholder="your.kindle@kindle.com"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
}