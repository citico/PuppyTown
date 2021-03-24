
const puppies = [
    {
      color: 'Blue',
      gender: 'Male:',
      isAvailable: 'Available!',
      photo: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/68475937_366581790637534_6142714784254001152_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=973b4a&_nc_ohc=qelYOrRec-AAX-yWFzf&_nc_ht=scontent-atl3-1.xx&oh=44eb188f9f64672f0eb8139f730ba54a&oe=60775067'
    },
    {
        color: 'White',
        gender: 'Female:',
        isAvailable: 'Available!',
        photo: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/68814338_366581807304199_4940415582538301440_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=f81l_QxdHowAX8eg4BW&_nc_ht=scontent-atl3-1.xx&oh=91d16f40405c920933dda460ac570afd&oe=6078A259'
      },
      {
        color: 'Light Brown',
        gender: 'Female:',
        isAvailable: 'Available!',
        photo: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/69081048_366581830637530_1049875798837690368_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=zo-rQy433jEAX9RV5eH&_nc_ht=scontent-atl3-1.xx&oh=fab199d5367a4079eb6beddea3a3220a&oe=6079C63A'
      },
      {
        color: 'Purple',
        gender: 'Female:',
        isAvailable: 'Available!',
        photo: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/69058936_366581923970854_4356967867632058368_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=aaWIO15pX3kAX9jkuQs&_nc_ht=scontent-atl3-1.xx&oh=fa9564b253472830b1e32b2c57e6a8d5&oe=6077F7F8'
      },
      {
        color: 'Black',
        gender: 'Female:',
        isAvailable: 'Available!',
        photo: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/68619941_366581850637528_8636857891392847872_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=yowXv-PkgQAAX8bP2en&_nc_ht=scontent-atl3-1.xx&oh=99c7e0d6e4dca9a0a2e774266e2f6a50&oe=60764549'
      },
      {
        color: 'Green',
        gender: 'Female:',
        isAvailable: 'Available!',
        photo: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/68730539_366581900637523_1770336311970889728_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=1VC0Gzk-6-sAX_2WbUa&_nc_ht=scontent-atl3-1.xx&oh=439ddd94a40ac9dfe271d10888dca408&oe=607905EF'
      },
      {
        color: 'Yellow',
        gender: 'Female:',
        isAvailable: 'Available!',
        photo: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/68511515_366581877304192_2770178520654020608_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=kB9B0DdezS0AX_OjzQA&_nc_ht=scontent-atl3-1.xx&oh=c411b30b1f84514aac9bdb377b4fd88a&oe=60764904'
      }
  ];
  
  
  const main = document.querySelector('main')
  let html = '';
  
  for ( let i = 0; i < puppies.length; i++) {
    let puppy = puppies[i];
    html += `
      <div>
        <h3 class="available">${puppy.isAvailable}</h3>
        <h2 class="puppy-color">${puppy.color} ${puppy.gender}</h2> 
        <img class="puppy-photo" src="${puppy.photo}" alt="${puppy.color.gender}">
      </div>
  `;
  }
  
  main.insertAdjacentHTML('beforeend', html);