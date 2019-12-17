let punchline: string[] = [`I couldn't think of Acorny joke.`,`I figured you'd think I was nutty.`,`everything I came up with was only Oak-Kay`]
let joke: string = `
    I was trying to come up with an Acorns pun, but ${punchline[Math.floor(Math.random()*3)]}
`;
console.log(joke)