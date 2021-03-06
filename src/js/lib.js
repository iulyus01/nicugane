
function getformdata(form){
    var data = _.object(_.map($(form).serializeArray(), _.values));
    return data;
}
//Ajax module

function ajax(node, data, cb){
    data.csrftoken = csrftoken;
    if(typeof groups_group_id == 'number') data.gid = groups_group_id;
    $.post('/ajax/'+node, data).done(cb).error(cb);
}

//Others module

function markloading(btn){
    var btn = $(btn).find('.btn[type=submit]');
    $(btn).addClass('disabled');
}
function unmarkloading(btn){
    var btn = $(btn).find('.btn[type=submit]');
    $(btn).removeClass('disabled');
}
function markloading_btn(btn){
    $(btn).addClass('disabled');
}
function unmarkloading_btn(btn){
    $(btn).removeClass('disabled');
}
function is_mobile(){
    return $( window ).width() < 600 ? true : false;
}
function pad(width, string, padding) {
  return (width <= string.length) ? string : pad(width, padding + string, padding)
}
$(document).on('click', '#btn-logout', function(){
    markloading_btn('#btn-logout');
    preloader.on();
    ajax('account/logout', {}, function(){
        setTimeout(function(){
            window.location.href = '/account';
        }, 400);
    })
});
