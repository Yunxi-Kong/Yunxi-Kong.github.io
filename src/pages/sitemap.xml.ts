import type { APIRoute } from "astro";
import { projects } from "../data/projects";
import { writing } from "../data/writing";
import { updated } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  const routes = ["/", "/about/", "/cv/", "/research/", "/projects/", "/publications/", "/writing/",
    ...projects.map(p => `/projects/${p.slug}/`), ...writing.map(p => p.url)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${new URL(route, site)}</loc><lastmod>${updated}</lastmod></url>`).join("")}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
