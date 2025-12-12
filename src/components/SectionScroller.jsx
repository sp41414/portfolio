export default function SectionScroller() {
    const navItems = [
        { name: "Intro", href: "#intro" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];
    return (
        <aside className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-2">
            {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-3 text-sm font-medium text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                >
                    <span className="h-px w-4 bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100 transition-colors duration-200" />
                    <span>{item.name}</span>
                </a>
            ))}
        </aside>
    );
}
