document.getElementById('comment-btn').addEventListener('click', function(){
   const commentBox = document.getElementById('comment-box');
 
    const addComment = document.createElement('p');
    addComment.innerText = commentBox.value;
    
    const comments = document.getElementById('comments');
    comments.appendChild(addComment);
  commentBox.value = '';
    
  
})