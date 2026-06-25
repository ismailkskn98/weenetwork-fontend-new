export const WEEMENU_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.weenetwork.menu/weemenu";

export function resolveImageUrl(path) {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("blob:") || path.startsWith("data:")) {
    return path;
  }
  return `${WEEMENU_BACKEND_URL}${path}`;
}

export function hasMenuImage(menu, type = "any") {
  if (!menu) return false;
  if (type === "logo") return Boolean(menu.logo_image);
  if (type === "background") return Boolean(menu.background);
  return Boolean(menu.logo_image || menu.background);
}

export function getMenuDisplayImage(menu, prefer = "logo") {
  if (!menu) return null;
  if (prefer === "background") return menu.background || menu.logo_image || null;
  return menu.logo_image || menu.background || null;
}

export function pickMenus(menus, picks) {
  const usedIds = new Set();

  return picks.map(({ type = "any" }) => {
    const menu = menus.find((item) => {
      if (usedIds.has(item.id)) return false;
      if (type === "logo") return Boolean(item.logo_image);
      if (type === "background") return Boolean(item.background);
      if (type === "any") return hasMenuImage(item);
      return true;
    });

    if (menu) usedIds.add(menu.id);
    return menu ?? null;
  });
}

export function resolveMenuImages(menu) {
  if (!menu) return menu;

  return {
    ...menu,
    logo_image: resolveImageUrl(menu.logo_image),
    background: resolveImageUrl(menu.background),
  };
}

export async function fetchLatestMenus(locale, limit = 12) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://api.weenetwork.menu/api/weemenu/v1";
  const url = `${baseUrl}/public/latest-menus?limit=${limit}&locale=${encodeURIComponent(locale)}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];

  const json = await res.json();
  const menus = Array.isArray(json?.data) ? json.data : [];

  return menus.map(resolveMenuImages);
}
