// Action bar tab switching
document.querySelectorAll('.action-bar-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.action-bar-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Market status popover
const infoIcon = document.querySelector('.ts-info-btn');
const popover = document.getElementById('market-popover');
const popoverClose = document.getElementById('popover-close');

function positionPopover() {
  const iconRect = infoIcon.getBoundingClientRect();
  const formRect = popover.offsetParent.getBoundingClientRect();

  // Center popover over the icon, accounting for the form container offset
  const popoverWidth = 260;
  const arrowWidth = 12;

  // Arrow center aligns with icon center
  const iconCenterX = iconRect.left + iconRect.width / 2 - formRect.left;
  let left = iconCenterX - popoverWidth / 2;

  // Keep within form bounds with 8px padding
  const maxLeft = formRect.width - popoverWidth - 8;
  left = Math.max(8, Math.min(left, maxLeft));

  const top = iconRect.bottom - formRect.top + 6;

  popover.style.left = left + 'px';
  popover.style.top = top + 'px';

  // Offset arrow to point at icon center regardless of popover shift
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
