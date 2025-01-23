export const loadState = (key: string) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState) {
            const parsedState = JSON.parse(serializedState);

            return parsedState;
        }
        return undefined;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (key: string, state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        console.error("Could not save state:", err);
    }
};
