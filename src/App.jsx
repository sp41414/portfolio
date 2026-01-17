import ThemeProvider from "./contexts/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import Flag from "./components/Flag";
import AvailableDot from "./components/AvailableDot";
import TechStack from "./components/TechStack";
import ProjectCards from "./components/ProjectCards";
import Contact from "./components/Contact";
import SectionScroller from "./components/SectionScroller";

function App() {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
                {/*
                    add back when the portfolio is a little bit... bigger..
                    <SectionScroller />
                */}
                <nav className="sticky top-0 z-10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-5xl mx-auto px-6 py-4 flex justify-end">
                        <ThemeToggle />
                    </div>
                </nav>

                <main className="flex-1 max-w-5xl mx-auto px-6 py-16 sm:py-24">
                    <div className="space-y-8">
                        <section id="intro" className="space-y-4">
                            <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                                Hey, I'm{" "}
                                <span className="text-yellow-400 underline">
                                    Husain
                                </span>
                                !
                            </h1>
                            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 flex items-center gap-2 flex-wrap">
                                Fullstack Developer{" "}
                                <span className="text-neutral-400 dark:text-neutral-600">
                                    •
                                </span>{" "}
                                United Arab Emirates <Flag />
                            </p>
                        </section>

                        <section className="flex items-center gap-2.5 text-base sm:text-lg">
                            <AvailableDot available={true} />
                            <span className="text-neutral-600 dark:text-neutral-400">
                                Available for work
                            </span>
                        </section>

                        <TechStack />

                        <ProjectCards />

                        <Contact />
                    </div>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
