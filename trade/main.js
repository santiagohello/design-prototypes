// Action bar tab switching
document.querySelectorAll('.action-bar-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.action-bar-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Market status configurations
const MARKET_STATUSES = {
  premarket: {
    label: 'Market limited',
    labelClass: 'status-limited',
    session: 'Premarket',
    showSession: true,
    until: 'Until 9:31 AM',
    popoverText: "The market hasn't opened yet. Only eligible stocks are available to trade.",
    popoverNext: 'Regular market (9:35 AM)',
  },
  'paused-regular': {
    label: 'Market paused',
    labelClass: 'status-paused',
    session: '',
    showSession: false,
    until: '2 min until Regular market',
    popoverText: "The market hasn't opened yet. Only eligible stocks are available to trade.",
    popoverNext: 'Regular market (9:35 AM)',
  },
  open: {
    label: 'Market open',
    labelClass: 'status-open',
    session: '',
    showSession: false,
    until: 'Until 3:59 PM',
    popoverText: 'The market is open. All supported stocks are available to trade.',
    popoverNext: 'Postmarket (4:00 PM)',
  },
  'paused-postmarket': {
    label: 'Market paused',
    labelClass: 'status-paused',
    session: '',
    showSession: false,
    until: '2 min until Postmarket',
    popoverText: 'The market has closed. Only eligible stocks are available to trade.',
    popoverNext: 'Postmarket (4:00 PM)',
  },
  postmarket: {
    label: 'Market limited',
    labelClass: 'status-limited',
    session: 'Postmarket',
    showSession: true,
    until: 'Until 7:59 PM',
    popoverText: 'The market has closed. Only eligible stocks are available to trade.',
    popoverNext: 'Overnight (8:00 PM)',
  },
  'paused-overnight': {
    label: 'Market paused',
    labelClass: 'status-paused',
    session: '',
    showSession: false,
    until: '2 min until Overnight',
    popoverText: 'The market is closed. Overnight trading is available for eligible stocks.',
    popoverNext: 'Overnight (8:00 PM)',
  },
  overnight: {
    label: 'Market limited',
    labelClass: 'status-limited',
    session: 'Overnight',
    showSession: true,
    until: 'Until 3:55 AM',
    popoverText: 'The market is closed. Overnight trading is available for eligible stocks.',
    popoverNext: 'Premarket (4:00 AM)',
  },
  weekend: {
    label: 'Market limited',
    labelClass: 'status-limited',
    session: 'Weekend',
    showSession: true,
    until: 'Until Monday 3:55 AM',
    popoverText: 'The market is closed for the weekend. Weekend trading is available for eligible stocks.',
    popoverNext: 'Premarket (Monday 4:00 AM)',
  },
};

let currentStatus = 'open';

function applyStatus(statusKey) {
  const s = MARKET_STATUSES[statusKey];
  if (!s) return;

  const labelEl = document.getElementById('market-label');
  const dotEl = document.getElementById('market-dot');
  const sessionEl = document.getElementById('market-session');
  const untilEl = document.getElementById('market-until');

  // Label text + color class
  labelEl.textContent = s.label;
  labelEl.className = 'ts-market-label ' + s.labelClass;

  // Session + dot (only shown when there is a session name)
  if (s.showSession) {
    dotEl.style.display = '';
    sessionEl.style.display = '';
    sessionEl.textContent = s.session;
  } else {
    dotEl.style.display = 'none';
    sessionEl.style.display = 'none';
  }

  untilEl.textContent = s.until;

  // Update popover content
  document.querySelector('.ts-popover-text').innerHTML =
    s.popoverText + ' <a href="#" class="ts-popover-link">Learn more</a> about market hours.';
  document.querySelector('.ts-popover-next-value').textContent = s.popoverNext;

  currentStatus = statusKey;
}

// Market status popover
const infoIcon = document.querySelector('.ts-info-btn');
const popover = document.getElementById('market-popover');
const popoverClose = document.getElementById('popover-close');

function positionPopover() {
  const iconRect = infoIcon.getBoundingClientRect();
  const formRect = popover.offsetParent.getBoundingClientRect();

  const popoverWidth = 260;
  const arrowWidth = 12;

  const iconCenterX = iconRect.left + iconRect.width / 2 - formRect.left;
  let left = iconCenterX - popoverWidth / 2;

  const maxLeft = formRect.width - popoverWidth - 8;
  left = Math.max(8, Math.min(left, maxLeft));

  const top = iconRect.bottom - formRect.top + 6;

  popover.style.left = left + 'px';
  popover.style.top = top + 'px';

  const arrowLeft = iconCenterX - left - arrowWidth / 2;
  popover.querySelector('.ts-popover-arrow').style.marginLeft = (arrowLeft - popoverWidth / 2 + arrowWidth / 2) + 'px';
}

function openPopover() {
  popover.hidden = false;
  positionPopover();
  requestAnimationFrame(() => {
    popover.classList.add('is-open');
  });
}

function closePopover() {
  popover.classList.remove('is-open');
  popover.addEventListener('transitionend', () => {
    popover.hidden = true;
  }, { once: true });
}

infoIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  if (popover.hidden) {
    openPopover();
  } else {
    closePopover();
  }
});

popoverClose.addEventListener('click', (e) => {
  e.stopPropagation();
  closePopover();
});

document.addEventListener('click', (e) => {
  if (!popover.hidden && !popover.contains(e.target)) {
    closePopover();
  }
});

// Prototype settings panel
document.querySelectorAll('.proto-status-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.proto-status-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyStatus(btn.dataset.status);
    if (!popover.hidden) closePopover();
  });
});

// Init with default status
applyStatus(currentStatus);
