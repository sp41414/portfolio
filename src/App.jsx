import ThemeProvider from "./contexts/ThemeProvider"
import ThemeToggle from "./components/ThemeToggle"
import Flag from "./components/Flag"
import AvailableDot from "./components/AvailableDot"
import TechStack from "./components/TechStack"
import { ExternalLink } from "lucide-react"

function App() {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
                <nav className="sticky top-0 z-1 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-5xl mx-auto px-6 py-4 flex justify-end">
                        <ThemeToggle />
                    </div>
                </nav>

                <main className="flex-1 max-w-5xl mx-auto px-6 py-16 sm:py-24">
                    <div className="space-y-8">
                        <section className="space-y-4">
                            <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                                Hey, I'm <span className="text-yellow-400 underline">Husain</span>!
                            </h1>
                            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 flex items-center gap-2 flex-wrap">
                                Fullstack Developer <span className="text-neutral-400 dark:text-neutral-600">•</span> United Arab Emirates <Flag />
                            </p>
                        </section>

                        <section className="flex items-center gap-2.5 text-base sm:text-lg">
                            <AvailableDot available={true} />
                            <span className="text-neutral-600 dark:text-neutral-400">Available for work</span>
                        </section>

                        <TechStack />

                        <section className="space-y-4">
                            <div>
                                <h2 className="text-xl font-medium tracking-wide uppercase font-mono text-neutral-500 dark:text-neutral-300">Personal Projects</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
                                <div className="group rounded-lg border-2 border-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 dark:border-neutral-800 p-4 hover:shadow-lg shadow-neutral-300 dark:shadow-neutral-800">
                                    <h3 className="text-lg font-semibold mb-2">Messaging App</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">A discord-like Messaging App with a REST API, it includes authorization, sending messages to another user, customizing a user profile, and a friends system for sending a friend request, accepting, refusing and blocking another user.</p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 h-6 bg-neutral-100 rounded-full text-xs font-medium dark:bg-neutral-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="shrink-0 size-3.5"><path fill="#58C4DC" d="M8.028 6.496c-.846 0-1.532.667-1.532 1.49s.686 1.49 1.532 1.49 1.533-.667 1.533-1.49-.687-1.49-1.533-1.49"></path><path fill="#58C4DC" d="M15.999 8c0-1.17-1.114-2.196-2.888-2.871q.036-.23.06-.45C13.346 2.996 12.93 1.783 12 1.26c-1.042-.584-2.512-.16-4 .997-1.488-1.156-2.959-1.58-4-.996-.93.523-1.347 1.736-1.172 3.417q.023.222.06.452a8 8 0 0 0-.432.174C.872 5.996 0 6.954 0 8c0 1.17 1.114 2.196 2.888 2.871a8 8 0 0 0-.06.45c-.175 1.681.241 2.895 1.172 3.417.32.177.683.267 1.05.262.882 0 1.911-.451 2.95-1.259C9.036 14.55 10.066 15 10.95 15c.367.005.73-.085 1.05-.262.93-.522 1.347-1.735 1.172-3.417a9 9 0 0 0-.06-.45C14.886 10.197 16 9.17 16 8m-5.057-6.26c.236-.005.47.05.677.161.646.363.937 1.348.795 2.701q-.014.138-.034.28a14 14 0 0 0-2.258-.461c-.463-.6-.979-1.16-1.54-1.673.882-.663 1.71-1.008 2.36-1.008m-.304 7.741q-.428.724-.931 1.4a17 17 0 0 1-3.418 0q-.502-.676-.928-1.4-.429-.72-.777-1.482.348-.761.777-1.482.426-.72.926-1.396a17 17 0 0 1 3.42-.002A16.3 16.3 0 0 1 11.414 8a16 16 0 0 1-.777 1.482m1.165-.549q.27.713.44 1.455-.742.225-1.51.354.292-.427.565-.889.269-.456.508-.918m-4.877 2.74a18 18 0 0 0 2.147 0q-.5.583-1.075 1.097-.574-.514-1.072-1.098m-1.66-.934a12 12 0 0 1-1.512-.353q.17-.74.439-1.453.235.461.508.918.275.46.564.89m-1.072-3.68a11 11 0 0 1-.438-1.446q.742-.225 1.507-.356a17 17 0 0 0-1.072 1.803m4.88-2.74a18 18 0 0 0-2.148 0q.499-.583 1.073-1.097.574.515 1.075 1.098m2.224 1.822a16 16 0 0 0-.568-.889q.77.129 1.515.355-.17.74-.439 1.452a15 15 0 0 0-.508-.918m-7.71-1.542c-.143-1.353.149-2.338.794-2.701.208-.111.441-.167.678-.161.65 0 1.477.344 2.36 1.008a13.3 13.3 0 0 0-1.542 1.674q-1.15.136-2.258.459a7 7 0 0 1-.034-.28M2.768 5.98l.266-.11q.268 1.096.72 2.13-.454 1.038-.72 2.135C1.596 9.561.762 8.766.762 8c0-.726.734-1.462 2.006-2.02m1.612 8.118c-.645-.363-.937-1.348-.794-2.701q.013-.138.034-.28c.737.217 1.493.37 2.257.461q.698.902 1.541 1.674c-1.23.924-2.354 1.229-3.036.846m8.033-2.701c.14 1.353-.15 2.338-.795 2.7-.682.385-1.807.08-3.036-.845a13.3 13.3 0 0 0 1.54-1.674q1.15-.135 2.258-.46.02.141.034.279m.553-1.263A13 13 0 0 0 12.248 8c.301-.69.542-1.405.72-2.135 1.435.574 2.271 1.369 2.271 2.135s-.834 1.56-2.272 2.134"></path></svg>React</span>
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 h-6 bg-neutral-100 rounded-full text-xs font-medium dark:bg-neutral-800">
                                            <svg role="img" className="size-3.5 shrink-0 fill-[#5FA04E]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" /></svg>
                                            Node</span>

                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 h-6 bg-neutral-100 rounded-full text-xs font-medium dark:bg-neutral-800">
                                            <svg role="img" className="shrink-0 size-3.5 fill-black dark:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Express</title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" /></svg>
                                            Express</span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">

                                            Prisma</span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">

                                            Passport (JWT)</span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">

                                            Tailwindcss</span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">

                                            Vite</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div >
        </ThemeProvider >
    )
}

export default App
