class Pangram {
    private text: string;

    constructor (inputString: string){
        this.text = inputString.toLowerCase();
    }

    private alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    public isPangram(): boolean{
       for (let i of this.alphabet){
        if(!this.text.includes(i)){
            return false
        }
       }
       return true
    }
}
export default Pangram