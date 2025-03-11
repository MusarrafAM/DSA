//! Country Code

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

  let pageNumer = 1;
  let countryName = null;

  while (countryName === null) {
    const data = await fetchPageFunc(pageNumer);

    data.data.forEach((item) => {
      if (item.alpha2Code === code) {
        countryName = item.name;
      }
    });

    if (countryName === null) {
      pageNumer++;
    } else {
      break;
    }
  }

  return countryName;
}

async function fetchPageFunc(n) {
  try {
    const url = `https://jsonmock.hackerrank.com/api/countries?page=${n}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

//! Staff List
class StaffList {
    //add your code here
    constructor(){
        this.collection ={}
    }
    
    add(name,age){
        if(age <= 20){
            throw new Error("Staff member age must be greater than 20")
        }
        
        if(this.collection[name]){
            return
        }
        
        this.collection[name] = age
        
    }
    
    remove(name){
        if(this.collection[name]){
            delete this.collection[name]
            return true
        }else{
            return false
        }
    }
    
    getSize(){
        return Object.values(this.collection).length     // get all the values from the object and use length
    }
    
}