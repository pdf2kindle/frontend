"use client";

import { Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { FILE_CONSTRAINTS } from "@/lib/constants";

interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

export function Dropzone({ onDrop }: DropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: FILE_CONSTRAINTS.MIME_TYPES
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? "border-primary bg-primary/5" : "border-border"}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
      <p className="mt-2 text-sm text-muted-foreground">
        Drag & drop files here, or click to select files
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Supported formats: PDF, EPUB, MOBI, DJVU, PUB (Max 5MB)
      </p>
    </div>
  );
}