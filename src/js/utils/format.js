export function formatPhoneNumber(phoneNumber) {
	// Remove any non-numeric characters
	const cleaned = phoneNumber.replace(/\D/g, '');

	// Format the cleaned number
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
	return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber;
}

export function formatDate(date) {
	const currentDate = date ? new Date(date) : new Date();
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return currentDate.toLocaleDateString('es-CO', options);
}
