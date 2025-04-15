// Modal functionality
import { addEventListener, getElement, setInnerHTML } from './utils/helpers.js';

export function initializeModal() {
	// Modal elements
	const infoButton = getElement('info-button');
	const infoModal = getElement('info-modal');
	const closeModal = document.querySelector('.close-modal');
	const updateDateElement = getElement('update-date');

	// Set current date format for update date
	const currentDate = new Date();
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDate = currentDate.toLocaleDateString('es-CO', options);
	if (updateDateElement) {
		setInnerHTML(updateDateElement, formattedDate);
	}

	// Modal functionality
	if (infoButton && infoModal && closeModal) {
		// Open modal when button is clicked
		addEventListener(infoButton, 'click', () => {
			infoModal.style.display = 'block';
			document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
		});

		// Close modal when X is clicked
		addEventListener(closeModal, 'click', () => {
			infoModal.style.display = 'none';
			document.body.style.overflow = ''; // Restore scrolling
		});

		// Close modal when clicking outside
		addEventListener(window, 'click', (e) => {
			if (e.target === infoModal) {
				infoModal.style.display = 'none';
				document.body.style.overflow = '';
			}
		});

		// Close modal with Escape key
		addEventListener(document, 'keydown', (e) => {
			if (e.key === 'Escape' && infoModal.style.display === 'block') {
				infoModal.style.display = 'none';
				document.body.style.overflow = '';
			}
		});
	}
}
