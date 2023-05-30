import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `

  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
        src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>

      <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class="restaurant__location">
          <img src="./icons/location.svg" alt="location" width="20px"/>${restaurant.city}
        </p>
      <p>${restaurant.description}</p>
      
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
<div class="detail">
<h1 class="title" id="resto-title">${resto.name}</h1>
<img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="gambar ${resto.name}">
<div class="info">
  <h2>Information</h2>
  <ul>
    <li>
      <h3>Kota</h3>
      <p>${resto.city}</p>
    </li>
    <li>
      <h3>Alamat</h3>
      <p>${resto.address}</p>
    </li>
    <li>
      <h3>Rating</h3>
      <p>${resto.rating}</p>
    </li>
    <li>
      <h3>Foods Menu</h3>
      <span id="food"><p>${resto.menus.foods.map((food) => food.name).join(', ')}</p></span>
    </li>
    <li>
      <h3>Drinks Menu</h3>
      <span id="drink"><p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p></span>
    </li>
    <li>
    <h3>Overview</h3>
      <p>${resto.description}</p>
    </li>
  </ul>
</div>


<div class="overview">
<h4>Review</h4>
${resto.customerReviews
    .map(
      ({ name, date, review }) => `
    <p>Nama: ${name}</p>
    <p>Tanggal: ${date}</p>
    <p>Review: ${review}</p>
    <br />
`,
    )
    .join('')}
</div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
