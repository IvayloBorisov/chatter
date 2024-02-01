import { useState, useEffect } from "react"

const PREFIX = 'chat-app-';

interface LocalStorageValue<T> {
    key?: string;
    initialValue?: T |(() => T);
}

export const useLocalStorage = <T>(config: LocalStorageValue<T>) => {
    const prefixedKey = `${PREFIX}${config.key}`;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);
        if(jsonValue !== null && jsonValue !== undefined) {
            return JSON.parse(jsonValue);
        }

        if(typeof config.initialValue === 'function') {
            return (config.initialValue as () => T)();
        } else {
            return config.initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));

    }, [prefixedKey, value]);

    return [value, setValue];
}