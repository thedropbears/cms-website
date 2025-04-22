/**
 * Robot Timeline Loader
 * Loads robot data from JSON file and populates the timeline
 */

// Function to create timeline item for a robot
function createTimelineItem(robot) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';

    // Create year element
    const yearEl = document.createElement('div');
    yearEl.className = 'timeline-year';
    yearEl.textContent = robot.year;
    timelineItem.appendChild(yearEl);

    // Create content container
    const contentEl = document.createElement('div');
    contentEl.className = 'timeline-content';

    // Create image element
    const imageContainer = document.createElement('div');
    imageContainer.className = 'timeline-image';
    const img = document.createElement('img');
    img.src = robot.image;
    img.alt = `${robot.year} ${robot.robotName} Robot`;
    img.onerror = function() { this.src = '/src/images/placeholder-robot.jpg'; };
    imageContainer.appendChild(img);
    contentEl.appendChild(imageContainer);

    // Create text content
    const textEl = document.createElement('div');
    textEl.className = 'timeline-text';

    // Robot title with game name and robot name
    const titleEl = document.createElement('h3');
    titleEl.textContent = `${robot.gameName} - "${robot.robotName}"`;
    textEl.appendChild(titleEl);

    // Robot description
    const descEl = document.createElement('p');
    descEl.textContent = robot.description;
    textEl.appendChild(descEl);

    // Awards section
    if (robot.awards && robot.awards.length > 0) {
        const awardsEl = document.createElement('div');
        awardsEl.className = 'awards';

        const awardsTitle = document.createElement('h4');
        awardsTitle.textContent = 'Awards:';
        awardsEl.appendChild(awardsTitle);

        const awardsList = document.createElement('ul');
        robot.awards.forEach(award => {
            const awardItem = document.createElement('li');
            awardItem.textContent = award;
            awardsList.appendChild(awardItem);
        });
        awardsEl.appendChild(awardsList);
        textEl.appendChild(awardsEl);
    }

    contentEl.appendChild(textEl);
    timelineItem.appendChild(contentEl);

    return timelineItem;
}

// Function to initialize the timeline animation
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    };
    
    // Function to handle scroll events
    const handleScroll = () => {
        timelineItems.forEach((item) => {
            if (isInViewport(item)) {
                item.classList.add('visible');
            }
        });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger on initial load
    handleScroll();
}

// Main function to load robot data from JSON
async function loadRobotData() {
    try {
        const response = await fetch('/src/data/robots.json');
        if (!response.ok) {
            throw new Error('Failed to load robot data');
        }

        const robotData = await response.json();
        const timelineContainer = document.getElementById('robot-timeline');

        // Sort robots by year (newest first)
        robotData.sort((a, b) => b.year - a.year);

        // Create and append timeline items
        robotData.forEach(robot => {
            const timelineItem = createTimelineItem(robot);
            timelineContainer.appendChild(timelineItem);
        });

        // Initialize animation after all items are added
        initTimelineAnimation();
    } catch (error) {
        console.error('Error loading robot data:', error);
        const timelineContainer = document.getElementById('robot-timeline');
        timelineContainer.innerHTML = `<div class="error">Unable to load robot data. Please try again later.</div>`;
    }
}

// Load data when DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadRobotData);

export { loadRobotData }; 