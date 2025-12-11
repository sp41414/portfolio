import ThemeProvider from "./contexts/ThemeProvider"
import ThemeToggle from "./components/ThemeToggle"

function App() {
    return (
        <ThemeProvider>
            <header className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-all duration-200">
                <nav className="sticky top-0 flex justify-end px-6 py-4">
                    <div className="flex justify-end">
                        <ThemeToggle />
                    </div>
                </nav>
            </header>
        </ThemeProvider>
    )
}

export default App
