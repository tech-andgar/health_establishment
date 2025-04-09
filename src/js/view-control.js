// View control logic
import { addClass, removeClass, addEventListener } from './utils/helpers.js';

export function initializeViewControl(viewListBtn, viewBothBtn, viewMapBtn, map) {
    const viewControlButtons = [viewListBtn, viewBothBtn, viewMapBtn];
    
    /**
     * Sets the view mode by adding a class to the body and updating button states.
     * @param {'list' | 'both' | 'map'} mode The desired view mode.
     */
    function setViewMode(mode) {
        const body = document.body;
        
        // Remove existing view mode classes
        removeClass(body, 'view-mode-list');
        removeClass(body, 'view-mode-both');
        removeClass(body, 'view-mode-map');
        
        // Add the new view mode class
        if (mode === 'list') {
            addClass(body, 'view-mode-list');
        } else if (mode === 'map') {
            addClass(body, 'view-mode-map');
        } else {
            // Default or 'both'
            addClass(body, 'view-mode-both'); 
        }
        
        // Update active state for buttons
        viewControlButtons.forEach(btn => {
            if (btn) { // Ensure button exists before trying to modify classList
                removeClass(btn, 'active');
                if ((mode === 'list' && btn === viewListBtn) ||
                    (mode === 'map' && btn === viewMapBtn) ||
                    ((mode === 'both' || !mode) && btn === viewBothBtn)) { // Default to 'both'
                    addClass(btn, 'active');
                }
            }
        });

        // Invalidate map size after a short delay to allow layout changes
        // Crucial for Leaflet to render correctly when its container size changes
        setTimeout(() => {
            map.invalidateSize();
        }, 150); // Adjust delay if needed, 150ms often works well
    }

    // Add event listeners to the view control buttons
    if (viewListBtn) {
        addEventListener(viewListBtn, 'click', () => setViewMode('list'));
    }
    if (viewBothBtn) {
        addEventListener(viewBothBtn, 'click', () => setViewMode('both'));
    }
    if (viewMapBtn) {
        addEventListener(viewMapBtn, 'click', () => setViewMode('map'));
    }
    
    // Return the setViewMode function so it can be called from outside
    return setViewMode;
} 
