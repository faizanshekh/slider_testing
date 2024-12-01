import { generateMetadata } from "./layout";

export const metadata = await generateMetadata("/");

export default function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the services page.</p>
        </div>
    );
}
