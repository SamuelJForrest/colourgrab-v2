import { closeAlerts } from '../../colourgrab/frontend/js/modules/alerts';

describe('closeAlerts function', () => {
    test('should remove alert from DOM when close button is clicked', () => {
        // Create DOM elements for testing
        const alertsWrap = document.createElement('div');
        alertsWrap.classList.add('alerts-wrap');
        document.body.appendChild(alertsWrap);

        // Call the closeAlerts function
        closeAlerts();

        // Assert that the alertsWrap is removed from the DOM
        expect(document.querySelectorAll('.alerts-wrap')).toBeNull();
    });
});
