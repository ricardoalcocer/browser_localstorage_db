export default class LocalStorage {
  constructor (DBNAME){
    this.DBNAME = DBNAME;
  }

  getRecordCount(){
    var tmpdata = localStorage.getItem(this.DBNAME);
    tmpdata = JSON.parse(tmpdata);
    return tmpdata.length - 1;
  }

  setData(inData){
    localStorage.setItem(this.DBNAME,JSON.stringify(inData));
  }

  getData(idx,key){
    // returns a data item from local storage
    // gets the db name, index and key to get
    var tmpdata = localStorage.getItem(this.DBNAME);
    tmpdata = JSON.parse(tmpdata);
    return tmpdata[idx][key];
  }

  getAll(){
    var tmpdata = localStorage.getItem(this.DBNAME);
    tmpdata = JSON.parse(tmpdata);
    return tmpdata;
  }

  // test(){
  //   var tmpOBJ = [{"countries":""}];
  //   var dat =  this.getAll();
  //   tmpOBJ[0].countries = dat;
  //   return jsonPath(tmpOBJ, "$..countries[2]", {resultType:"VALUE"});
  // }


  getCodeByName(name){
      var tmpOBJ = {};
      var dat =  this.getAll();
      tmpOBJ.data = dat;

      return  jsonPath(tmpOBJ, "$..data[?(@.name=='" + name + "')]", {resultType:"VALUE"});
  }

  getNameByCode(code){
      var tmpOBJ = {};
      var dat =  this.getAll();
      tmpOBJ.data = dat;

      return  jsonPath(tmpOBJ, "$..data[?(@.code=='" + code + "')]", {resultType:"VALUE"});
  }
}
