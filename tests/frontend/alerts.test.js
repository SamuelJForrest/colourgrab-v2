import '@testing-library/jest-dom';
import {
    closeAlerts,
    fadeOutSpeed,
} from '../../colourgrab/frontend/js/modules/alerts';
import { fireEvent } from '@testing-library/dom';

// Enable fake timers
jest.useFakeTimers();

describe('closeAlerts function', () => {
    test('should remove the alert wrapper after the closeAlerts function has run', () => {
        // create a mock alerts wrapper
        const alertsWrap = document.createElement('div');
        alertsWrap.classList.add('alerts-wrap');
        document.body.appendChild(alertsWrap);

        // call closeAlerts function
        closeAlerts();

        // test that alerts wrap is given an opacity of 0
        expect(document.querySelector('.alerts-wrap')).toHaveStyle({
            opacity: '0',
        });

        // advance time to run closeAlert's setTimeout
        jest.advanceTimersByTime(fadeOutSpeed);

        // test that alerts wrap is removed from the DOM
        expect(document.querySelector('.alerts-wrap')).toBeNull();
    });
});

describe('Click alertsClose button', () => {
    test('the closeAlerts function should run whenever an alertsClose button is clicked', () => {
        // create mock button + alerts wrap
        const alertsWrap = document.createElement('div');
        alertsWrap.classList.add('alerts-wrap');

        const alertsClose = document.createElement('button');
        alertsClose.classList.add('.alerts-close');
        document.body.appendChild(alertsWrap, alertsClose);

        // add event listener to alertsClose
        alertsClose.addEventListener('click', closeAlerts);

        // run mock click event
        fireEvent.click(alertsClose);

        // test that alerts wrap has been removed after setTimeout has run
        jest.advanceTimersByTime(fadeOutSpeed);
        expect(document.querySelector('.alerts-wrap')).toBeNull();
    });
});
