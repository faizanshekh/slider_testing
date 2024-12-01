import { generateMetadata } from "../layout";

export const metadata = await generateMetadata("services");

export default function ServicesPage() {
    return (
        <div>
            <h1>Services</h1>
            <p>This is the services page.</p>
        </div>
    );
}
