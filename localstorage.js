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

}
