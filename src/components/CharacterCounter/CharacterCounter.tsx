import type React from "react";
import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import { useEffect } from "react";
import StatsDisplay from "../StatsDisplay/StatsDisplay";

const WORDS_PER_MINUTE = 200;


export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    showReadingTime,
    text,
    minWords = 25,
    maxWords = 200,
    targetReadingTime = 5,
}) => {

    useEffect(() => {
        calculateStats(text);
    }, [text])

    const [stats, setStats] = useState({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0,
    });
    const [minWordCount, setMinWordCount] = useState(minWords);
    const [maxWordCount, setMaxWordCount] = useState(maxWords);
    const [targetReadingTimeCount, setTargetReadingTimeCount] = useState(targetReadingTime);

    const [minWordColor, setMinWordColor] = useState('text-gray-500');
    const [maxWordColor, setMaxWordColor] = useState('text-gray-500');
    const [readingTimeColor, setReadingTimeColor] = useState('text-gray-500');


      const calculateStats = (text: string) => {
        let characters = 0;
        let words = 0;
        let estimatedMinutes = 0;
        if (text.length > 1) {
        const cleanText = text.replace(/<[^>]*>/g, "");
        characters = cleanText.length;
        let counterW = cleanText.split(/\s+/).filter((word) => word.length > 0);
        words = counterW.length;
        const rawMinutes = words / WORDS_PER_MINUTE;
        estimatedMinutes = rawMinutes.toFixed(2);
        setMinWordColor(words >= minWordCount ? 'text-emerald-500' : 'text-pink-300');
        setMaxWordColor(words <= maxWordCount ? 'text-emerald-500' : 'text-pink-300');
        setReadingTimeColor(estimatedMinutes >= targetReadingTimeCount ? 'text-emerald-500' : 'text-pink-300');
        setStats({
        characterCount: characters,
        wordCount: words,
        readingTime: estimatedMinutes,
        });
    }
  };


    return (
        <div>
            <StatsDisplay stats={stats} showReadingTime={showReadingTime} />
            <div className="flex flex-row flex-wrap justify-evenly bg-slate-100 border rounded-lg border-gray-300 rounded-lg">
                <div>
                    <label htmlFor="minWordInput" className="p-4 text-gray-600 dark:text-slate-400">Min Words</label>
                    <input 
                        className={minWordColor}
                        type="number"
                        id="minWordInput"
                        value={minWordCount}
                        onChange={(e) => setMinWordCount(Number(e.target.value))}
                        min="0"
                        step="1"/>

                </div>
                <div>
                    <label htmlFor="maxWordInput" className="p-4 text-gray-600 dark:text-slate-400">Max Words</label>
                    <input 
                        className={maxWordColor}
                        type="number"
                        id="minWordInput"
                        value={maxWordCount}
                        onChange={(e) => setMaxWordCount(Number(e.target.value))}
                        min="1"
                        step="1"/>

                </div>
                <div>
                    <label htmlFor="targetReadingTimeCount" className="p-4 text-gray-600 dark:text-slate-400">Target Reading Time</label>
                    <input 
                        className={readingTimeColor}
                        type="number"
                        id="targetReadingTimeCount"
                        value={targetReadingTimeCount}
                        onChange={(e) => setTargetReadingTimeCount(Number(e.target.value))}
                        min=".1"
                        step=".1"/>

                </div>
            </div>
        </div>
    )
}