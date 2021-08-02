window.addEventListener('DOMContentLoaded', () => {
    const quizItems = document.querySelectorAll('.salary__quiz-item');
    const quizBlock = document.querySelectorAll('.salary__quiz');
    const quizBtn = document.querySelectorAll('.btn__quiz');
    const quizBtnBack = document.querySelectorAll('.btn__quiz-back');

    quizItems.forEach((item, i) => {
        if (item.closest('.salary__quiz-list-2') || item.closest('.salary__quiz-list-3')) {
            item.addEventListener('click', () => {
                quizItems.forEach(item => {
                    if (item.classList.contains('salary__quiz-item--active')) {
                        item.classList.remove('salary__quiz-item--active');
                    }
                })
                item.classList.add('salary__quiz-item--active');
            })
        } else {
            item.addEventListener('click', () => {
                item.classList.toggle('salary__quiz-item--active');
            })
        }
    });




    function hideQuiz() {
        quizBlock.forEach(item => {
            item.classList.add('hidden')
        })
    }
    function showQuiz(i = 0) {
        quizBlock[i].classList.remove('hidden');
    }

    hideQuiz();
    showQuiz();

    quizBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            hideQuiz();
            showQuiz(i + 1);
        });
    })

    quizBtnBack.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideQuiz();
            showQuiz(i);
        })
    })
})