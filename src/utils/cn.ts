type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];
type ClassObject = { [key: string]: any };
type ClassInput = ClassValue | ClassArray | ClassObject;

export function cn(...inputs: ClassInput[]): string {
    const classes = [];

    for (const input of inputs) {
        if (!input) continue;

        if (typeof input === 'string') {
            classes.push(input);
        } else if (Array.isArray(input)) {
            classes.push(cn(...input));
        } else if (typeof input === 'object') {
            for (const key in input) {
                if (input[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.filter(Boolean).join(' ');
}