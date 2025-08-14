document.addEventListener('DOMContentLoaded',()=> {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

        const aiResponses = [
            "¡Hola! ¿En qué puedo ayudarte hoy?",
            "Esa es una pregunta interesante. Déjame pensar...",
            "Entendido. Procesando tu solicitud...",
            "Aquí tienes una posible respuesta a tu pregunta.",
            "Estoy aprendiendo constantemente. Gracias por tu paciencia.",
            "¿Hay algo más en lo que pueda asistirte?",
            "Parece que necesitas algo de información. Dime más.",
            "¡Absolutamente! Estoy aquí para ayudarte.",
            "Me alegra poder ser útil.",
            "Mi objetivo es ayudarte a mejorar tus habilidades de programación. ¿Qué desafío tienes en mente?"
        ];


        function addMessage(sender, text) {
            const messageDiv = document.createElement('div');document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

 

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender); // 'user' o 'ai'

        // Convertir saltos de línea a <br> para HTML
        messageDiv.innerHTML = text.replace(/\n/g, '<br>');

        chatMessages.appendChild(messageDiv);
        // Desplazarse al último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') {
            return; // No enviar mensajes vacíos
        }

        addMessage('user', messageText);
        userInput.value = ''; // Limpiar el input

        // Simular escritura de la IA y luego enviar respuesta
        setTimeout(() => {
            const aiThinkingMessage = document.createElement('div');
            aiThinkingMessage.classList.add('message', 'ai', 'thinking');
            aiThinkingMessage.textContent = 'La IA está escribiendo...';
            chatMessages.appendChild(aiThinkingMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(() => {
                chatMessages.removeChild(aiThinkingMessage); // Eliminar mensaje "escribiendo"
                const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                addMessage('ai', randomResponse);
            }, 1500); // La IA "escribe" por 1.5 segundos
        }, 500); // Pequeño retraso antes de que la IA "empiece a escribir"
    }

    // Evento para el botón de enviar
    sendButton.addEventListener('click', sendMessage);

    // Evento para la tecla 'Enter' en el campo de texto
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { // Si es Enter y no Shift + Enter
            e.preventDefault(); // Previene el salto de línea por defecto
            sendMessage();
        }
    });

    // Auto-redimensionar el textarea
    userInput.addEventListener('input', () => {
        userInput.style.height = 'auto'; // Restablecer la altura
        userInput.style.height = (userInput.scrollHeight) + 'px'; // Ajustar a la altura del contenido
    });

    // Mensaje inicial de bienvenida de la IA
    addMessage('ai', '¡Hola! Soy tu Asistente IA. Estoy aquí para ayudarte a programar. ¿Cómo puedo ayudarte hoy?');
});
            messageDiv.classList.add('message');
            messageDiv.classList.add(sender); // 'user' o 'ai'
    
            // Convertir saltos de línea a <br> para HTML
            messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    
            chatMessages.appendChild(messageDiv);
            // Desplazarse al último mensaje
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function sendMessage() {
            const messageText = userInput.value.trim();
            if (messageText === '') {
                return; // No enviar mensajes vacíos
            }
    
            addMessage('user', messageText);
            userInput.value = ''; // Limpiar el input
    
            // Simular escritura de la IA y luego enviar respuesta
            setTimeout(() => {
                const aiThinkingMessage = document.createElement('div');
                aiThinkingMessage.classList.add('message', 'ai', 'thinking');
                aiThinkingMessage.textContent = 'La IA está escribiendo...';
                chatMessages.appendChild(aiThinkingMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
    
                setTimeout(() => {
                    chatMessages.removeChild(aiThinkingMessage); // Eliminar mensaje "escribiendo"
                    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                    addMessage('ai', randomResponse);
                }, 1500); // La IA "escribe" por 1.5 segundos
            }, 500); // Pequeño retraso antes de que la IA "empiece a escribir"
        }

        sendButton.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', function (event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Evitar el comportamiento por defecto del Enter
                sendMessage();
            }
        });

    
    // Auto-redimensionar el textarea
    userInput.addEventListener('input', () => {
        userInput.style.height = 'auto'; // Restablecer la altura
        userInput.style.height = (userInput.scrollHeight) + 'px'; // Ajustar a la altura del contenido
    });

    addMessage('ai', '¡Hola! Soy tu Asistente IA. Estoy aquí para ayudarte a programar. ¿Cómo puedo ayudarte hoy?');



})