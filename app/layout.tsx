import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import QueryProvider from "@/providers/query-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "FixItNow | Professional On-Demand Home Services",
  description:
    "Book trusted technicians for plumbing, electrical, appliance repair, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* <AuthProvider> */}
        <QueryProvider>
          <ToastProvider>
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center bg-slate-50">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              {children}
            </Suspense>
          </ToastProvider>
        </QueryProvider>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
