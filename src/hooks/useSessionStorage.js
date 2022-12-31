import { useState } from "react";

export const useSessionSorage = (key, defaultValue) => {
    const [value , setValue] = useState( () => {
        const storedData = sessionStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : defaultValue
    });
    //const [value , setValue] = useState(getting storedData)

    const setSessionStorageValue = (newValue) => {
        sessionStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }

    return [
        value,
        setSessionStorageValue,
    ];
}