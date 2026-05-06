/* ── Mobile sidebar ── */
function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const btn = document.getElementById('hamburgerBtn');
    const ov = document.getElementById('sidebarOverlay');
    sb.classList.toggle('open');
    btn.classList.toggle('open');
    ov.classList.toggle('visible');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('hamburgerBtn').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('visible');
}

function showTab(i) {
    document.querySelectorAll('.exp-tab').forEach((t, j) => t.classList.toggle('active', j === i));
    document.querySelectorAll('.exp-panel').forEach((p, j) => p.classList.toggle('active', j === i));
}
const links = document.querySelectorAll('.nav-link-item');
const secs = ['about', 'experience', 'projects', 'contact'].map(id => document.getElementById(id));
function setActive() {
    let cur = 0;
    secs.forEach((s, i) => { if (s && window.scrollY >= s.offsetTop - 130) cur = i });
    links.forEach((l, i) => l.classList.toggle('active', i === cur));
}
window.addEventListener('scroll', setActive);
links.forEach((l, i) => {
    l.addEventListener('click', e => {
        e.preventDefault();
        secs[i] && secs[i].scrollIntoView({ behavior: 'smooth' });
        links.forEach((x, j) => x.classList.toggle('active', j === i));
        closeSidebar();
    });
});
setActive();