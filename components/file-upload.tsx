"use client";

import { useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { FILE_CONSTRAINTS } from "@/lib/constants";
import { Dropzone } from "./dropzone";
import { FileList } from "./file-list";

interface FileUploadProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
}

export function FileUpload({ files, onFilesChange }: FileUploadProps) {
  const { toast } = useToast();

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      const extension = `.${file.name.split('.').pop()?.toLowerCase()}`;
      if (!FILE_CONSTRAINTS.ALLOWED_EXTENSIONS.includes(extension)) {
        toast({
          title: "Invalid file type",
          description: `File ${file.name} is not supported. Allowed types: ${FILE_CONSTRAINTS.ALLOWED_EXTENSIONS.join(", ")}`,
          variant: "destructive",
        });
        return false;
      }
      if (file.size > FILE_CONSTRAINTS.MAX_FILE_SIZE) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds 5MB limit`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });

    onFilesChange([...files, ...validFiles]);
  }, [files, onFilesChange, toast]);

  const removeFile = (index: number) => {
    onFilesChange(files.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full space-y-4">
      <Dropzone onDrop={handleDrop} />
      <FileList files={files} onRemove={removeFile} />
    </div>
  );
}