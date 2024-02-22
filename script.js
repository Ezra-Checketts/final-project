let postIdSequence = 0

$('#mainSubmit').on('click', ()=>{
    let id = postIdSequence++
    let displayName = $('#displayNameInput').val();
    let comment = $('#commentInput').val();
    $('#displayNameInput').val('');
    $('#commentInput').val('');
    $('#posts').prepend(`
    <div id="post${id}" class="post">
        <i class="fa-regular fa-circle-user"></i>
        <div class="postDetails">
            <div class="postHeader">
                <p class="username">${displayName}</p>
                <div class="options">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>
            <h2>${comment}</h2>
            <div class="hidden editMode">
                <input type="text" placeholder="Edit Post">
                <button class="submit">Submit</button>
            </div>
        </div>
    </div>
    `)
    $('#post' + id + ' .delete').on('click', ()=>{
        $('#post' + id).remove()
        console.log('Post deleted')
    })
    $('#post' + id + ' .edit').on('click', ()=>{
        $('#post' + id + ' .editMode').toggleClass('hidden')
        let original = $('#post' + id + ' h2').text()
        $('#post' + id + ' input').val(original)
        console.log('Editing post')
    })
    $('#post' + id + ' .submit').on('click', ()=>{
        let edit = $('#post' + id + ' input').val()
        $('#post' + id + ' h2').text(edit)
        $('#post' + id + ' .editMode').toggleClass('hidden')
        console.log('Post edited')
    })
})