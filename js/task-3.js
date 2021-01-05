const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery')

const createGalleryElement = ({ url, alt }) => { 
  return `<li><img src = '${url}' alt = '${alt}' width = '240'></li> `
  }

const elements = images.map(createGalleryElement).join('')
galleryRef.insertAdjacentHTML('beforeend', elements)


// const makeImages = image => {
//   return image.map(image => {
//     const imagesContainerRef = document.createElement('li');
//     imagesContainerRef.insertAdjacentHTML(
//       'afterbegin',
//       `<img src="${image.url}" alt="${image.alt}" width="480">`,
//     );
//     return imagesContainerRef;
//   });
// };

// const elements = makeImages(images);
// galleryContainerRef.append(...elements);
// console.log(galleryContainerRef);
