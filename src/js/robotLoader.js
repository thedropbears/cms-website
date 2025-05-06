// Function to load and display robots from robots.json
async function loadRobots() {
    const contentWrapper = document.querySelector('.content-wrapper');
    
    try {
        // Add a title section
        const titleSection = document.createElement('div');
        titleSection.innerHTML = `
            <h1 class="section-title">Our Robots</h1>
            <div class="content-box">
                <p>Explore the history of Drop Bears robotics through our competition robots over the years.</p>
            </div>
        `;
        contentWrapper.appendChild(titleSection);
        
        // Create container for robot cards
        const robotContainer = document.createElement('div');
        robotContainer.className = 'content-grid';
        contentWrapper.appendChild(robotContainer);
        
        // Show loading state
        robotContainer.innerHTML = '<div class="loading">Loading robots...</div>';
        
        // Fetch robots data
        const response = await fetch('/src/data/robots.json');
        const robots = await response.json();
        
        // Clear loading state
        robotContainer.innerHTML = '';
        
        // Sort robots by year in descending order (newest first)
        robots.sort((a, b) => b.year - a.year);
        
        // Create a card for each robot
        robots.forEach(robot => {
            const robotCard = document.createElement('div');
            robotCard.className = 'content-card';
            
            // Create award list HTML if awards exist
            let awardsHTML = '';
            if (robot.awards && robot.awards.length > 0) {
                awardsHTML = `
                    <div class="robot-awards">
                        <h3>Awards</h3>
                        <ul>
                            ${robot.awards.map(award => `<li>${award}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            robotCard.innerHTML = `
                <h2>${robot.year} - ${robot.gameName}</h2>
                <h3>${robot.robotName}</h3>
                ${robot.image ? `<img src="${robot.image}" alt="${robot.robotName}" class="robot-image">` : ''}
                <p>${robot.description}</p>
                ${awardsHTML}
            `;
            
            robotContainer.appendChild(robotCard);
        });
        
    } catch (error) {
        contentWrapper.innerHTML = `<div class="error">Error loading robots: ${error.message}</div>`;
        console.error('Error loading robots:', error);
    }
}

// Load robots when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadRobots);

export { loadRobots };
