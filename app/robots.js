export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://circlecitysiteworks.com/sitemap.xml",
    host: "https://circlecitysiteworks.com",
  };
}
