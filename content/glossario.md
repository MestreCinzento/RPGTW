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

<!-- 2) Saída final com abas -->
<div id="glossario"></div>

<!-- 3) Script: agrupa A-Z, remove duplicados e monta <details> -->
<script>
(function () {
  const src = document.getElementById('fs-source');
  if (!src) return;

  // coleta todos os links das listas
  const rawLinks = Array.from(src.querySelectorAll('a'))
    .map(a => ({ title: a.textContent.trim(), href: a.getAttribute('href') }))
    .filter(x => x.title && x.href);

  // remove duplicados (mesmo href)
  const dedup = [];
  const seen = new Set();
  for (const x of rawLinks) {
    if (seen.has(x.href)) continue;
    seen.add(x.href);
    dedup.push(x);
  }

  // agrupa por prime
