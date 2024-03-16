let tours_xx = [
    { 
      id: 1,
      name: 'Best Of Paris In 7 Days Tour',
      info: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...',
      local_img: './tour_theme/img/paris.jpg',
      price: 1995
    },
    { 
      id: 2,
      name: 'Best Of Ireland In 14 Days Tour',
      info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D ...",
      local_img: './tour_theme/img/ireland.jpeg',
      price: 3895
    },
  ];
  
  const section = document.querySelector('.section-center');
  
  const displayTours_xx = () => {
    const toursInfo = tours_xx.map((tour) => {
      const {id, name, info, local_img, price} = tour;
      return `
      <article class="single-tour">
      <img
        src=${local_img}
        alt=${name}
      />
      <footer>
        <div class="tour-info">
          <h4>${name}</h4>
          <h4 class="tour-price">$${price}</h4>
        </div>
        <p>${info}
           <button>read more</button>
        </p>
        <button class="delete-btn">not interested</button>
      </footer>
    </article>
      `
    }).join('');
    section.innerHTML = toursInfo;
  };
  
  window.addEventListener('DOMContentLoaded', () => {
    displayTours_xx();
  });
  