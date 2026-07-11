import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights and Articles",
  description:
    "Read articles and insights from Elite Ayomide on crypto, trading strategy, and digital growth.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
