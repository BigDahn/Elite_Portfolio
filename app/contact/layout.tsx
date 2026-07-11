import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Elite Ayomide",
  description:
    "Contact Elite Ayomide to discuss crypto consulting, mentorship, brand strategy, or collaboration opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
