---
title: Glossário
---

import { usePages } from "reactflow";
import { Link } from "reactflow";

export default function Glossario() {
  const pages = usePages();

  // pega só páginas públicas com título
  const items = pages
    .filter(p => p.title && !p.url.includes("glossario"))
    .map(p => ({ title: p.title, url: p.url }))
    .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));

  return (
    <div>
      <h1>Glossário</h1>
      <ul>
        {items.map(item => (
          <li key={item.url}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
