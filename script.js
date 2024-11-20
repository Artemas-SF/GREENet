// Obtener elementos de la interfaz
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Función para mostrar los mensajes
function renderMessages() {
    chatMessages.innerHTML = ''; // Limpiar los mensajes previos
    messages.forEach((msg) => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = msg.text;
        messageDiv.style.textAlign = msg.sender === 'user' ? 'right' : 'left';
        chatMessages.appendChild(messageDiv);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight; // Hacer scroll automático al final
}

// Función para enviar un mensaje
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (!messageText) return; // Si el mensaje está vacío, no hacer nada

    // Agregar el mensaje del usuario
    messages.push({ sender: 'user', text: messageText });

    // Agregar la respuesta automática del bot
    setTimeout(() => {
        messages.push({ sender: 'bot', text: `Bot responde: ${messageText}` });
        renderMessages();
    }, 1000);

    // Limpiar el campo de entrada
    messageInput.value = '';
    renderMessages();
}

// Eventos
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Almacén para los mensajes
let messages = [];
