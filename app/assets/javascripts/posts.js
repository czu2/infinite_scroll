var a = 0;
var b = 9;

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('scroll', function(){
        getNextData();
    })
})

function getNextData(){

    var scrollHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var scrollTop = document.documentElement.scrollTop;
    
    var scrollTotal = scrollHeight;
    var scrollNow = windowHeight + scrollTop;
    
    if( scrollTotal <= scrollNow ){

        a = a + 10;
        b = b + 10;

        $.ajax({
            type: 'get',
            url: '/posts',
            data: { start: a, end: b },
            dataType: 'json',
            success: function(res){ // -> [{},{},{}]
                // console.log(res);

                res.forEach(function(post){
                    
                    $('#posts').append(`
                        <div class= "post-box">
                            <h3>${post.title}</h3>
                            <p>${post.content}</p>
                            <span><a href="/posts/${post.id}">Show</a></span>
                            <span><a href="/posts/${post.id}/edit">Edit</a></span>
                            <span><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/posts/${post.id}">Destroy</a></span>
                        </div>
                    `)

                });

            }
        })
    }
}
