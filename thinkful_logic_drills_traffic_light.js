function updateLight(current) {
    let next = '';
    switch (current) {
        case 'green':
        next = next + 'yellow';
        break;
        case 'yellow':
        next = next + 'red';
        break;
        case 'red':
        next = next + 'green';
        break;
    }
    return next;
}