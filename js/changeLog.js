/*jQuery类选择器*/
var react_cnt1 = $("#react-cnt1");
var react_btn1 = $("#react-btn1");
var statistics = $("#statistics");

var release_entry_list = $(".release-entry-list");


// demo for react-cnt +1
react_btn1.click(function () {
    var cnt = Number(react_cnt1.text());
    cnt ++;
    react_cnt1.text(cnt);
});



//本地索引
var release_entry_index={};


/*刷新版本列表*/
async function refresh_version_lkist(online_version) {

    //更新索引

    //移除现有版本列表
    release_entry_list.children().remove();

    //循环写入项目与版本
    for (let key in release_entry_index){
        let version = release_entry_index[key];
        //创建版本DOM
        let version_dom = $("#release-entry-1").clone();
        //填充项目内容
        change_version_list_info(version_dom, version);
    }


}


function change_version_list_info(dom, version_info) {
    //修改标签ID
    dom.attr("id", `release_entry_${version-info.id}`);
    //修改版本号
    //修改版本提交时间
    //修改changelist内容
    //修改user-reaction数据
}



