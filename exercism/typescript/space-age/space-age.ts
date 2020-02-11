export class SpaceAge {
    public seconds: number;
    public year: number;

    constructor (inputSeconds: number){
        this.seconds = inputSeconds;
        this.year = this.seconds/31557600
    }
    
    private rounder(unrounded: number): number {
        return Math.round(unrounded*100)/100
    }

    public onEarth(): number{
        return this.rounder(this.year*1)
    }
    public onMercury(): number{
        return this.rounder(this.year/0.2408467)
    }
    public onVenus(): number{
        return this.rounder(this.year/0.61519726)
    }
    public onMars(): number{
        return this.rounder(this.year/1.8808158)
    }
    public onJupiter(): number{
        return this.rounder(this.year/11.862615)
    }
    public onSaturn(): number{
        return this.rounder(this.year/29.447498)
    }
    public onUranus(): number{
        return this.rounder(this.year/84.016846)
    }
    public onNeptune(): number{
        return this.rounder(this.year/164.79132)
    }
}