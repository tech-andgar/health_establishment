export function toggleFilters() {
	const toggleButton = document.getElementById('toggle-filters');
	const filtersSection = document.querySelector('.filters');
	const toggleText = toggleButton.querySelector('.toggle-text');
	const toggleIcon = toggleButton.querySelector('.toggle-icon');

	if (toggleButton && filtersSection && toggleText && toggleIcon) {
		toggleButton.addEventListener('click', () => {
			const isHidden = filtersSection.style.display === 'none';
			filtersSection.style.display = isHidden ? 'block' : 'none';
			toggleButton.classList.toggle('active');
			toggleText.textContent = isHidden ? 'Ocultar filtros' : 'Mostrar filtros';
			toggleIcon.textContent = isHidden ? '▲' : '▼';
		});
	}
}
