export const siteConfig = {
  name: "US Plombières Basket",
  siteName: "US Plombières Basket | Club de basket-ball à Plombières-lès-Dijon",
  description:
    "US Plombières Basket, club de basket-ball à Plombières-lès-Dijon près de Dijon. Actualités, équipes, informations club et contact du club basket dijonnais.",
  locale: "fr_FR",
  keywords: [
    "basket",
    "basket-ball",
    "dijon",
    "plombieres les dijon",
    "plombières-lès-dijon",
    "dijon basket",
    "dijon club basket",
    "club basket Dijon",
    "basket Plombieres-les-Dijon",
    "basket Plombières-lès-Dijon",
    "US Plombières Basket",
  ],
  paths: ["/le-club", "/equipes", "/actualites", "/contact"],
};

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.usplombieres-basket.fr";
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}