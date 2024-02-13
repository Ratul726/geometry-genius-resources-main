// step-1 add event listener to the post button
document.getElementById('btn-post').addEventListener('click',function(){
    // console.log('post button clicked');
    // step-2 :get the comment
    const commentBox = document.getElementById('new-comment');
    // console.log(commentBox)
    const newComment = commentBox.value;
    // step-3 : set the comment inside the comment container
    // 1. get the comment container
    // 2. get the comment container
    // 3.set the text of the as innerText of the p Tag
    // 4.add the p tag using appendChild
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText =newComment;
    commentContainer.appendChild(p);
    // ?step-4: clear the text area
    commentBox.value ='';
})