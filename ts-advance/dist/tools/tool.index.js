"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generate = void 0;
class Generate {
    get randomNumber() {
        return Math.random() * 10;
    }
    makeRandom(fixed, compony) {
        if (compony) {
            let generateNameCompony = "";
            const alfa = "abcdfghdklm";
            for (let x = 0; 3 > x; x++) {
                console.log();
                generateNameCompony += alfa[Number(this.randomNumber.toFixed())];
            }
            return generateNameCompony;
        }
        return this.randomNumber.toFixed(fixed);
    }
    get makeCompony() {
        return this.makeRandom(0, true);
    }
    get address() {
        const randomLng = this.makeRandom(5);
        const randomLat = this.makeRandom(5);
        return {
            lng: randomLng,
            lat: randomLat,
        };
    }
}
exports.Generate = Generate;
