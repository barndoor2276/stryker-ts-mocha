export class Thing {
    private varA: number;
    private varB: number;
    private varC: string;

    constructor() {
        this.varA = 1;
        this.varB = 2;
        this.varC = 'aa';
    }

    public doThingA(input1: string, input2: string): number {
        this.doThingB(input1, input2);
        return this.varA * this.varB * this.varC.length;
    }

    private doThingB(input1: string, input2: string) {
        this.varC = `${input1.slice(0, 8)}${input2.slice(0, 8)}`;
    }
}