document.addEventListener('DOMContentLoaded', function() {
    // Initialize chart
    const ctx = document.getElementById('savings-chart').getContext('2d');
    const savingsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Travel', 'Emergency', 'Electronics', 'Real Estate', 'Vehicle', 'Education', 'Shopping'],
            datasets: [{
                data: [3200, 7500, 2700, 12000, 600, 5000, 200],
                backgroundColor: [
                    '#4361ee', '#3a0ca3', '#4cc9f0', '#4ade80', '#fbbf24', '#f87171', '#9b5de5'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 20
                    }
                }
            },
            cutout: '70%'
        }
    });
    
    // Form submission handler
    document.getElementById('goal-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Goal added successfully! (This would connect to the backend in a real application)');
        this.reset();
    });
    
    // Add event listeners to all action buttons
    document.querySelectorAll('.btn-deposit').forEach(btn => {
        btn.addEventListener('click', function() {
            const goalTitle = this.closest('.goal-card').querySelector('.goal-title').textContent;
            const amount = prompt(`How much would you like to deposit to "${goalTitle}"?`);
            if (amount && !isNaN(amount)) {
                alert(`Deposited $${amount} to "${goalTitle}"! (This would update the backend in a real application)`);
            }
        });
    });
    
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', function() {
            const goalTitle = this.closest('.goal-card').querySelector('.goal-title').textContent;
            alert(`Editing "${goalTitle}" (This would open an edit form in a real application)`);
        });
    });
    
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const goalTitle = this.closest('.goal-card').querySelector('.goal-title').textContent;
            if (confirm(`Are you sure you want to delete "${goalTitle}"?`)) {
                alert(`Deleted "${goalTitle}"! (This would remove from backend in a real application)`);
            }
        });
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            alert(`Filtering by: ${this.textContent} (This would filter goals in a real application)`);
        });
    });
    
    // Add goal button
    document.getElementById('add-goal-btn').addEventListener('click', function() {
        document.getElementById('goal-form').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('goal-name').focus();
    });
});