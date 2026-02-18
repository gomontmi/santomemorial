// ============================================================
// SANTO MEMORIAL — Lógica da Aplicação
// ============================================================

// --- MENU MÓVEL ---
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}

// --- CONSTRUIR CARTÃO DE SANTO ---
function buildCard(saint) {
  const padroeiros = saint.padroeiro.slice(0, 2).join(', ');
  const categorias = saint.categorias.slice(0, 2).join(', ');
  
  return `
    <article class="saint-card" onclick="window.location='saint.html?id=${saint.id}'">
      <div class="card-top">
        <span class="card-cross">✦</span>
      </div>
      <div class="card-body">
        <p class="card-feast">${saint.festa}</p>
        <h3 class="card-name">${saint.nome}</h3>
        <p class="card-origin">✦ ${saint.origem}</p>
        <p class="card-summary">${saint.resumo}</p>
        <p class="card-patron"><em>Ajuda em:</em> ${categorias}</p>
        <a href="saint.html?id=${saint.id}" class="card-link">Ler Mais →</a>
      </div>
    </article>
  `;
}

// --- HOMEPAGE: SANTOS EM DESTAQUE ---
function initFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = saintsData.filter(s => s.destaque);
  grid.innerHTML = featured.map(buildCard).join('');
}

// --- HOMEPAGE: PESQUISA ---
function searchSaints() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsDiv = document.getElementById('searchResults');

  if (!query) {
    resultsDiv.classList.add('hidden');
    resultsDiv.innerHTML = '';
    return;
  }

  const matches = saintsData.filter(s =>
    s.nome.toLowerCase().includes(query) ||
    s.padroeiro.some(p => p.toLowerCase().includes(query)) ||
    s.categorias.some(c => c.toLowerCase().includes(query)) ||
    s.festa.toLowerCase().includes(query) ||
    s.origem.toLowerCase().includes(query) ||
    s.resumo.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsDiv.innerHTML = '<p class="no-results">Nenhum santo encontrado. Tente uma pesquisa diferente.</p>';
  } else {
    resultsDiv.innerHTML = matches.map(s => `
      <a href="saint.html?id=${s.id}" class="search-result-item">
        <strong>${s.nome}</strong>
        <span>${s.festa} · ${s.categorias[0]}</span>
      </a>
    `).join('');
  }

  resultsDiv.classList.remove('hidden');
}

// --- HOMEPAGE: FILTRAR POR CATEGORIA ---
function filterByCategory(category) {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;
  
  const matches = saintsData.filter(s => 
    s.categorias.some(c => c.toLowerCase().includes(category.toLowerCase()))
  );
  
  if (matches.length === 0) {
    grid.innerHTML = `<p class="no-results" style="text-align:center; color: var(--gold); font-style:italic;">Nenhum santo listado para ${category} ainda.</p>`;
  } else {
    grid.innerHTML = matches.map(buildCard).join('');
  }
  
  grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- PÁGINA DE SANTOS: INIT ---
function initSaintsPage() {
  // Preencher dropdown de categorias
  const allCategories = [...new Set(saintsData.flatMap(s => s.categorias))].sort();
  const select = document.getElementById('categoryFilter');
  if (select) {
    allCategories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      select.appendChild(opt);
    });
  }

  renderAllSaints(saintsData);
}

function renderAllSaints(data) {
  const grid = document.getElementById('allSaintsGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('resultsCount');

  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    if (count) count.textContent = '';
  } else {
    empty.classList.add('hidden');
    grid.innerHTML = data.map(buildCard).join('');
    if (count) count.textContent = `A mostrar ${data.length} santo${data.length !== 1 ? 's' : ''}`;
  }
}

function filterSaintsPage() {
  const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const month = document.getElementById('monthFilter')?.value || '';
  const category = document.getElementById('categoryFilter')?.value || '';

  let results = saintsData;

  if (query) {
    results = results.filter(s =>
      s.nome.toLowerCase().includes(query) ||
      s.resumo.toLowerCase().includes(query) ||
      s.origem.toLowerCase().includes(query) ||
      s.festa.toLowerCase().includes(query) ||
      s.categorias.some(c => c.toLowerCase().includes(query))
    );
  }

  if (month) {
    results = results.filter(s => s.mes.toLowerCase() === month.toLowerCase());
  }

  if (category) {
    results = results.filter(s => s.categorias.includes(category));
  }

  renderAllSaints(results);
}

function resetFilters() {
  if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
  if (document.getElementById('monthFilter')) document.getElementById('monthFilter').value = '';
  if (document.getElementById('categoryFilter')) document.getElementById('categoryFilter').value = '';
  renderAllSaints(saintsData);
}

// --- PÁGINA DE PERFIL DO SANTO ---
function loadSaintProfile() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const saint = saintsData.find(s => s.id === id);
  const container = document.getElementById('saintProfile');

  if (!saint || !container) {
    if (container) container.innerHTML = '<div class="container" style="text-align:center; padding: 4rem;"><p>Santo não encontrado. <a href="saints.html">Regressar a todos os santos →</a></p></div>';
    return;
  }

  // Atualizar título da página e breadcrumb
  document.getElementById('pageTitle').textContent = `${saint.nome} – Santo Memorial`;
  const bc = document.getElementById('breadcrumbName');
  if (bc) bc.textContent = saint.nome;

  const notableItems = saint.notavel.map(n => `<li>${n}</li>`).join('');
  const patronItems = saint.padroeiro.map(p => `<span class="patron-tag">${p}</span>`).join('');
  const categoriaItems = saint.categorias.map(c => `<span class="category-tag">${c}</span>`).join('');

  container.innerHTML = `
    <div class="container">
      <div class="profile-header">
        <div class="profile-cross">✦</div>
        <p class="profile-feast">Dia de Festa: ${saint.festa}</p>
        <h1 class="profile-name">${saint.nome}</h1>
        <p class="profile-origin">${saint.origem} · ${saint.nascimento} – ${saint.falecimento}</p>
        <div class="profile-meta">
          <div class="profile-patrons">
            <strong>Padroeiro de:</strong>
            ${patronItems}
          </div>
          <div class="profile-categories">
            <strong>Ajuda em:</strong>
            ${categoriaItems}
          </div>
        </div>
      </div>

      <div class="profile-body">
        <div class="profile-summary">
          <p>${saint.resumo}</p>
        </div>

        <div class="profile-story">
          <h2>Vida e História</h2>
          <p>${saint.historia}</p>
        </div>

        <div class="profile-notable">
          <h2>Porquê Notável</h2>
          <ul>${notableItems}</ul>
        </div>
      </div>
    </div>
  `;

  // Carregar santos relacionados
  const related = saintsData.filter(s => s.id !== id).slice(0, 3);
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    relatedGrid.innerHTML = related.map(buildCard).join('');
  }
}

// --- INIT NO CARREGAMENTO DA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
  initFeatured();
  // Bindings de filtros da página de santos
  const searchInput = document.getElementById('searchInput');
  if (searchInput && document.getElementById('allSaintsGrid')) {
    searchInput.addEventListener('input', filterSaintsPage);
  }
});
