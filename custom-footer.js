document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("div");
  footer.className = "site-footer";
  footer.innerHTML = `
    Parte do conteúdo deste site é adaptado da
    <a href="https://witcher.fandom.com/wiki/Witcher_Wiki">Witcher Wiki (Fandom)</a>,
    sob licença <a href="https://www.gnu.org/licenses/fdl-1.3.html">GFDL 1.3</a>.<br>
    Informações adicionais também baseadas na
    <a href="https://witcher.fandom.com/pt-br/">The Witcher Wiki (pt-BR)</a>.<br><br>
    Entretanto, é principalmente inspirado na obra do mestre Andrzej Sapkowski.
  `;
  document.body.appendChild(footer);
});
