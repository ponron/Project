document.addEventListener('DOMContentLoaded', (event) => {
    const progressBar = document.getElementById('progressBar');
    const totalDuration = 5000; // Total duration of progress (in milliseconds)
    const interval = 100; // Interval for updating the progress (in milliseconds)
    
    let startTime = null;

    function updateProgress(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min((elapsed / totalDuration) * 100, 100);
        progressBar.style.width = progress + '%';

        if (elapsed < totalDuration) {
            requestAnimationFrame(updateProgress);
        }
    }

    requestAnimationFrame(updateProgress);
});