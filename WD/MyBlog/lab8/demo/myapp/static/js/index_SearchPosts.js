function searchPosts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const posts = document.getElementsByClassName("blog-post");
  
    for (let i = 0; i < posts.length; i++) {
      const content = posts[i].innerText.toLowerCase();
      if (content.includes(input)) {
        posts[i].style.display = "block";
      } else {
        posts[i].style.display = "none";
      }
    }
  }
  