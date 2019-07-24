const correctAnswer = ['B', 'A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const bola = document.querySelector('.bola');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 20;
        }
    });
    scrollTo(0, 0);
    result.classList.remove('d-none');

    let count = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${count}%`;
        if (count == score) {
            clearInterval(timer);
            bola.classList.add('heartbeat');
            setTimeout(() => {
                bola.classList.remove('heartbeat');
            }, 3000);
        } else {
            count++;
        }
    }, 30);
});