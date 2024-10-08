document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.dataset.choice;
            const computerChoice = getComputerChoice();
            const result = getResult(userChoice, computerChoice);
            displayResult(result, userChoice, computerChoice);
        });
    });
    
    function getComputerChoice() {
        const choices = ['pedra', 'papel', 'tesoura'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
    
    function getResult(user, computer) {
        if (user === computer) {
            return 'Empate';
        }
        
        const winningCombinations = {
            pedra: ['tesoura'],
            papel: ['pedra'],
            tesoura: ['papel'],
        };
    
        return winningCombinations[user].includes(computer) ? 'Você ganhou!' : 'Você perdeu';
    }
    
    function displayResult(result, userChoice, computerChoice) {
        const resultDiv = document.getElementById('result');
        const descriptionDiv = document.getElementById('description');
    
        resultDiv.innerHTML = `
            <strong>Você escolheu:</strong> ${userChoice}.<br><br>
            <strong>Máquina escolheu:</strong> ${computerChoice}.<br><br>
            Resultado: <strong>${result}</strong>
        `;
        descriptionDiv.innerHTML = getDescription(result, userChoice, computerChoice);
    }
    
    function getDescription(result, userChoice, computerChoice) {
        const descriptions = {
            'pedra': {
                'Você ganhou!': 'Pedra quebra a tesoura.',
                'Você perdeu': 'Papel cobre a pedra.',
                'Empate': 'Ambos escolheram pedra.'
            },
            'papel': {
                'Você ganhou!': 'Papel cobre a pedra.',
                'Você perdeu': 'Tesoura corta o papel.',
                'Empate': 'Ambos escolheram papel.'
            },
            'tesoura': {
                'Você ganhou!': 'Tesoura corta papel.',
                'Você perdeu': 'Pedra quebra tesoura.',
                'Empate': 'Ambos escolheram tesoura.'
            },
        };
    
        return descriptions[userChoice][result];
    }
    
    document.querySelector('.resultado').style.display = 'block';
})
