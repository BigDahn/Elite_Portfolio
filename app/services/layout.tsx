import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore crypto consulting, mentorship, private trading, content creation, and community growth services from Elite Ayomide.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
