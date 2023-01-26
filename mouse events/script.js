

        const menter = document.getElementById('box');

        menter.addEventListener('mouseenter', () => {
            menter.style.backgroundColor = 'red';
            console.log('mouse enter');
        });

        menter.addEventListener('mouseleave', () => {
            console.log('mouse leave');
            menter.style.backgroundColor = 'pink';
        })