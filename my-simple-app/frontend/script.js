async function fetchMessage() {
    try {
        const baseUrl = window.location.origin; // Get the base URL
        const apiUrl = `${baseUrl}/api/message`; // Construct the full API URL

        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('message').textContent = data.message;
    } catch (error) {
        console.error('Error fetching message:', error);
        document.getElementById('message').textContent = 'Error loading message.';
    }
}

fetchMessage();