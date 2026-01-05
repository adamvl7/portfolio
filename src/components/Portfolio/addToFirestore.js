import { addPortfolioItem } from './addPortfolioItem';

// Run this function in the browser console or use it in a component
const addPickleballProjectToFirestore = async () => {
    try {
        const id = await addPortfolioItem();
        console.log('Successfully added Pickleball Match Tracker project with ID:', id);
        // Refresh the page to see the new project
        window.location.reload();
    } catch (error) {
        console.error('Error:', error);
    }
};