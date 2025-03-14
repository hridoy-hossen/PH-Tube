loadData(); //you must be call this function to show your code in website. I mean it is essential for creating btn dynamicaly ...

// Fetch api's and get data from them...
function loadData() {
  // fetch api from browzer
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json()) //convert promise into a json data format
    .then((data) => hendleData(data.categories)); //send data to hendleData() function
}
// fetch video api
const loadVideo = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => hendleVideo(data.videos));
};
const loadCatVid = (id) => {
    console.log(id)
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => hendleVideo(data.category))
};
function hendleData(categories) {
  const container = document.getElementById("categoris-container"); //get container to append newly created element into it.
  for (let cat of categories) {
    //throw a for loop to access array of object of api
    const div = document.createElement("div");
    div.innerHTML = `
        <button onclick="loadCatVid(${cat.category_id})" " class="btn btn-sm px-5 hover:bg-red-600 hover:text-white">${cat.category}</button>`;
    container.append(div);
  }
}
const hendleVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = '';
  videos.forEach((video) => {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="card bg-base-100  shadow-sm">
                <figure class="relative">
                  <img class="w-full h-[170px] object-cover:"
                    src="${video.thumbnail}"
                    alt="Shoes" />
                    <span class="absolute right-2 bottom-2 bg-black p-1 text-xs text-gray-200 rounded">3hrs 56 min ago</span>
                </figure>
                <div class="card-body">
                    <div class="flex gap-2">
                        <div class="avatar w-8">
                            <div class="ring-primary ring-offset-base-100  rounded-full ring ">
                              <img src="${video.authors[0].profile_picture}" />
                            </div>
                          </div>
                          <h2 class="card-title">${video.title}</h2>
                    </div>
                  <p class="font-semibold text-gray-500 ">${video.authors[0].profile_name}<i class="fa-solid fa-certificate text-blue-700 ms-2"></i>  
                  </p>
                  <div>
                    <p class="font-normal text-sm text-gray-400">${video.others.views} views</p>
                  </div>
                </div>
              </div>
     `;
    videoContainer.append(div);
  });
};
