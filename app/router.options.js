export default {
    scrollBehavior(to, from, savedPosition) {
        // If there's a saved position, return it
        if (savedPosition) {
            return savedPosition;
        }
        // If the route has a hash, scroll to the element with that ID
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth', // Smooth scrolling
                top: 30, // Offset from the top
            };
        }
        // Otherwise, scroll to the top of the page
        return { top: 0 };
    }
}
