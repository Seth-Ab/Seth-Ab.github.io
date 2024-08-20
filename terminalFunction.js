document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input');
    const outputDiv = document.getElementById('output');
    const usernameSpan = document.getElementById('username');
    
//    let username = '';

    const commands = {
        help: 'Available commands: help, hello, clear, quit, about, projects, user',
        hello: 'Hello, world!',
        clear: '',
        quit: 'Redirecting to home page...',
        about: `
        <p>This is the 'Simulated Terminal' project.</p>
        <p>To learn <a class="txthtml">HTML</a>, <a class="txtcss">CSS</a>, and <a class="txtjs">JavaScript</a>, 
        I thought the best way would be through a project.</p>
        <p>Due to the nature of programming, this project is still a <a class="wip">work in progress</a>.</p>
        <p>I'm not certain what exact purpose the 'Simulated Terminal' servers yet, but I'm thinking either:</p>
        <ol type='1'>
            <li>Replacement for the whole website</li>
            <li>A feature of a diiferent, larger site
                <ul>
                    <li>If this were the case, the functionality would be more limited.</li>
                </ul>
            </li>
        </ol>
        `,
        projects: `
        <h3>List Of Projects:</h3>
        <p><strong>Note</strong>: Clicking a project link will take you to a different page.</p>
        <ul class="project-list">
            <li class="project-item"><a href="home.html">TEST-ONE</a></li>
            <li class="project-item"><a href="home.html">TEST-TOO</a></li>
        </ul>
        `,
        /* projects:  */
        user: `To update your username, simply type \'user + desired name\' into the terminal.`,
    };

    // Initial introduction message
    const introMessage = `
        Welcome to the Simulated Terminal!
        Type 'help' to see available commands.
    `;

    // Function to simulate typing effect
    function typeMessage(message) {
        let index = 0;
        const typingInterval = setInterval(() => {
            outputDiv.innerHTML += message[index];
            outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to bottom
            index++;
            if (index >= message.length) {
                clearInterval(typingInterval);
            }
        }, 25); // Adjust typing speed (milliseconds per character)
    }

    // Start typing the intro message
    typeMessage(introMessage);

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const inputValue = inputField.value.trim();
            handleCommand(inputValue);
            inputField.value = '';
        }
    });

    function handleCommand(command) {
        const prompt = usernameSpan.textContent ? `${usernameSpan.textContent}$` : '$';
        //const prompt = username ? `${username}\$` : '$';
        outputDiv.innerHTML += `<div style="color: #00FF00;"><span style="color: #00FF00;">${prompt} </span>${command}</div>`;
        // if, else --> switch?
        if (command === 'clear') {
            outputDiv.innerHTML = '';
        } else if (commands.hasOwnProperty(command)) {
            outputDiv.innerHTML += `<div>${commands[command]}</div>`;
            if (command === 'quit') {
                window.location.href = 'home.html';
            }
        } else if (command.startsWith('user ')) {
            // username --> newUsername
            newUsername = command.split(' ')[1];
            // Whole line
            usernameSpan.textContent = newUsername;
            // username --> newUsername
            outputDiv.innerHTML += `<div>Username set to: ${newUsername}</div>`;
        } else {
            outputDiv.innerHTML += `<div>Command not found: ${command}</div>`;
        }
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});

/* 
TO DO

*/