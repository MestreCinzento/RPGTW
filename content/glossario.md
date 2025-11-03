<div id="fs-source" style="display:none">
  <List dir="/Anos" pageSize={9999} />
  <List dir="/Assuntos Inacabados" pageSize={9999} />
  <List dir="/Bestiário" pageSize={9999} />
  <List dir="/Entidades" pageSize={9999} />
  <List dir="/Espécies, raças e tipos" pageSize={9999} />
  <List dir="/Geografia e Política" pageSize={9999} />
  <List dir="/Itens" pageSize={9999} />
  <List dir="/Linhagens" pageSize={9999} />
  <List dir="/Personas" pageSize={9999} />
  <List dir="/Sessões" pageSize={9999} />
  <List dir="/content" pageSize={9999} />
</div>

<div id="glossario"></div>

<script>
(function () {
  const src = document.getElementById('fs-source');
  if (!src) return;

  const rawLinks = Array.from(src.querySelectorAll('a'))
    .map(a => ({ title: a.textContent.trim(), href: a.getAttribute('href') }))
    .filter(x => x.title && x.href);

  const dedup = [];
  const seen = new Set();
  for (const x of rawLinks) {
    if (seen.has(x.href)) continue;
    seen.add(x.href);
    dedup.push(x);
  }

  const groups = {};
  for (const { title, href } of dedup) {
    const first = title[0]
      ?.toUpperCase()
      ?.normalize('NFD')
      ?.replace(/[^A-Z]/g, '#') || '#';
    const key = (first >= 'A' && first <= 'Z') ? first : '#';
    (groups[key] ||= []).push({ title, href });
  }

  const letters = Object.keys(groups).sort();
  for (const L of letters) {
    groups[L].sort((a,b) => a.title.localeCompare(b.title, 'pt-BR'));
  }

  const out = document.getElementById('glossario');
  out.innerHTML = letters.map(L => {
    const items = groups[L].map(({title, href}) => `<li><a href="${href}">${title}</a></li>`).join('');
    const open = (L === 'A') ? ' open' : '';
    return `<details${open} class="glossario-section">
      <summary>${L}</summary>
      <ul class="glossario-list">${items}</ul>
    </details>`;
  }).join('');
})();
</script>
