/**
 * Loads and displays noticeboard alerts from the JSON file
 */
async function loadNoticeboard() {
    try {
        const response = await fetch('/src/data/notices.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch notices: ${response.status}`);
        }
        
        const notices = await response.json();
        const noticeboardElement = document.getElementById('noticeboard');
        
        // Clear existing content
        noticeboardElement.innerHTML = '';
        
        // Add each notice to the noticeboard
        notices.forEach(notice => {
            const alertBox = document.createElement('div');
            alertBox.className = 'alert-box';
            
            const alertHeader = document.createElement('div');
            alertHeader.className = 'alert-header';
            
            const title = document.createElement('h2');
            title.textContent = notice.title;
            
            const date = document.createElement('div');
            date.className = 'alert-date';
            date.textContent = notice.date;
            
            alertHeader.appendChild(title);
            alertHeader.appendChild(date);
            
            alertBox.appendChild(alertHeader);
            
            // Handle content (which may contain HTML)
            const content = document.createElement('div');
            content.innerHTML = notice.content;
            
            // Append each paragraph element from content
            Array.from(content.children).forEach(child => {
                alertBox.appendChild(child);
            });
            
            // If there are no paragraph elements, add the content as a paragraph
            if (content.children.length === 0) {
                const paragraph = document.createElement('p');
                paragraph.innerHTML = notice.content;
                alertBox.appendChild(paragraph);
            }
            
            noticeboardElement.appendChild(alertBox);
        });
    } catch (error) {
        console.error('Error loading noticeboard:', error);
        const noticeboardElement = document.getElementById('noticeboard');
        noticeboardElement.innerHTML = '<p>Sorry, we could not load the noticeboard at this time.</p>';
    }
}

// Load the noticeboard when the page is fully loaded
document.addEventListener('DOMContentLoaded', loadNoticeboard); 