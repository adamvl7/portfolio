import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const addPortfolioItem = async () => {
    try {
        const docRef = await addDoc(collection(db, 'portfolio'), {
            name: "Pickleball Match Tracker",
            description: "A full-stack web application built with Next.js, TypeScript, and Tailwind CSS that helps pickleball players log and analyze their matches in one place. Users can record match details — including date, opponent name, DUPR rating, scores, and outcomes — and instantly view win/loss statistics and performance trends. The app saves all data locally in the browser for instant, offline access.",
            image: "/Pickleball_Match_Tracker.png",
            url: "#" // Replace with your actual project URL when available
        });
        console.log("Portfolio item added with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding portfolio item: ", error);
        throw error;
    }
};