const blogs = document.getElementsByClassName("blog");
for (const blog of blogs) {
  blog.style.color = "red";
  blog.style.backgroundColor = "yellow";
  blog.style.textAlign = "center";
  blog.style.padding = "10px";
  blog.style.marginTop = "10px";
  blog.style.borderRadius = "10px";
}

const blog3 = document.querySelector("#blog-3");
blog3.style.backgroundColor = "gray";

