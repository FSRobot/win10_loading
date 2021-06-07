$(function() {
        let loading_tag = document.createElement('div');
        loading_tag.className = "loading hide";
        let con_tag = document.createElement('i');
        for (var i = 0; i < 6; i++) {
            let dot = document.createElement('span');
            con_tag.append(dot);
        }
        loading_tag.append(con_tag);
        $('body').append(loading_tag);
    })
    //加载动画
const loading = async(falg) => {
    if (falg) {
        $('.loading').removeClass('hide');
    } else {
        $('.loading').addClass('hide');
    }
}