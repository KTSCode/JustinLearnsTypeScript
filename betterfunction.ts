function comedy(index: number): string {
    let punchlines: string[] = [`I couldn't think of Acorny joke.`,`I figured you'd think I was nutty.`,`everything I came up with was only Oak-Kay`]
    return punchlines[index]
}
function randomNumber(max: number): number {
    return Math.floor(Math.random()*max)
}
let pun: string = `
    I was trying to come up with an Acorns pun, but ${comedy(randomNumber(3))}
`;
console.log(pun)