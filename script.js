
        let messageCount = 0;

        function logMessage() {
            const messageInput = document.getElementById('messageInput');
            const message = messageInput.value;
            if (message.trim() === '') {
                alert('Please enter a message');
                return;
            }

            messageCount++;
            const currentTime = new Date().toLocaleTimeString();
            const tableBody = document.getElementById('messageTableBody');
            const newRow = tableBody.insertRow();

            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);

            cell1.innerHTML = messageCount;
            cell2.innerHTML = message;
            cell3.innerHTML = currentTime;

            messageInput.value = '';
        }
    