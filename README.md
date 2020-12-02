# FamilyTree
Generate parent child tree structure

1. Copy and paste source code in your favorite javascript environment and run
2. Open browser in development mode
3. View console for hierarchical data

Sample input:
node_id,node_name,parent_id|1,son,0|0,grandpa,null|2,daugther,0|3,grandkid,1|4,grandkid,1|5,grandkid,2|6,greatgrandkid,5

Sample output:

value: {node_id: "3", node_name: "grandkid", parent_id: "1"}
__proto__: Object
1:
value: {node_id: "4", node_name: "grandkid", parent_id: "1"}
__proto__: Object
length: 2
__proto__: Array(0)
value: {node_id: "1", node_name: "son", parent_id: "0"}
__proto__: Object

value: {node_id: "6", node_name: "greatgrandkid", parent_id: "5"}
__proto__: Object
length: 1
__proto__: Array(0)
value: {node_id: "5", node_name: "grandkid", parent_id: "2"}
__proto__: Object
length: 1
__proto__: Array(0)
value: {node_id: "2", node_name: "daugther", parent_id: "0"}
__proto__: Object
length: 2
__proto__: Array(0)
value: {node_id: "0", node_name: "grandpa", parent_id: "null"}
__proto__: Object
length: 1
__proto__: Array(0)


