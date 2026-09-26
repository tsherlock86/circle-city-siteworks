import "./globals.css";

export const metadata = {
  title: "Circle City Siteworks | Websites for Indianapolis Businesses",
  description: "Modern websites, online stores, and custom business tools for Indianapolis and local businesses.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
