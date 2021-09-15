
const findKeyByValue = function(searchObject, keySearch) {
    
        for (const key of Object.keys(searchObject)){
            if(searchObject[key] === keySearch){
                return key;
            }
        }
  };
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    horror: "That '70s Show"
  };
  
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));