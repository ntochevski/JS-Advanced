function attachEventsListeners() {
    let seconds = 0;
    let content = document.querySelector('main');
    content.addEventListener('click', onClick);
    let inputF = document.querySelectorAll('div input[type = "text"]');

    function onClick(e) {
        if (e.target.type == 'button') {
            if (e.target.id == 'daysBtn') {
                let input = document.getElementById('days');
                seconds = input.value * 24 * 60 * 60;
            } else if (e.target.id == 'hoursBtn') {
                let input = document.getElementById('hours');
                seconds = input.value * 60 * 60;

            } else if (e.target.id == 'minutesBtn') {
                let input = document.getElementById('minutes');
                seconds = input.value * 60;

            } else if (e.target.id == 'secondsBtn') {
                seconds = document.getElementById('seconds').value;

            }
        }
    }
    for (const el of inputF) {
        if (el.id == 'days') {
            el.value = seconds / 60 / 60 / 24;
        } else if (el.id == 'hours') {
            el.value = seconds / 60 / 60;
        } else if (el.id == 'minutes') {
            el.value = seconds / 60;
        } else if (el.id == 'seconds') {
            el.value = seconds;
        }
    }
}