export const siteConfig = {
  name: "US Plombières Basket",
  siteName: "US Plombières Basket | Club basket Dijon et Côte-d'Or",
  description:
    "US Plombières Basket, club basket Dijon à Plombières-lès-Dijon en Côte-d'Or. Actualités, équipes, informations club et contact.",
  locale: "fr_FR",
  keywords: [
    "basket",
    "basket-ball",
    "dijon",
    "côte d'or",
    "cote d'or",
    "cote dor",
    "plombieres les dijon",
    "plombières-lès-dijon",
    "dijon basket",
    "dijon club basket",
    "club basket Dijon",
    "club basket cote d'or",
    "club basket côte d'or",
    "club de basket dijon",
    "club basket dijonnais",
    "basket Plombieres-les-Dijon",
    "basket Plombières-lès-Dijon",
    "US Plombières Basket",
  ],
  paths: ["/", "/actualites", "/le-club", "/equipes", "/contact"],
};

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.usplombieres-basket.fr";
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}