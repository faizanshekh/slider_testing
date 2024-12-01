import { generateMetadata } from "../layout";

export const metadata = await generateMetadata("blog");

export default function BlogPage() {
    return (
        <div>
            <h1>Blog</h1>
            <p>This is the blog page.</p>
        </div>
    );
}
