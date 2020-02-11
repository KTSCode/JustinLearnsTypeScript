class Transcriptor {
    toRna(input: string): string {
        var output = ''

        for (let i of input){
            switch(i){
                case 'C':
                    output = output + 'G';
                    break;
                case 'G':
                    output = output + 'C';
                    break;
                case 'A':
                    output = output + 'U';
                    break;
                case 'T':
                    output = output + 'A';
                    break;
                default:
                    throw new Error('Invalid input DNA.');
            }
        }   
        return output
    }
}
export default Transcriptor