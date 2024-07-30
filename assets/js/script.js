document.addEventListener('DOMContentLoaded', function () {
        const workItems = document.querySelectorAll('.work-item');
        
        function handleScroll() {
            const triggerBottom = window.innerHeight / 5 * 4;
            
            workItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                
                if (itemTop < triggerBottom) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();  // Run on load in case some items are already in view
    });

    
