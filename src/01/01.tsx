export const sum = (a: number, b: number) => a + b
export const mult = (a: number, b: number) => a * b
export const splitIntoWords = (sentence: string) => {
    const words = sentence.toLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-').map(
        w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', '')
    )
}