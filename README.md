# -quality_miao-knowledgegraph
Draw a knowledge graph

![Overview](./pics/1.png "这是一个示例图片")

**使用方法请参考 test.html**
- `npm install @quality_miao/knowledgegraph`
- If you want use dict_data to load knowledge graph, set use_dict true 
- Based on neo4j, set your own requestUrl & json parameters to init page.(set post_request:true, post_url:"/t/t", post_parameters:"json")
- data structure just like: `{"nodes":[{"name":"author","id":1},{"name":"software","id":2},{"name":"application","id":3}],"links":[{"source":1,"target":2,"label":"write"},{"source":2,"target":3,"label":"apply"}]}`,

```json
const defaultConfig = {
    tip_use: false,
    backgound_use: false,
    loginUser: false,
    sidebar: false,
    url_config:{
        "search_tec":"http://192.168.20.66:8000/graph/technology",
        "search_ins":"http://192.168.20.66:8000/graph/institution",
        "search_exp":"http://192.168.20.66:8000/graph/expert",
        "search_all":"http://192.168.20.66:8000/graph/query_th",
        "search_node":"http://192.168.20.66:8000/graph/query",
        "search_id":"http://192.168.20.66:8000/graph/from_id",
        "create_rel":"http://192.168.20.66:8000/graph/create_rel",
        "delete_node":"http://192.168.20.66:8000/graph/delete_node",
        "update_node":"http://192.168.20.66:8000/graph/update_node",
        "delete_rel":"http://192.168.20.66:8000/graph/delete_rel",
        "create_node":"http://192.168.20.66:8000/graph/create_node",
        "expand":"http://192.168.20.66:8000/graph/expand",
        "expand_table":"http://192.168.20.66:8000/graph/expand_table",
        "node_state":"http://192.168.20.66:8000/graph/node_state",
        "upload_file":"http://192.168.20.66:8000/graph/upload",
        "node_url":"http://192.168.20.66:8000/search" // 统一资源检索跳转连接
    },
    graph_id:"test_id",
    use_dict:false,
    dict_data:{},
    post_request:false,
    post_url:"",
    post_parameters:{},
    permissions:{
        "createNode":1, //创建节点
        "delNode":1,    //删除节点
        "upNode":1,     // 更新节点
        "createRel":1,  // 创建关系
        "delRel":1,     // 删除关系
        "searchNode":1, // 查询节点
        "searchAll":1,  // 查询总图
        "searchExp":1,  // 查询专家
        "searchIns":1,  // 查询机构
        "searchTec":1,  // 查询技术
        "nodeSearch":1  // 统一资源检索跳转
    }
};
```
