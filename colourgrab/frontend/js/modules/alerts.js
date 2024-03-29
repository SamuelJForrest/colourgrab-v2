const alertsClose = document.querySelector('.alerts-close');
const alertsWrap = document.querySelector('.alerts-wrap');
const fadeOutSpeed = 1000; // matches the .alerts-wrap opacity transition property in _alerts.scss

const closeAlerts = () => {
    alertsWrap.style.opacity = 0;
    setTimeout(() => {
        alertsWrap.remove();
    }, fadeOutSpeed);
};

if (alertsClose) {
    alertsClose.addEventListener('click', closeAlerts);
}

export { closeAlerts };
