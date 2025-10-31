import type { StatsDisplayProps } from "../../types";



export default function StatsDisplay({ stats, showReadingTime}: StatsDisplayProps) {

    return (
        <div className="flex flex-row flex-wrap justify-evenly bg-slate-100 border rounded-lg border-gray-300 rounded-lg">
            <div className="w-30">
                <p className="text-gray-600 dark:text-slate-400">Characters</p>
                <p className="text-cyan-500">{stats.characterCount}</p>
            </div>
            <div className="w-30">
                <p className="text-gray-600 dark:text-slate-400">Words</p>
                <p className="text-blue-500">{stats.wordCount}</p>
            </div>
            <div className="w-30">
                {showReadingTime && <p className="text-gray-600 dark:text-slate-400">Reading Time</p>}
                {showReadingTime && <p className="text-indigo-500">{stats.readingTime} Minutes</p>}
            </div>
        </div>
    )
}
