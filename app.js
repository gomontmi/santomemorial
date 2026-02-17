// ============================================================
// SANTO MEMORIAL — Application Logic
// ============================================================

// --- MOBILE MENU ---
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}

// --- BUILD A SAINT CARD ---
function buildCard(saint) {
  const patrons = saint.patronOf.slice(0, 2).join(', ');
  return `
    <article class="saint-card" onclick="window.location='saint.html?id=${saint.id}'">
      <div class="card-top">
        <span class="card-cross">✦</span>
      </div>
      <div class="card-body">
        <p class="card-feast">${saint.feast}</p>
        <h3 class="card-name">${saint.name}</h3>
        <p class="card-origin">✦ ${saint.origin}</p>
        <p class="card-summary">${saint.summary}</p>
        <p class="card-patron"><em>Patron of:</em> ${patrons}</p>
        <a href="saint.html?id=${saint.id}" class="card-link">Read More →</a>
      </div>
    </article>
  `;
}

// --- HOMEPAGE: FEATURED SAINTS ---
function initFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = saintsData.filter(s => s.featured);
  grid.innerHTML = featured.map(buildCard).join('');
}

// --- HOMEPAGE: SEARCH ---
function searchSaints() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsDiv = document.getElementById('searchResults');

  if (!query) {
    resultsDiv.classList.add('hidden');
    resultsDiv.innerHTML = '';
    return;
  }

  const matches = saintsData.filter(s =>
    s.name.toLowerCase().includes(query) ||
    s.patronOf.some(p => p.toLowerCase().includes(query)) ||
    s.feast.toLowerCase().includes(query) ||
    s.origin.toLowerCase().includes(query) ||
    s.summary.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsDiv.innerHTML = '<p class="no-results">No saints found. Try a different search.</p>';
  } else {
    resultsDiv.innerHTML = matches.map(s => `
      <a href="saint.html?id=${s.id}" class="search-result-item">
        <strong>${s.name}</strong>
        <span>${s.feast} · ${s.origin}</span>
      </a>
    `).join('');
  }

  resultsDiv.classList.remove('hidden');
}

// --- HOMEPAGE: FILTER BY MONTH ---
function filterByMonth(month) {
  const grid = document.getElementById('monthGrid');
  if (!grid) return;
  const matches = saintsData.filter(s => s.month === month);
  if (matches.length === 0) {
    grid.innerHTML = `<p class="no-results" style="text-align:center; color: var(--gold); font-style:italic;">No saints listed for ${month} yet.</p>`;
  } else {
    grid.innerHTML = matches.map(buildCard).join('');
  }
  grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- SAINTS PAGE: INIT ---
function initSaintsPage() {
  // Populate patronages dropdown
  const allPatrons = [...new Set(saintsData.flatMap(s => s.patronOf))].sort();
  const select = document.getElementById('patronFilter');
  if (select) {
    allPatrons.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
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
    if (count) count.textContent = `Showing ${data.length} saint${data.length !== 1 ? 's' : ''}`;
  }
}

function filterSaintsPage() {
  const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const month = document.getElementById('monthFilter')?.value || '';
  const patron = document.getElementById('patronFilter')?.value || '';

  let results = saintsData;

  if (query) {
    results = results.filter(s =>
      s.name.toLowerCase().includes(query) ||
      s.summary.toLowerCase().includes(query) ||
      s.origin.toLowerCase().includes(query) ||
      s.feast.toLowerCase().includes(query)
    );
  }

  if (month) {
    results = results.filter(s => s.month === month);
  }

  if (patron) {
    results = results.filter(s => s.patronOf.includes(patron));
  }

  renderAllSaints(results);
}

function resetFilters() {
  if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
  if (document.getElementById('monthFilter')) document.getElementById('monthFilter').value = '';
  if (document.getElementById('patronFilter')) document.getElementById('patronFilter').value = '';
  renderAllSaints(saintsData);
}

// --- SAINT PROFILE PAGE ---
function loadSaintProfile() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const saint = saintsData.find(s => s.id === id);
  const container = document.getElementById('saintProfile');

  if (!saint || !container) {
    if (container) container.innerHTML = '<div class="container" style="text-align:center; padding: 4rem;"><p>Saint not found. <a href="saints.html">Return to all saints →</a></p></div>';
    return;
  }

  // Update page title and breadcrumb
  document.getElementById('pageTitle').textContent = `${saint.name} – Santo Memorial`;
  const bc = document.getElementById('breadcrumbName');
  if (bc) bc.textContent = saint.name;

  const notableItems = saint.notable.map(n => `<li>${n}</li>`).join('');
  const patronItems = saint.patronOf.map(p => `<span class="patron-tag">${p}</span>`).join('');

  container.innerHTML = `
    <div class="container">
      <div class="profile-header">
        <div class="profile-cross">✦</div>
        <p class="profile-feast">Feast Day: ${saint.feast}</p>
        <h1 class="profile-name">${saint.name}</h1>
        <p class="profile-origin">${saint.origin} · ${saint.born} – ${saint.died}</p>
        <div class="profile-patrons">${patronItems}</div>
      </div>

      <div class="profile-body">
        <div class="profile-summary">
          <p>${saint.summary}</p>
        </div>

        <div class="profile-story">
          <h2>Life & Story</h2>
          <p>${saint.story}</p>
        </div>

        <div class="profile-notable">
          <h2>Why Notable</h2>
          <ul>${notableItems}</ul>
        </div>
      </div>
    </div>
  `;

  // Load related saints
  const related = saintsData.filter(s => s.id !== id).slice(0, 3);
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    relatedGrid.innerHTML = related.map(buildCard).join('');
  }
}

// --- INIT ON PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
  initFeatured();
  // Saints page filter bindings
  const searchInput = document.getElementById('searchInput');
  if (searchInput && document.getElementById('allSaintsGrid')) {
    searchInput.addEventListener('input', filterSaintsPage);
  }
});
