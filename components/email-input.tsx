"use client";

import { Input } from "@/components/ui/input";
import { isKindleEmail } from "@/lib/utils";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isKindleEmail(newValue)) {
      onChange(newValue);
    } else {
      console.warn("Invalid email domain. Please use a kindle.com email.");
    }
  };

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
        onChange={handleChange}
        className="w-full"
      />
    </div>
  );
}