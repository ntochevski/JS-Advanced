function solve(str) {
    let days = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday:7,
    }
    if (days[str]) {
        return days[str];
    } else {
        return 'error'
    }
}

solve('niki')