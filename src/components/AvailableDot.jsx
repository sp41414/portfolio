export default function AvailableDot({ available, children }) {
    return (
        <span className={`inline-block w-2.5 h-2.5 ${available ? "bg-green-500 ring-green-100 dark:ring-green-950" : "bg-red-500 ring-red-100 dark:ring-red-950"} rounded-full ring-4`}>{children}</span>
    )
}
