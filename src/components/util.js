import XLSX from 'xlsx';

export default function parser(e) {
    var files = e.target.files;
    var i,f;
    for (i = 0; i !== files.length; ++i) {
        f = files[i];
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = e.target.result;
            var wb = XLSX.read(data, {type: 'binary'});
            var smsObjs= [];
            for( let key in wb.Sheets) {
                smsObjs.push(XLSX.utils.sheet_to_json(wb.Sheets[key]));
            }
            smsObjs = serialize(smsObjs);
            console.log(smsObjs);
        };
        reader.readAsBinaryString(f);
    }
}

function serialize(arr) {
      let flat = [].concat(...arr);
      return flat.some(Array.isArray) ? serialize(flat) : flat;
}
