"category_id": "1001",
"video_id": "aaaa",
"thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
"title": "Shape of You",
"authors": [
{
"profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
"profile_name": "Olivia Mitchell",
"verified": ""
}
],
"others": {
"views": "100K",
"posted_date": "16278"
},
"description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
},
{
"category_id": "1001",
"video_id": "aaab",
"thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
"title": "Midnight Serenade",
"authors": [
{
"profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
"profile_name": "Noah Walker",
"verified": false
}
],
"others": {
"views": "543K",
"posted_date": ""
},
"description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
},




 div.innerHTML = `
     <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img class="w-full"
                    src="${video.thumbnail}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="flex gap-2">
                        <div class="avatar w-8">
                            <div class="ring-primary ring-offset-base-100  rounded-full ring ">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                          </div>
                          <h2 class="card-title">${video.title}</h2>
                    </div>
                  <p class="font-semibold text-gray-500">Mical mitel jhon <i class="fa-solid fa-certificate text-blue-700"></i>  
                  </p>
                  <div>
                    <p class="font-normal text-sm text-gray-400">views</p>
                  </div>
                </div>
              </div>
     `;