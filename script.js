/* ==========================================================================
   BIZSPACE COMMERCIAL PROPERTY DISCOVERY & MANAGEMENT PLATFORM
   ========================================================================== */

/* ================= DEFAULT SEED DATA ================= */
const SEED_PROPERTIES = [
  {
    id: 1,
    name: "Prime Corner Retail Storefront",
    loc: "College Road · Nashik",
    city: "Nashik",
    rent: 38000,
    area: 620,
    type: "Shop / Retail",
    score: 94,
    icon: "🏬",
    tag: "High Footfall",
    parking: true,
    verified: true,
    featured: true,
    status: "approved",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Corner-facing high visibility retail space with glass frontage, high footfall zone, power backup, and dedicated parking. Ideal for clothing boutique, electronics, or pharmacy.",
    owner: "Rohan Properties",
    ownerId: "owner_1",
    phone: "+91 98220 12001"
  },
  {
    id: 2,
    name: "Urban Work Hub Executive Suite",
    loc: "Gangapur Road · Nashik",
    city: "Nashik",
    rent: 52000,
    area: 980,
    type: "Office",
    score: 91,
    icon: "🏢",
    tag: "Furnished Office",
    parking: true,
    verified: true,
    featured: false,
    status: "approved",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Ready-to-use tech office space with glass cabins, 20 workstation desks, conference room, fiber internet wiring, and basement parking.",
    owner: "Urban Estates Ltd",
    ownerId: "owner_1",
    phone: "+91 98220 12002"
  },
  {
    id: 3,
    name: "Market Street Specialty Café Space",
    loc: "MG Road · Nashik",
    city: "Nashik",
    rent: 45000,
    area: 740,
    type: "Restaurant / Café",
    score: 95,
    icon: "☕",
    tag: "Food & Beverage",
    parking: false,
    verified: true,
    featured: false,
    status: "approved",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Charming street-facing commercial unit with kitchen exhaust line setup, outdoor seating permit capability, and heavy student & office crowds nearby.",
    owner: "Market Street Realty",
    ownerId: "owner_2",
    phone: "+91 98220 12003"
  },
  {
    id: 4,
    name: "LogiSpace Industrial Warehouse",
    loc: "Ambad MIDC · Nashik",
    city: "Nashik",
    rent: 68000,
    area: 2400,
    type: "Warehouse",
    score: 88,
    icon: "📦",
    tag: "Heavy Vehicle Access",
    parking: true,
    verified: true,
    featured: false,
    status: "approved",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "High-ceiling commercial warehouse with 3-phase industrial power supply, loading/unloading container bays, and 24/7 security perimeter.",
    owner: "LogiSpace Infra",
    ownerId: "owner_2",
    phone: "+91 98220 12004"
  },
  {
    id: 5,
    name: "Greenline Compact Studio Office",
    loc: "Indira Nagar · Nashik",
    city: "Nashik",
    rent: 31000,
    area: 560,
    type: "Office",
    score: 83,
    icon: "💼",
    tag: "Budget Friendly",
    parking: true,
    verified: false,
    featured: false,
    status: "approved",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Clean modern office room on 2nd floor, perfect for professional consultants, CA firms, freelancers, or satellite branches.",
    owner: "Greenline Realty",
    ownerId: "owner_1",
    phone: "+91 98220 12005"
  },
  {
    id: 6,
    name: "Highway Grand Retail Showroom",
    loc: "Mumbai-Agra Highway · Nashik",
    city: "Nashik",
    rent: 85000,
    area: 1650,
    type: "Shop / Retail",
    score: 92,
    icon: "🏪",
    tag: "Prime Highway Frontage",
    parking: true,
    verified: true,
    featured: false,
    status: "approved",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Expansive double-height retail showroom right on main highway connector with ample visitor parking, wide frontage, and illuminated billboard space.",
    owner: "Highway Commercials",
    ownerId: "owner_2",
    phone: "+91 98220 12006"
  }
];

/* ================= HELPERS & UTILS ================= */
const $ = id => document.getElementById(id);
const INF = Infinity;
const BUDGET = {'20-40':[0,40000],'40-70':[40001,70000],'70-150':[70001,150000],'150+':[150001,INF]};
const RENT = {under40:[0,40000],'40-70':[40001,70000],'70+':[70001,INF]};
const AREA = {under500:[0,499],'500-1000':[500,1000],'1000+':[1001,INF]};
const TYPE_ICON = {'Shop / Retail':'🏬','Office':'🏢','Warehouse':'📦','Restaurant / Café':'☕'};

const inRange = (v, r) => !r || (v >= r[0] && v <= r[1]);
const money = n => '₹' + Number(n).toLocaleString('en-IN');
const fmtK = n => n >= 100000 ? (n / 100000).toFixed(1).replace(/\.0$/, '') + 'L' : Math.round(n / 1000) + 'K';
const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

/* LocalStorage Manager */
const LS = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } }
};

/* IndexedDB Engine */
const DB = {
  db: null,
  open() {
    return new Promise(res => {
      try {
        const r = indexedDB.open('bizspace_db_v2', 1);
        r.onupgradeneeded = () => r.result.createObjectStore('listings', { keyPath: 'id' });
        r.onsuccess = () => { this.db = r.result; res(); };
        r.onerror = () => res();
      } catch { res(); }
    });
  },
  tx(mode, fn) {
    return new Promise((res, rej) => {
      if (!this.db) return rej(new Error('Storage unavailable'));
      const t = this.db.transaction('listings', mode), q = fn(t.objectStore('listings'));
      t.oncomplete = () => res(q && q.result);
      t.onerror = () => rej(t.error);
    });
  },
  all() { return this.tx('readonly', s => s.getAll()); },
  put(l) { return this.tx('readwrite', s => s.put(l)); },
  del(id) { return this.tx('readwrite', s => s.delete(id)); }
};

/* ================= STATE STORE ================= */
let properties = SEED_PROPERTIES;
let savedIds = LS.get('bizspaceSaved', []);
let compareIds = LS.get('bizspaceCompare', []);
let enquiries = LS.get('bizspaceEnquiries', []);
let siteVisits = LS.get('bizspaceVisits', []);
let notifications = LS.get('bizspaceNotifs', []);

/* User session & roles */
let currentUser = LS.get('bizspaceUser', {
  id: 'user_tenant',
  name: 'Alex Tenant',
  email: 'tenant@bizspace.com',
  role: 'tenant'
});

let currentRole = currentUser?.role || 'tenant';
let justAdded = null;
let featId = 1;
let lastFocus = null;

const state = { type: '', loc: '', budget: '', area: '', rent: '', status: '', sort: 'fit', maxRent: null };

function saveState() {
  LS.set('bizspaceSaved', savedIds);
  LS.set('bizspaceCompare', compareIds);
  LS.set('bizspaceEnquiries', enquiries);
  LS.set('bizspaceVisits', siteVisits);
  LS.set('bizspaceNotifs', notifications);
  LS.set('bizspaceUser', currentUser);
}

function findProperty(id) {
  return properties.find(p => p.id === Number(id));
}

/* ================= AUTH & ROLE MANAGEMENT ================= */
function applyRolePermissions() {
  document.body.setAttribute('data-role', currentRole);
  $('currentRoleBadge').className = `role-pill ${currentRole}`;
  $('currentRoleBadge').textContent = currentRole.toUpperCase();
  updateAuthBtn();
}

function switchRole(role) {
  currentRole = role;
  if (!currentUser) currentUser = {};
  currentUser.role = role;
  
  if (role === 'tenant') {
    currentUser.name = 'Alex Tenant';
    currentUser.email = 'tenant@bizspace.com';
    currentUser.id = 'user_tenant';
  } else if (role === 'owner') {
    currentUser.name = 'Rohan Owner';
    currentUser.email = 'owner@bizspace.com';
    currentUser.id = 'owner_1';
  } else if (role === 'admin') {
    currentUser.name = 'Platform Administrator';
    currentUser.email = 'admin@bizspace.com';
    currentUser.id = 'user_admin';
  }
  
  saveState();
  applyRolePermissions();
  render();
  toast(`Switched role to ${role.toUpperCase()}`);
}

function updateAuthBtn() {
  const btn = $('authBtn');
  if (currentUser && currentUser.email) {
    btn.textContent = `Sign Out (${currentUser.name.split(' ')[0]})`;
  } else {
    btn.textContent = 'Sign In';
  }
}

function authClick() {
  if (currentUser && currentUser.email) {
    currentUser = null;
    LS.set('bizspaceUser', null);
    switchRole('tenant');
    toast('Signed out successfully.');
  } else {
    openModal('loginModal');
  }
}

function switchAuthTab(tab) {
  if (tab === 'login') {
    $('tabLoginBtn').classList.add('active');
    $('tabRegBtn').classList.remove('active');
    $('loginForm').style.display = 'block';
    $('regForm').style.display = 'none';
  } else {
    $('tabRegBtn').classList.add('active');
    $('tabLoginBtn').classList.remove('active');
    $('regForm').style.display = 'block';
    $('loginForm').style.display = 'none';
  }
}

function signIn(e) {
  e.preventDefault();
  const email = $('loginEmail').value.trim();
  currentUser = {
    id: 'user_' + Date.now(),
    name: email.split('@')[0],
    email: email,
    role: email.includes('owner') ? 'owner' : email.includes('admin') ? 'admin' : 'tenant'
  };
  currentRole = currentUser.role;
  saveState();
  applyRolePermissions();
  closeModal('loginModal');
  e.target.reset();
  toast(`Welcome back, ${currentUser.name}!`);
  render();
}

function quickLogin(role) {
  switchRole(role);
  closeModal('loginModal');
}

function registerUser(e) {
  e.preventDefault();
  const name = $('regName').value.trim();
  const email = $('regEmail').value.trim();
  const role = document.querySelector('input[name="regRole"]:checked').value;
  
  currentUser = {
    id: 'user_' + Date.now(),
    name,
    email,
    role
  };
  currentRole = role;
  saveState();
  applyRolePermissions();
  closeModal('loginModal');
  e.target.reset();
  toast(`Account created as ${role.toUpperCase()}. Welcome to BizSpace!`);
  render();
}

function triggerListPropertyAction() {
  if (currentRole === 'tenant') {
    switchRole('owner');
    toast('Switched to Owner role so you can list your space.');
  }
  openModal('listModal');
}

/* ================= NOTIFICATIONS ENGINE ================= */
function addNotification(userId, title, message) {
  const notif = {
    id: Date.now(),
    userId,
    title,
    message,
    read: false,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  notifications.unshift(notif);
  saveState();
  renderNotifications();
}

function renderNotifications() {
  const listEl = $('notifList');
  const badgeEl = $('notifBadge');
  
  const userNotifs = notifications.filter(n => !n.userId || n.userId === currentUser?.id || currentRole === 'admin');
  const unreadCount = userNotifs.filter(n => !n.read).length;
  
  if (unreadCount > 0) {
    badgeEl.textContent = unreadCount;
    badgeEl.classList.add('has-unread');
  } else {
    badgeEl.classList.remove('has-unread');
  }

  if (!userNotifs.length) {
    listEl.innerHTML = '<p class="empty-notif">No notifications yet.</p>';
    return;
  }

  listEl.innerHTML = userNotifs.map(n => `
    <div class="notif-item ${n.read ? '' : 'unread'}" onclick="markNotifRead(${n.id})">
      <strong>${esc(n.title)}</strong>
      <p>${esc(n.message)}</p>
      <small>${n.time}</small>
    </div>
  `).join('');
}

function toggleNotifDropdown() {
  $('notifDropdown').classList.toggle('show');
}

function markNotifRead(id) {
  const n = notifications.find(x => x.id === id);
  if (n) {
    n.read = true;
    saveState();
    renderNotifications();
  }
}

function markAllNotificationsRead() {
  notifications.forEach(n => n.read = true);
  saveState();
  renderNotifications();
  toast('All notifications marked as read.');
}

/* ================= FILTERING & SEARCH ================= */
function readControls() {
  state.type = $('filterType').value;
  state.loc = $('location').value.trim().toLowerCase();
  state.budget = $('budget').value;
  state.area = $('filterArea').value;
  state.rent = $('filterRent').value;
  state.status = $('filterStatus').value;
  state.sort = $('filterSort').value;
}

function visibleProperties() {
  const list = properties.filter(p => {
    // Hide unapproved listings unless owned by current user or admin
    if (p.status === 'pending' && currentRole !== 'admin' && p.ownerId !== currentUser?.id) {
      return false;
    }

    const matchesLoc = !state.loc || `${p.loc} ${p.city} ${p.name} ${p.desc}`.toLowerCase().includes(state.loc);
    const matchesType = !state.type || p.type === state.type;
    const matchesBudget = inRange(p.rent, BUDGET[state.budget]);
    const matchesRent = inRange(p.rent, RENT[state.rent]);
    const matchesArea = inRange(p.area, AREA[state.area]);
    const matchesMaxRent = !state.maxRent || p.rent <= state.maxRent;
    const matchesVerified = state.status !== 'verified' || p.verified;
    const matchesParking = state.status !== 'parking' || p.parking;
    const matchesMine = state.status !== 'mine' || (p.ownerId === currentUser?.id || p.mine);

    return matchesLoc && matchesType && matchesBudget && matchesRent && matchesArea && matchesMaxRent && matchesVerified && matchesParking && matchesMine;
  });

  const sorts = {
    fit: (a, b) => b.score - a.score,
    'rent-asc': (a, b) => a.rent - b.rent,
    'rent-desc': (a, b) => b.rent - a.rent,
    'area-desc': (a, b) => b.area - a.area,
    new: (a, b) => b.id - a.id
  };

  return list.sort(sorts[state.sort] || sorts.fit);
}

function searchProperties() {
  $('filterType').value = $('propertyType').value;
  render();
  scrollToDiscover();
}

function applyFilters() {
  $('propertyType').value = $('filterType').value;
  render();
}

function resetControls() {
  ['filterType', 'filterArea', 'filterRent', 'filterStatus', 'propertyType', 'budget', 'location'].forEach(id => $(id).value = '');
  $('filterSort').value = 'fit';
  state.maxRent = null;
}

function clearFilters() {
  resetControls();
  render();
}

function scrollToDiscover() {
  $('discover').scrollIntoView({ behavior: 'smooth' });
}

/* ================= RENDERING CARDS & GRID ================= */
function renderCard(p) {
  const saved = savedIds.includes(p.id);
  const cmp = compareIds.includes(p.id);
  const isMine = (p.ownerId === currentUser?.id) || p.mine;
  const isPending = p.status === 'pending';

  return `
    <article class="property${p.id === justAdded ? ' just-added' : ''}">
      <div class="property-img${p.image ? ' has-image' : ''}"${p.image ? ` style="background-image:url('${p.image}')"` : ''}>
        <span class="tag-badge">${esc(p.tag.toUpperCase())}</span>
        <button class="heart${saved ? ' active' : ''}" aria-label="${saved ? 'Remove from saved' : 'Save property'}" onclick="toggleSave(${p.id})">
          ${saved ? '♥' : '♡'}
        </button>
        ${p.image ? '' : `<div class="property-icon">${p.icon}</div>`}
      </div>

      <div class="property-body">
        <div class="verified-line">
          ${p.verified ? '✓ Verified' : 'Listed'} · ${esc(p.type)}
          ${isMine ? ' · <b class="mine-badge">Your Property</b>' : ''}
          ${isPending ? ' · <b class="pending-badge">Pending Review</b>' : ''}
        </div>

        <h3>${esc(p.name)}</h3>
        <p>${esc(p.loc)} · ${p.area.toLocaleString('en-IN')} sq ft</p>

        <div class="price">
          <div>
            <strong>${money(p.rent)}</strong>
            <small>/month</small>
          </div>
          <span class="mini-score">${p.score}% FIT</span>
        </div>

        <div class="card-actions">
          <button onclick="showDetails(${p.id})">View details</button>
          <button class="compare-toggle${cmp ? ' selected' : ''}" onclick="toggleCompare(${p.id})">
            ${cmp ? '✓ Comparing' : 'Compare'}
          </button>
          ${(isMine || currentRole === 'admin') ? `
            <button onclick="openEditModal(${p.id})">Edit</button>
            <button class="danger" onclick="deleteListing(${p.id})">Delete</button>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

function render() {
  readControls();
  const list = visibleProperties();
  const grid = $('propertyGrid');

  grid.innerHTML = list.length
    ? list.map(renderCard).join('')
    : '<div class="empty-state full-span">No spaces match these filters. Try widening your budget or location, or clear the filters.</div>';

  $('resultCount').textContent = `${list.length} space${list.length === 1 ? '' : 's'}` + (state.maxRent ? ` · up to ${money(state.maxRent)}/mo` : '');

  renderSaved();
  renderCompareBar();
  renderFeatured();
  renderStats();
  updateCounts();
  renderNotifications();
}

function renderSaved() {
  const list = properties.filter(p => savedIds.includes(p.id));
  $('savedGrid').innerHTML = list.map(renderCard).join('');
  $('savedEmpty').style.display = list.length ? 'none' : 'block';
}

function renderStats() {
  $('statCount').textContent = properties.length;
  $('statVerified').textContent = properties.filter(p => p.verified).length;
  $('statCities').textContent = new Set(properties.map(p => p.city.trim().toLowerCase())).size;
  $('statVisits').textContent = siteVisits.length;
}

function renderFeatured() {
  const p = [...properties].filter(x => x.verified && x.status === 'approved').sort((a, b) => b.score - a.score)[0] || properties[0];
  if (!p) return;
  featId = p.id;
  const el = $('featuredImage');
  el.style.backgroundImage = p.image ? `url("${p.image}")` : '';
  el.classList.toggle('has-image', !!p.image);
  el.innerHTML = p.image ? '' : `<span class="feat-icon">${p.icon}</span>`;
  $('featName').textContent = p.name;
  $('featLoc').textContent = p.loc;
  $('featRent').innerHTML = `₹${fmtK(p.rent)}<span>/mo</span>`;
  $('featScore').textContent = `${p.score}/100`;
  $('featBar').style.width = p.score + '%';
  $('featTags').innerHTML = [p.tag, p.parking ? 'Parking' : '', p.verified ? 'Verified' : ''].filter(Boolean).map(t => `<span>${esc(t)}</span>`).join('');
}

function updateCounts() {
  $('savedCount').textContent = savedIds.length;
  $('enqCount').textContent = enquiries.length;
  $('visitCount').textContent = siteVisits.length;
}

/* ================= FAVORITES & COMPARISON ================= */
function toggleSave(id) {
  const on = !savedIds.includes(id);
  savedIds = on ? [...savedIds, id] : savedIds.filter(x => x !== id);
  saveState();
  render();
  toast(on ? 'Property added to saved shortlist.' : 'Removed from saved.');
}

function toggleCompare(id) {
  if (compareIds.includes(id)) {
    compareIds = compareIds.filter(x => x !== id);
  } else if (compareIds.length < 4) {
    compareIds = [...compareIds, id];
  } else {
    return toast('You can compare up to 4 properties simultaneously.');
  }
  saveState();
  render();
}

function clearCompare() {
  compareIds = [];
  saveState();
  closeModal('compareModal');
  render();
}

function removeFromCompare(id) {
  compareIds = compareIds.filter(x => x !== id);
  saveState();
  renderCompareModalContent();
  render();
}

function renderCompareBar() {
  const n = compareIds.length;
  const b = $('compareBar');
  b.classList.toggle('show', n > 0);
  b.innerHTML = n ? `
    <span><b>${n}</b> of 4 spaces selected for comparison</span>
    <div>
      <button class="btn btn-light btn-sm" ${n < 2 ? 'disabled' : ''} onclick="openCompare()">Compare ${n} Spaces →</button>
      <button class="text-btn micro" style="color:#fff;" onclick="clearCompare()">Clear</button>
    </div>
  ` : '';
}

function renderCompareModalContent() {
  const list = compareIds.map(findProperty).filter(Boolean);
  if (list.length < 2) {
    $('compareContent').innerHTML = '<p class="empty-state">Select at least 2 properties to render comparison table.</p>';
    return;
  }

  const highlightDiffs = $('highlightDiffs')?.checked || false;

  const rows = [
    ['Property Type', p => esc(p.type)],
    ['Location', p => esc(p.loc)],
    ['Monthly Rent', p => money(p.rent)],
    ['Total Area', p => p.area.toLocaleString('en-IN') + ' sq ft'],
    ['Rent per sq ft', p => '₹' + (p.rent / p.area).toFixed(1) + ' / sq ft'],
    ['Parking Available', p => p.parking ? 'Yes ✓' : 'No ✕'],
    ['Verification Status', p => p.verified ? 'Verified ✓' : 'Standard'],
    ['Property Fit Score', p => p.score + ' / 100'],
    ['Property Owner', p => esc(p.owner)]
  ];

  $('compareContent').innerHTML = `
    <div class="compare-table">
      <table>
        <thead>
          <tr>
            <th>Property Attribute</th>
            ${list.map(p => `
              <th>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <strong>${esc(p.name)}</strong>
                  <button class="text-btn micro" onclick="removeFromCompare(${p.id})">✕</button>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map(([label, getter]) => {
            const vals = list.map(getter);
            const isDiff = highlightDiffs && new Set(vals).size > 1;
            return `
              <tr>
                <td><strong>${label}</strong></td>
                ${vals.map(val => `<td class="${isDiff ? 'diff-cell' : ''}">${val}</td>`).join('')}
              </tr>
            `;
          }).join('')}
          <tr>
            <td>Action</td>
            ${list.map(p => `
              <td>
                <button class="btn btn-dark btn-sm full" onclick="closeModal('compareModal');showDetails(${p.id})">View Details</button>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function openCompare() {
  renderCompareModalContent();
  openModal('compareModal');
}

/* ================= DETAILS & INQUIRIES ================= */
function showDetails(id) {
  const p = findProperty(id);
  if (!p) return;

  const imgs = p.images?.length ? p.images : (p.image ? [p.image] : []);
  const vids = p.videoSrc || [];
  const media = [
    ...imgs.map(s => `<img src="${s}" alt="${esc(p.name)}">`),
    ...vids.map(s => `<video src="${s}" controls preload="metadata"></video>`)
  ].join('');

  const tel = String(p.phone).replace(/[^+\d]/g, '');

  $('detailsContent').innerHTML = `
    <button class="close" aria-label="Close" onclick="closeModal('detailsModal')">×</button>

    <div class="details-top">
      <div class="details-image${p.image ? ' has-image' : ''}"${p.image ? ` style="background-image:url('${p.image}')"` : ''}>
        ${p.image ? '' : p.icon}
      </div>
      <div>
        <span class="eyebrow">${p.verified ? '✓ VERIFIED COMMERCIAL LISTING' : 'COMMERCIAL SPACE'}</span>
        <h2>${esc(p.name)}</h2>
        <p>${esc(p.loc)}</p>
        <div class="detail-price">${money(p.rent)} <small>/month</small></div>
      </div>
    </div>

    ${media ? `<div class="details-media">${media}</div>` : ''}

    <p class="details-desc">${esc(p.desc)}</p>

    <div class="detail-grid">
      <div><b>Property type</b><span>${esc(p.type)}</span></div>
      <div><b>Area</b><span>${p.area.toLocaleString('en-IN')} sq ft</span></div>
      <div><b>Parking</b><span>${p.parking ? 'Available' : 'Not listed'}</span></div>
      <div><b>Property fit score</b><span>${p.score}/100</span></div>
    </div>

    <div class="owner-box">
      <div>
        <span class="eyebrow">LISTED BY PROPERTY OWNER</span>
        <h3>${esc(p.owner)}</h3>
        <p>${tel.length >= 7 ? `<a href="tel:${tel}">${esc(p.phone)}</a>` : esc(p.phone)}</p>
      </div>

      <div class="owner-box-actions">
        <button class="btn btn-light" onclick="openSiteVisitModal(${p.id})">📅 Book Site Visit</button>
        <button class="btn btn-outline" onclick="openEnquiry(${p.id})">📩 Send Enquiry</button>
      </div>
    </div>
  `;

  openModal('detailsModal');
}

function openEnquiry(id) {
  const p = findProperty(id);
  $('detailsContent').innerHTML = `
    <button class="close" aria-label="Close" onclick="closeModal('detailsModal')">×</button>
    <span class="eyebrow">PROPERTY ENQUIRY</span>
    <h2>Send Enquiry to ${esc(p.owner)}</h2>
    <p class="modal-subtitle">${esc(p.name)} · ${esc(p.loc)}</p>

    <form onsubmit="submitEnquiry(event, ${id})">
      <input name="name" placeholder="Your name" value="${esc(currentUser?.name || '')}" required>
      <input name="phone" type="tel" placeholder="Phone number" required>
      <input name="email" type="email" placeholder="Email address" value="${esc(currentUser?.email || '')}" required>
      <textarea name="message" rows="4" placeholder="Mention your business model, space requirements, or timeline..." required></textarea>
      <button class="btn btn-dark full" type="submit">Send Enquiry →</button>
    </form>
  `;
  openModal('detailsModal');
}

function submitEnquiry(e, id) {
  e.preventDefault();
  const p = findProperty(id);
  const f = e.target.elements;

  const enq = {
    id: Date.now(),
    propertyId: id,
    property: p.name,
    ownerId: p.ownerId || 'owner_1',
    owner: p.owner,
    tenantId: currentUser?.id || 'guest',
    name: f.name.value.trim(),
    phone: f.phone.value.trim(),
    email: f.email.value.trim(),
    message: f.message.value.trim(),
    date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  };

  enquiries.push(enq);
  saveState();
  updateCounts();
  closeModal('detailsModal');

  // Notify Owner
  addNotification(p.ownerId || 'owner_1', 'New Property Enquiry', `Inquiry received for "${p.name}" from ${enq.name}.`);

  toast('Enquiry sent to property owner successfully.');
}

function openEnquiries(e) {
  if (e) e.preventDefault();
  closeMenu();
  switchEnquiriesTab('enquiries');
  openModal('enquiriesModal');
}

function switchEnquiriesTab(tab) {
  if (tab === 'enquiries') {
    $('tabEnqBtn').classList.add('active');
    $('tabVisitsBtn').classList.remove('active');
    $('enquiriesTabContent').style.display = 'block';
    $('visitsTabContent').style.display = 'none';
    renderSentEnquiries();
  } else {
    $('tabVisitsBtn').classList.add('active');
    $('tabEnqBtn').classList.remove('active');
    $('visitsTabContent').style.display = 'block';
    $('enquiriesTabContent').style.display = 'none';
    renderUserVisits();
  }
}

function renderSentEnquiries() {
  const userEnqs = enquiries.filter(q => !currentUser?.id || q.tenantId === currentUser?.id || currentRole === 'tenant');
  const container = $('enquiriesTabContent');

  if (!userEnqs.length) {
    container.innerHTML = '<div class="empty-state">No enquiries sent yet.</div>';
    return;
  }

  container.innerHTML = [...userEnqs].reverse().map(q => `
    <div class="table-card">
      <div class="table-card-main">
        <h4>${esc(q.property)}</h4>
        <p>Owner: ${esc(q.owner)} · Sent on: ${esc(q.date)}</p>
        <p style="margin-top:6px;font-style:italic;">"${esc(q.message)}"</p>
      </div>
      <button class="text-btn danger micro" onclick="deleteEnquiry(${q.id})">Delete</button>
    </div>
  `).join('');
}

function deleteEnquiry(id) {
  enquiries = enquiries.filter(q => q.id !== id);
  saveState();
  updateCounts();
  renderSentEnquiries();
  toast('Enquiry deleted.');
}

/* ================= SITE VISIT BOOKING ENGINE ================= */
function openSiteVisitModal(propertyId) {
  const p = findProperty(propertyId);
  if (!p) return;

  $('visitPropertyId').value = p.id;
  $('visitPropTitle').textContent = `${p.name} (${p.loc})`;
  $('visitName').value = currentUser?.name || '';
  $('visitEmail').value = currentUser?.email || '';

  // Set default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  $('visitDate').value = tomorrow.toISOString().split('T')[0];

  closeModal('detailsModal');
  openModal('visitModal');
}

function submitSiteVisit(e) {
  e.preventDefault();
  const propId = Number($('visitPropertyId').value);
  const p = findProperty(propId);

  const visit = {
    id: Date.now(),
    propertyId: propId,
    propertyTitle: p.name,
    ownerId: p.ownerId || 'owner_1',
    ownerName: p.owner,
    tenantId: currentUser?.id || 'tenant_guest',
    tenantName: $('visitName').value.trim(),
    tenantPhone: $('visitPhone').value.trim(),
    tenantEmail: $('visitEmail').value.trim(),
    date: $('visitDate').value,
    timeSlot: $('visitTimeSlot').value,
    visitType: $('visitType').value,
    notes: $('visitNotes').value.trim(),
    status: 'pending',
    createdAt: new Date().toLocaleDateString()
  };

  siteVisits.push(visit);
  saveState();
  updateCounts();
  closeModal('visitModal');

  // Notify Owner
  addNotification(p.ownerId || 'owner_1', 'New Site Visit Booking Request', `Requested for ${visit.propertyTitle} on ${visit.date} (${visit.timeSlot}).`);

  toast('Site visit booking requested! The owner will confirm shortly.');
}

function openUserBookings(e) {
  if (e) e.preventDefault();
  closeMenu();
  switchEnquiriesTab('visits');
  openModal('enquiriesModal');
}

function renderUserVisits() {
  const userVisits = siteVisits.filter(v => !currentUser?.id || v.tenantId === currentUser?.id || currentRole === 'tenant');
  const container = $('visitsTabContent');

  if (!userVisits.length) {
    container.innerHTML = '<div class="empty-state">No site visits scheduled yet. Browse listings to book a tour.</div>';
    return;
  }

  container.innerHTML = [...userVisits].reverse().map(v => `
    <div class="table-card">
      <div class="table-card-main">
        <span class="status-badge ${v.status}">${v.status.toUpperCase()}</span>
        <h4 style="margin-top:6px;">${esc(v.propertyTitle)}</h4>
        <p>📅 Date: <strong>${esc(v.date)}</strong> (${esc(v.timeSlot)})</p>
        <p>Type: ${esc(v.visitType)} · Contact: ${esc(v.tenantPhone)}</p>
        ${v.notes ? `<p style="font-style:italic;">Notes: ${esc(v.notes)}</p>` : ''}
      </div>
      <div class="table-card-actions">
        ${v.status !== 'cancelled' ? `<button class="btn btn-outline btn-sm danger" onclick="cancelSiteVisit(${v.id})">Cancel Visit</button>` : ''}
      </div>
    </div>
  `).join('');
}

function cancelSiteVisit(id) {
  const v = siteVisits.find(x => x.id === id);
  if (v) {
    v.status = 'cancelled';
    saveState();
    renderUserVisits();
    toast('Site visit cancelled.');
  }
}

/* ================= OWNER DASHBOARD ================= */
function openOwnerDashboard(e) {
  if (e) e.preventDefault();
  closeMenu();

  const ownerProps = properties.filter(p => p.ownerId === currentUser?.id || p.mine);
  const ownerEnqs = enquiries.filter(q => ownerProps.some(p => p.id === q.propertyId) || q.ownerId === currentUser?.id);
  const ownerVisits = siteVisits.filter(v => ownerProps.some(p => p.id === v.propertyId) || v.ownerId === currentUser?.id);

  $('ownerStatProps').textContent = ownerProps.length;
  $('ownerStatEnqs').textContent = ownerEnqs.length;
  $('ownerStatVisits').textContent = ownerVisits.length;

  switchOwnerTab('props');
  openModal('ownerDashModal');
}

function switchOwnerTab(tab) {
  ['Props', 'Enqs', 'Visits'].forEach(t => {
    $('tabOwner' + t + 'Btn').classList.toggle('active', t.toLowerCase() === tab);
    $('owner' + t + 'Content').style.display = t.toLowerCase() === tab ? 'block' : 'none';
  });

  if (tab === 'props') renderOwnerProperties();
  if (tab === 'enqs') renderOwnerEnquiries();
  if (tab === 'visits') renderOwnerVisits();
}

function renderOwnerProperties() {
  const ownerProps = properties.filter(p => p.ownerId === currentUser?.id || p.mine);
  const container = $('ownerPropsContent');

  if (!ownerProps.length) {
    container.innerHTML = '<div class="empty-state">You have no listed properties yet. Click "+ Add Listing" to create one.</div>';
    return;
  }

  container.innerHTML = ownerProps.map(p => `
    <div class="table-card">
      <div class="table-card-main">
        <span class="status-badge ${p.verified ? 'confirmed' : 'pending'}">${p.verified ? 'VERIFIED' : 'PENDING CHECK'}</span>
        <h4>${esc(p.name)}</h4>
        <p>${esc(p.loc)} · ${money(p.rent)}/mo · ${p.area} sq ft</p>
      </div>
      <div class="table-card-actions">
        <button class="btn btn-outline btn-sm" onclick="closeModal('ownerDashModal');openEditModal(${p.id})">Edit</button>
        <button class="btn btn-outline btn-sm danger" onclick="deleteListing(${p.id})">Delete</button>
      </div>
    </div>
  `).join('');
}

function renderOwnerEnquiries() {
  const ownerProps = properties.filter(p => p.ownerId === currentUser?.id || p.mine);
  const ownerEnqs = enquiries.filter(q => ownerProps.some(p => p.id === q.propertyId) || q.ownerId === currentUser?.id);
  const container = $('ownerEnqsContent');

  if (!ownerEnqs.length) {
    container.innerHTML = '<div class="empty-state">No inquiries received for your properties yet.</div>';
    return;
  }

  container.innerHTML = [...ownerEnqs].reverse().map(q => `
    <div class="table-card">
      <div class="table-card-main">
        <h4>${esc(q.property)}</h4>
        <p>From: <strong>${esc(q.name)}</strong> (${esc(q.phone)} · ${esc(q.email)})</p>
        <p style="margin-top:4px;">"${esc(q.message)}"</p>
        <small>${esc(q.date)}</small>
      </div>
      <div class="table-card-actions">
        <a href="tel:${esc(q.phone)}" class="btn btn-light btn-sm">📞 Call Tenant</a>
      </div>
    </div>
  `).join('');
}

function renderOwnerVisits() {
  const ownerProps = properties.filter(p => p.ownerId === currentUser?.id || p.mine);
  const ownerVisits = siteVisits.filter(v => ownerProps.some(p => p.id === v.propertyId) || v.ownerId === currentUser?.id);
  const container = $('ownerVisitsContent');

  if (!ownerVisits.length) {
    container.innerHTML = '<div class="empty-state">No site visit requests received yet.</div>';
    return;
  }

  container.innerHTML = [...ownerVisits].reverse().map(v => `
    <div class="table-card">
      <div class="table-card-main">
        <span class="status-badge ${v.status}">${v.status.toUpperCase()}</span>
        <h4>${esc(v.propertyTitle)}</h4>
        <p>Visitor: <strong>${esc(v.tenantName)}</strong> (${esc(v.tenantPhone)})</p>
        <p>📅 Scheduled: <strong>${esc(v.date)}</strong> (${esc(v.timeSlot)}) · ${esc(v.visitType)}</p>
      </div>
      <div class="table-card-actions">
        ${v.status === 'pending' ? `
          <button class="btn btn-light btn-sm" onclick="updateVisitStatus(${v.id}, 'confirmed')">Confirm</button>
          <button class="btn btn-outline btn-sm danger" onclick="updateVisitStatus(${v.id}, 'cancelled')">Decline</button>
        ` : ''}
        ${v.status === 'confirmed' ? `
          <button class="btn btn-dark btn-sm" onclick="updateVisitStatus(${v.id}, 'completed')">Mark Completed</button>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function updateVisitStatus(id, newStatus) {
  const v = siteVisits.find(x => x.id === id);
  if (v) {
    v.status = newStatus;
    saveState();
    renderOwnerVisits();
    
    // Notify Tenant
    addNotification(v.tenantId, 'Site Visit Status Update', `Your visit for "${v.propertyTitle}" has been marked as ${newStatus.toUpperCase()}.`);
    
    toast(`Site visit status updated to ${newStatus.toUpperCase()}`);
  }
}

/* ================= ADMIN DASHBOARD ================= */
function openAdminDashboard(e) {
  if (e) e.preventDefault();
  closeMenu();

  $('adminStatTotalProps').textContent = properties.length;
  $('adminStatPending').textContent = properties.filter(p => !p.verified || p.status === 'pending').length;
  $('adminStatUsers').textContent = 5; // Total active accounts
  $('adminStatInquiries').textContent = enquiries.length + siteVisits.length;

  switchAdminTab('props');
  openModal('adminDashModal');
}

function switchAdminTab(tab) {
  ['Props', 'Users', 'Tools'].forEach(t => {
    $('tabAdmin' + t + 'Btn').classList.toggle('active', t.toLowerCase() === tab);
    $('admin' + t + 'Content').style.display = t.toLowerCase() === tab ? 'block' : 'none';
  });

  if (tab === 'props') renderAdminProperties();
  if (tab === 'users') renderAdminUsers();
  if (tab === 'tools') renderAdminTools();
}

function renderAdminProperties() {
  const container = $('adminPropsContent');
  container.innerHTML = properties.map(p => `
    <div class="table-card">
      <div class="table-card-main">
        <span class="status-badge ${p.verified ? 'confirmed' : 'pending'}">${p.verified ? 'VERIFIED' : 'UNVERIFIED'}</span>
        ${p.featured ? '<span class="status-badge completed">FEATURED</span>' : ''}
        <h4>${esc(p.name)}</h4>
        <p>${esc(p.loc)} · Rent: ${money(p.rent)} · Owner: ${esc(p.owner)}</p>
      </div>
      <div class="table-card-actions">
        <button class="btn btn-outline btn-sm" onclick="toggleAdminVerify(${p.id})">
          ${p.verified ? 'Unverify' : '✓ Approve & Verify'}
        </button>
        <button class="btn btn-outline btn-sm" onclick="toggleAdminFeatured(${p.id})">
          ${p.featured ? 'Unfeature' : '⭐ Feature'}
        </button>
        <button class="btn btn-outline btn-sm danger" onclick="deleteListing(${p.id})">Delete</button>
      </div>
    </div>
  `).join('');
}

function toggleAdminVerify(id) {
  const p = findProperty(id);
  if (p) {
    p.verified = !p.verified;
    p.status = 'approved';
    saveState();
    renderAdminProperties();
    render();
    toast(`Verification status toggled for ${p.name}`);
  }
}

function toggleAdminFeatured(id) {
  const p = findProperty(id);
  if (p) {
    properties.forEach(x => x.featured = false);
    p.featured = true;
    saveState();
    renderAdminProperties();
    render();
    toast(`${p.name} set as featured property.`);
  }
}

function renderAdminUsers() {
  const container = $('adminUsersContent');
  const demoUsers = [
    { name: 'Alex Tenant', email: 'tenant@bizspace.com', role: 'tenant' },
    { name: 'Rohan Owner', email: 'owner@bizspace.com', role: 'owner' },
    { name: 'Platform Admin', email: 'admin@bizspace.com', role: 'admin' }
  ];

  container.innerHTML = demoUsers.map(u => `
    <div class="table-card">
      <div class="table-card-main">
        <span class="role-pill ${u.role}">${u.role.toUpperCase()}</span>
        <h4 style="margin-top:4px;">${esc(u.name)}</h4>
        <p>${esc(u.email)}</p>
      </div>
      <div class="table-card-actions">
        <button class="btn btn-outline btn-sm" onclick="switchRole('${u.role}');closeModal('adminDashModal');">Log In As</button>
      </div>
    </div>
  `).join('');
}

function renderAdminTools() {
  const container = $('adminToolsContent');
  container.innerHTML = `
    <div class="empty-state" style="text-align:left;">
      <h3>Platform Reset & Maintenance</h3>
      <p style="margin:10px 0 16px;">Reset local demo storage back to pristine factory state with all sample properties, bookings, and inquiries.</p>
      <button class="btn btn-dark danger" onclick="resetPlatformData()">🔄 Reset Factory Seed Data</button>
    </div>
  `;
}

function resetPlatformData() {
  if (confirm('Are you sure you want to reset all platform data to factory seed default?')) {
    localStorage.clear();
    location.reload();
  }
}

/* ================= LISTING CREATE & EDIT ================= */
function compressImage(file) {
  return new Promise((res, rej) => {
    const img = new Image(), u = URL.createObjectURL(file);
    img.onload = () => {
      const s = Math.min(1, 1200 / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * s);
      c.height = Math.round(img.height * s);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(u);
      res(c.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = () => { URL.revokeObjectURL(u); rej(new Error('Image compress error')); };
    img.src = u;
  });
}

function fitScore(l) {
  return Math.min(96, 62 + (l.parking ? 8 : 0) + ((l.images || []).length ? 12 : 0) + ((l.desc || '').length > 60 ? 8 : 0) + (l.verified ? 6 : 0));
}

function previewMedia(input, target, type) {
  const el = $(target), max = type === 'image' ? 8 : 3;
  el.innerHTML = '';
  Array.from(input.files || []).slice(0, max).forEach(file => {
    const m = document.createElement(type === 'image' ? 'img' : 'video');
    m.src = URL.createObjectURL(file);
    m.title = file.name;
    if (type === 'video') { m.muted = true; m.controls = true; }
    el.appendChild(m);
  });
}

async function submitListing(e) {
  e.preventDefault();
  const f = e.target.elements;
  const btn = $('listSubmit');

  const imgFiles = [...f.listImages.files].slice(0, 8);
  const vidFiles = [...f.listVideos.files].slice(0, 3);

  if (vidFiles.some(v => v.size > 50 * 1048576)) return toast('Each video must be under 50 MB.');

  btn.disabled = true;
  btn.textContent = 'Publishing listing…';

  try {
    const uploadedImages = await Promise.all(imgFiles.map(compressImage));
    const loc = f.listLocation.value.trim();
    const type = f.listType.value;
    const city = f.listCity.value.trim() || loc.split(/[·,]/).pop().trim();

    const l = {
      id: Date.now(),
      name: f.listName.value.trim(),
      loc,
      city,
      rent: Number(f.listRent.value),
      area: Number(f.listArea.value),
      type,
      icon: TYPE_ICON[type] || '🏢',
      tag: 'New Listing',
      parking: f.listParking.checked,
      verified: f.listVerified.checked || currentRole === 'admin',
      status: currentRole === 'admin' ? 'approved' : 'approved',
      image: uploadedImages[0] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      images: uploadedImages.length ? uploadedImages : ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'],
      videos: vidFiles,
      desc: f.listDesc.value.trim() || 'Newly listed commercial space ready for lease.',
      owner: f.listOwner.value.trim() || currentUser?.name || 'Property Owner',
      ownerId: currentUser?.id || 'owner_1',
      phone: f.listPhone.value.trim(),
      mine: true
    };

    l.score = fitScore(l);

    try { await DB.put(l); } catch (err) { console.warn('DB error:', err); }

    l.videoSrc = vidFiles.map(v => URL.createObjectURL(v));
    properties.push(l);

    e.target.reset();
    $('imagePreview').innerHTML = '';
    $('videoPreview').innerHTML = '';
    closeModal('listModal');
    resetControls();
    justAdded = l.id;
    render();

    scrollToDiscover();
    toast('Listing published live on BizSpace!');
    setTimeout(() => { justAdded = null; }, 4500);

  } catch (err) {
    console.error(err);
    toast('Error uploading images. Please use JPG, PNG, or WebP files.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Publish Listing →';
  }
}

function openEditModal(id) {
  const p = findProperty(id);
  if (!p) return;

  $('editId').value = p.id;
  $('editName').value = p.name;
  $('editType').value = p.type;
  $('editCity').value = p.city;
  $('editLocation').value = p.loc;
  $('editRent').value = p.rent;
  $('editArea').value = p.area;
  $('editDesc').value = p.desc;
  $('editOwner').value = p.owner;
  $('editPhone').value = p.phone;
  $('editParking').checked = p.parking;

  closeModal('detailsModal');
  closeModal('ownerDashModal');
  openModal('editModal');
}

function submitEditListing(e) {
  e.preventDefault();
  const id = Number($('editId').value);
  const p = findProperty(id);

  if (p) {
    p.name = $('editName').value.trim();
    p.type = $('editType').value;
    p.city = $('editCity').value.trim();
    p.loc = $('editLocation').value.trim();
    p.rent = Number($('editRent').value);
    p.area = Number($('editArea').value);
    p.desc = $('editDesc').value.trim();
    p.owner = $('editOwner').value.trim();
    p.phone = $('editPhone').value.trim();
    p.parking = $('editParking').checked;
    p.score = fitScore(p);

    DB.put(p).catch(console.warn);
    saveState();
    closeModal('editModal');
    render();
    toast('Property details updated successfully.');
  }
}

async function deleteListing(id) {
  const p = findProperty(id);
  if (!p || !confirm(`Are you sure you want to delete "${p.name}"?`)) return;

  try { await DB.del(id); } catch (err) { console.warn(err); }

  properties = properties.filter(x => x.id !== id);
  savedIds = savedIds.filter(x => x !== id);
  compareIds = compareIds.filter(x => x !== id);

  saveState();
  closeModal('detailsModal');
  closeModal('ownerDashModal');
  render();
  toast('Property deleted.');
}

/* ================= REQUIREMENT FINDER ================= */
function findBusiness(e) {
  e.preventDefault();
  const biz = $('bizName').value.toLowerCase();
  const loc = $('bizLocation').value.trim();
  const budgetVal = Number($('bizBudget').value);

  const guess = /caf[eé]|restaurant|food|bakery|kitchen|tiffin|juice/.test(biz) ? 'Restaurant / Café'
    : /warehouse|storage|logistic|godown|distribution/.test(biz) ? 'Warehouse'
    : /office|startup|agency|consult|software|studio|clinic/.test(biz) ? 'Office'
    : /shop|store|retail|boutique|salon|showroom|pharmacy/.test(biz) ? 'Shop / Retail' : '';

  closeModal('businessModal');
  e.target.reset();
  resetControls();
  state.maxRent = budgetVal;

  const tries = [
    [loc, guess, 'Showing ideal matching commercial spaces.'],
    ['', guess, 'No space in that location; showing matching property types.'],
    ['', '', 'Showing all commercial spaces within your budget.']
  ];

  for (const [l, t, msg] of tries) {
    $('location').value = l;
    $('filterType').value = t;
    $('propertyType').value = t;
    readControls();
    if (visibleProperties().length) {
      render();
      scrollToDiscover();
      return toast(msg);
    }
  }

  render();
  scrollToDiscover();
  toast('No matching spaces under that budget. Try increasing budget.');
}

/* ================= MODALS & ACCESSIBILITY ================= */
function openModal(id) {
  const m = $(id);
  if (!m) return;
  lastFocus = document.activeElement;
  m.classList.add('open');
  document.body.classList.add('modal-open');
  setTimeout(() => (m.querySelector('input,select,textarea') || m.querySelector('.close'))?.focus(), 30);
}

function closeModal(id) {
  const m = $(id);
  if (!m) return;
  m.classList.remove('open');
  if (!document.querySelector('.modal.open')) {
    document.body.classList.remove('modal-open');
    lastFocus?.focus?.();
  }
}

function toggleMenu() {
  const n = document.querySelector('nav');
  const o = n.classList.toggle('open');
  $('menuBtn').setAttribute('aria-expanded', o);
}

function closeMenu() {
  document.querySelector('nav').classList.remove('open');
  $('menuBtn').setAttribute('aria-expanded', 'false');
}

function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) closeModal(e.target.id);
  if (!e.target.closest('.notif-wrapper')) $('notifDropdown')?.classList.remove('show');
});

document.querySelector('nav').addEventListener('click', e => {
  if (e.target.closest('a')) closeMenu();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id));
    $('notifDropdown')?.classList.remove('show');
  }
});

/* ================= INITIALIZATION ================= */
async function init() {
  applyRolePermissions();
  await DB.open();

  try {
    const stored = (await DB.all()) || [];
    stored.forEach(l => {
      l.mine = true;
      if (!properties.some(p => p.id === l.id)) properties.push(l);
    });
  } catch (err) {
    console.warn(err);
  }

  // Ensure default notifications exist
  if (!notifications.length) {
    notifications = [
      { id: 1, userId: 'user_tenant', title: 'Welcome to BizSpace', message: 'Browse commercial spaces or use smart matching.', read: false, time: '10:00 AM' },
      { id: 2, userId: 'owner_1', title: 'Listing Active', message: 'Your property "Prime Corner Retail" is featured.', read: false, time: '09:30 AM' }
    ];
  }

  render();
}

init();
