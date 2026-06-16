import { useEffect } from "react";

type Meta = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [k, v] = selector.replace("meta[", "").replace("]", "").split("=");
    el.setAttribute(k, v.replace(/['"]/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function usePageMeta({ title, description, ogTitle, ogDescription }: Meta) {
  useEffect(() => {
    document.title = title;
    if (description) setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", ogTitle ?? title);
    if (ogDescription || description) {
      setMeta('meta[property="og:description"]', "content", ogDescription ?? description ?? "");
    }
    // Canonical
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.origin + window.location.pathname);
  }, [title, description, ogTitle, ogDescription]);
}
