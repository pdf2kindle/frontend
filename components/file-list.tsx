"use client";

import { FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
}

export function FileList({ files, onRemove }: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="space-y-2">
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-secondary rounded-lg"
        >
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{file.name}</span>
            <span className="text-xs text-muted-foreground">
              ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(index)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}