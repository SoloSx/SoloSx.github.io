window.onload = function() {
    var canvas = document.getElementById('backgroundCanvas');
    var ctx = canvas.getContext('2d');

    // Make the canvas fill its parent
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Define the styles
    var styles = {
        1: {color: '#5B5B5B', size: 2},
        2: {color: '#6B6B6B', size: 3},
        3: {color: '#7B7B7B', size: 4},
        4: {color: '#8B8B8B', size: 5}
    };

    // Define the pattern
    var pattern = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    var gridSize = 55;  // You can adjust this to change the spacing between the dots

    // Draw the dots in a grid according to the pattern
    for (var y = 0; y < pattern.length; y++) {
        for (var x = 0; x < pattern[y].length; x++) {
            var style = styles[pattern[y][x]];

            ctx.beginPath();
            ctx.arc(x * gridSize, y * gridSize, style.size, 0, Math.PI * 2, false);
            ctx.fillStyle = style.color;
            ctx.fill();
        }
    }
}
