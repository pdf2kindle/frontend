"use client";

import { FileUpload } from "./file-upload";
import { EmailInput } from "./email-input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { API_ENDPOINTS } from "@/lib/constants";
import { convertToBase64 } from "@/lib/file-utils";

export function UploadSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your Kindle email address",
        variant: "destructive",
      });
      return;
    }
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to send",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const attachments = await Promise.all(
        files.map(async (file) => ({
          filename: file.name,
          content: await convertToBase64(file)
        }))
      );

      const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          subject: "Documents from PDF2Kindle",
          text: "Your documents are attached.",
          attachments,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Documents sent to your Kindle",
        });
        setFiles([]);
        setEmail("");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send documents. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <EmailInput value={email} onChange={setEmail} />
      <FileUpload files={files} onFilesChange={setFiles} />
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          "Sending..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send to Kindle
          </>
        )}
      </Button>
    </form>
  );
}