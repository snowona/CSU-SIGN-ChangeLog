// /*jQuery类选择器*/
// let react_cnt1 = $("#react-cnt1");
// // let react_btn1 = $("#react-btn1");
// let statistics = $("#statistics");
//
// let release_entry_list = $(".release-entry-list");
//
//
// // demo for react-cnt +1
// react_btn1.click(function () {
//     let cnt = Number(react_cnt1.text());
//     cnt++;
//     react_cnt1.text(cnt);
// });
//
//
// //本地索引
// let release_entry_index = {};
//
//
// /*刷新版本列表*/
// async function refresh_version_lkist(online_version) {
//
//     //更新索引
//
//     //移除现有版本列表
//     release_entry_list.children().remove();
//
//     //循环写入项目与版本
//     for (let key in release_entry_index) {
//         let version = release_entry_index[key];
//         //创建版本DOM
//         let version_dom = $("#release-entry-1").clone();
//         //填充项目内容
//         change_version_list_info(version_dom, version);
//     }
//
//
// }
//
//
// function change_version_list_info(dom, version_info) {
//     //修改标签ID
//     dom.attr("id", `release_entry_${version - info.id}`);
//     //修改版本号
//     //修改版本提交时间
//     //修改changelist内容
//     //修改user-reaction数据
// }


let changeLogData = [
    {
        version: "1.0.0",
        date: 1631551535,
        enhancement: ["asxascsdcadsc"],
        feature: [],
        bug: ["123123123", "cvndih364728547"],
        like: 0,
        good: 0,
        soso: 0,
        hate: 0,
    }
]


let versionCard = $("#release-demo")
let versionList = $("#release-list")


function addVersionCard(versionInfo) {
    let versionDom = versionCard.clone()
    //修改基本信息
    versionDom.find("#release-version").text(versionInfo["version"])
    versionDom.find("#release-date").text(versionInfo["date"])

    // 添加changelog
    let enhancement_part = createVersionInfo("enhancement", versionInfo["enhancement"])
    if (enhancement_part !== undefined) {
        versionDom.find("#release-info").append(enhancement_part)
    }

    let feature_part = createVersionInfo("feature", versionInfo["feature"])
    if (feature_part !== undefined) {
        versionDom.find("#release-info").append(feature_part)
    }

    let bug_part = createVersionInfo("bug", versionInfo["bug"])
    if (bug_part !== undefined) {
        versionDom.find("#release-info").append(bug_part)
    }

    // 添加表情数据
    // let likeBtn = $(versionDom.find("#react-btn1"))
    let btnList = ["#react-like", "#react-good"]
    for(let name of btnList){
        let likeBtn = versionDom.find(name)
        likeBtn.attr("feedback", `${name.split("-")[1]}-${versionInfo["version"]}`)
        likeBtn.on("click", userFeedBack)
    }


    //填充至列表
    versionDom.css("display", "flex")
    versionList.append(versionDom)
}

function createVersionInfo(title, infoList) {
    if (infoList.length === 0) {
        return undefined
    }
    let tipDiv = $("<div>").html("");
    let tipTitle = $("<h3>").html(`[${title}]`);
    let tipList = $("<ul>").html("");
    for (let item of infoList) {
        let tipItem = $("<li>").html(item);
        tipList.append(tipItem)
    }
    tipDiv.append(tipTitle)
    tipDiv.append(tipList)
    return tipDiv
}

function userFeedBack(event) {
    console.log(event.target.attributes)
    console.log(event.target.attributes["feedback"]["value"])
}

$("#testButton").click(function () {
    addVersionCard(changeLogData[0])
})




