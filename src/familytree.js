/*
  Language: javascript
  script: to display csv data as hierarchical tree structure
*/

//convert the csv to json
function csvToJson(str, delimiter = ',') {
    const titles = str.slice(0, str.indexOf('|')).split(delimiter);
    const rows = str.slice(str.indexOf('|') + 1).split('|');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
};

//initial csv data 
let csv;
csv = 'node_id,node_name,parent_id|1,son,0|0,grandpa,null|2,daugther,0|3,grandkid,1|4,grandkid,1|5,grandkid,2|6,greatgrandkid,5';
var items = csvToJson(csv, ',');

function loadFamilyTree(arry) {

    var roots = [], children = {};

    // find the top level nodes and hash the children based on parent
    for (var i = 0, len = arry.length; i < len; ++i) {
        var item = arry[i],
            p = item.parent_id,
            //use root object if object of item arrays not found else use object of item arrays if exists  else create a new object item array for new non root parent
            target = (p == "null") ? roots : (children[p] || (children[p] = []));
            
        target.push({ value: item });
    }

    // recursively building the tree by finfing the childrenn
    var buildTree = function(parent) {
        if (children[parent.value.node_id]) {
            parent.children = children[parent.value.node_id];
            for (var i = 0, len = parent.children.length; i < len; ++i) {
                buildTree(parent.children[i]);
            }
        }
    };

    // interate through the roots to add the children when building the tree
    for (var i = 0, len = roots.length; i < len; ++i) {
        buildTree(roots[i]);
    }

    return roots;
}
//call to display the hirerarchical family tree
console.log('Tree data for CSV Data: '+ csv);
console.log(loadFamilyTree(items));