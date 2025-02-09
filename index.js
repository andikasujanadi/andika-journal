async function loadPosts() {
    const repo = "andika-journal";
    const user = "andikasujanadi"; 
    const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/posts`;
  
    const response = await fetch(apiUrl);
    const files = await response.json();
  
    files.forEach(async (file) => {
      const postResponse = await fetch(file.download_url);
      const text = await postResponse.text();
      document.getElementById("blog").innerHTML += `<article><pre>${text}</pre></article>`;
    });
  }
  
  loadPosts();
  