function feladat1(){

    const side1 = 10.4;
    const side2 = 13.5;
    const side3 = 8.2;

    const surface = 2 * (side1 + side2 + side3);
    const volume = side1 * side2 * side3;

    console.info()
    console.log(`Surface area: ${surface}`);
    console.log(`Volume: ${volume}`);
}

feladat1();