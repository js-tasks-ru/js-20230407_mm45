/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

    let objNew = { } ;

    for( let idx in fields){
        let  value =fields[idx]
        if (value in obj ) objNew[value]=obj[value]
    }

    return objNew ;

};
