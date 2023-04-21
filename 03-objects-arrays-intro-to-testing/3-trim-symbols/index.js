/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if ( size == undefined ) return string;
    if ( string.length == 0  || size <= 0 ) return '';    
    let counter = 1 ;
    let stringNew = string.slice(0, 1) ;
    
    for (let i = 1; i < string.length ; i++ ) {
        if ( string.slice(i, i + 1) == string.slice(i - 1, i) ) counter++  ;
        else counter = 1 ;    

        if ( counter <= size ) stringNew =  stringNew + string.slice(i, i + 1) ;        
      }

    return stringNew;
}
