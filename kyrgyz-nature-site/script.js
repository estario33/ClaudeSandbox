// Фильтр мест
const filterButtons = document.querySelectorAll('.filters button');
const placeRows = document.querySelectorAll('.places li');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.toggle('on', b === btn));
    const type = btn.dataset.f;
    placeRows.forEach(row => {
      row.hidden = type !== 'all' && row.dataset.t !== type;
    });
  });
});

// Сезоны (вкладки, управление стрелками)
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));

function selectTab(tab) {
  tabs.forEach(t => {
    const active = t === tab;
    t.setAttribute('aria-selected', active);
    t.tabIndex = active ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !active;
  });
  tab.focus();
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') selectTab(tabs[(i + 1) % tabs.length]);
    if (e.key === 'ArrowLeft') selectTab(tabs[(i - 1 + tabs.length) % tabs.length]);
  });
});
