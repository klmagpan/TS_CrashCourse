export interface kvp<K, V> { // type declared from consumer
    key: K,
    value: V;
}

function createkvp<K, V>(key: K, value: V): kvp<K, V>{ // return object: kvp
    return {key, value};
}

const numberPair: kvp<string, number> = createkvp<string, number>("meaning of life", 42); // numeric 

const boolPair: kvp<string, Boolean> = createkvp("knows TypeScript", true); // boolean

const boolPairs :kvp<string, Boolean>[] = [ // Array of kvp of types Boolean
    { key: "knows security", value: true}, 
    { key: "knows Python", value: true}, 
    { key: "knows C#", value: true}
];

for(var pair of boolPairs){ // Writing out to console
    console.log(pair.key + ": " + pair.value);
}