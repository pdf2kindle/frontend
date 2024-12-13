import { BookOpen } from "lucide-react";
import { UploadSection } from "@/components/upload-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">PDF to Kindle</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Send your documents directly to your Kindle device. Support for PDF, EPUB, MOBI, and more.
            Fast, secure, and easy to use.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-xl p-6 md:p-8">
          <UploadSection />

          <div className="mt-8 pt-6 border-t border-border">
            <h2 className="text-lg font-semibold mb-4">How it works</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-medium mb-2">1. Upload Files</h3>
                <p className="text-sm text-muted-foreground">
                  Select your documents (PDF, EPUB, MOBI, etc.)
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-medium mb-2">2. Enter Email</h3>
                <p className="text-sm text-muted-foreground">
                  Add your Kindle email address
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-medium mb-2">3. Send</h3>
                <p className="text-sm text-muted-foreground">
                  Click send and receive on your Kindle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}