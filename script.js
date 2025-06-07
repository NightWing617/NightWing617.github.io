
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'beige': '#F5F0EB',
                        'ivory': '#FFFFFF',
                        'charcoal': '#333333',
                        'blush': '#E8C4C4',
                        'rosegold': '#B76E79'
                    },
                    fontFamily: {
                        'heading': ['Lora', 'serif'],
                        'body': ['Open Sans', 'sans-serif']
                    }
                }
            }
        }
    

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    