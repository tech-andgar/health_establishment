// Utility functions for the application

/**
 * Safely gets an element by ID
 * @param {string} id - The ID of the element to get
 * @returns {HTMLElement|null} - The element or null if not found
 */
export function getElement(id) {
    return document.getElementById(id);
}

/**
 * Safely adds an event listener to an element
 * @param {HTMLElement} element - The element to add the listener to
 * @param {string} event - The event type
 * @param {Function} handler - The event handler function
 */
export function addEventListener(element, event, handler) {
    if (element) {
        element.addEventListener(event, handler);
    }
}

/**
 * Safely removes an event listener from an element
 * @param {HTMLElement} element - The element to remove the listener from
 * @param {string} event - The event type
 * @param {Function} handler - The event handler function
 */
export function removeEventListener(element, event, handler) {
    if (element) {
        element.removeEventListener(event, handler);
    }
}

/**
 * Safely sets the innerHTML of an element
 * @param {HTMLElement} element - The element to set the innerHTML of
 * @param {string} html - The HTML to set
 */
export function setInnerHTML(element, html) {
    if (element) {
        element.innerHTML = html;
    }
}

/**
 * Safely adds a class to an element
 * @param {HTMLElement} element - The element to add the class to
 * @param {string} className - The class to add
 */
export function addClass(element, className) {
    if (element) {
        element.classList.add(className);
    }
}

/**
 * Safely removes a class from an element
 * @param {HTMLElement} element - The element to remove the class from
 * @param {string} className - The class to remove
 */
export function removeClass(element, className) {
    if (element) {
        element.classList.remove(className);
    }
}

/**
 * Safely toggles a class on an element
 * @param {HTMLElement} element - The element to toggle the class on
 * @param {string} className - The class to toggle
 */
export function toggleClass(element, className) {
    if (element) {
        element.classList.toggle(className);
    }
}

/**
 * Safely sets the value of an input element
 * @param {HTMLInputElement} element - The input element to set the value of
 * @param {string} value - The value to set
 */
export function setInputValue(element, value) {
    if (element) {
        element.value = value;
    }
}

/**
 * Safely gets the value of an input element
 * @param {HTMLInputElement} element - The input element to get the value of
 * @returns {string} - The value of the input element
 */
export function getInputValue(element) {
    return element ? element.value : '';
}

/**
 * Safely checks if an element has a class
 * @param {HTMLElement} element - The element to check
 * @param {string} className - The class to check for
 * @returns {boolean} - Whether the element has the class
 */
export function hasClass(element, className) {
    return element ? element.classList.contains(className) : false;
} 
