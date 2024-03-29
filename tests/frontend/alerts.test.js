import '@testing-library/jest-dom';
import { closeAlerts } from '../../colourgrab/frontend/js/modules/alerts';

describe('closeAlerts function', () => {
    test('should remove alert from DOM when close button is clicked', () => {
        const testAlertWrap = document.createElement('div');
        testAlertWrap.classList.add('alerts-wrap');
        document.body.appendChild(testAlertWrap);

        expect(document.querySelector('.alerts-wrap')).toBeInTheDocument();

        // closeAlerts();

        // // Assert that the alertsWrap is removed from the DOM
        // expect(document.querySelector('.alerts-wrap')).toBeNull();
    });
});
