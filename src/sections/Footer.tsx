import { profile } from "@/constants";

export default function Footer() {
    return (
        <footer className="py-10">
            <div className="wrap flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                <p>
                    &copy; {new Date().getFullYear()} {profile.name}
                </p>
                <p>Founder and CTO, based in {profile.location}.</p>
                <a href="#top" className="font-medium text-ink transition-colors hover:text-accent">
                    Back to top
                </a>
            </div>
        </footer>
    );
}
