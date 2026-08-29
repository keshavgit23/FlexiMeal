import Hero from "./sections/Hero.tsx";
import EmotionalHungerTimeline from "./sections/EmotionalHungerTimeline.tsx";
import StudentFreedom from "./sections/StudentFreedom.tsx";
import SustainabilityRevolution from "./sections/SustainabilityRevolution.tsx";
export function LandingPage() {
    return (
        <>
            <Hero />
            <EmotionalHungerTimeline />
            <StudentFreedom />
            <SustainabilityRevolution/>
        </>

    );
}