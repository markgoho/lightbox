const model = {
  pictures: [
    {
      imgPath: 'photos/01.jpg',
      thumbPath: 'photos/thumbnails/01.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/02.jpg',
      thumbPath: 'photos/thumbnails/02.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/03.jpg',
      thumbPath: 'photos/thumbnails/03.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/04.jpg',
      thumbPath: 'photos/thumbnails/04.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/05.jpg',
      thumbPath: 'photos/thumbnails/05.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/06.jpg',
      thumbPath: 'photos/thumbnails/06.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/07.jpg',
      thumbPath: 'photos/thumbnails/07.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/08.jpg',
      thumbPath: 'photos/thumbnails/08.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/09.jpg',
      thumbPath: 'photos/thumbnails/09.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
      imgPath: 'photos/10.jpg',
      thumbPath: 'photos/thumbnails/10.jpg',
      title: 'Hay Bales',
      caption:
        'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    }
  ]
};

const controller = {
  init() {
    galleryView.init();
    lightboxView.init();
    searchboxView.init();
  },

  get images() {
    return model.pictures;
  }
};

// View(s)
const galleryView = {
  init() {
    // store pointers to DOM elements for later access
    this.gallery = document.querySelector('.gallery');
    this.render();
  },
  render() {
    controller.images.forEach(image => {
      const a = document.createElement('a');
      a.href = image.imgPath;

      const img = document.createElement('img');
      img.src = image.thumbPath;

      a.addEventListener('click', e => {
        e.preventDefault();
        lightboxView.render(image);
      });

      a.appendChild(img);

      this.gallery.appendChild(a);
    });
  }
};

const lightboxView = {
  init() {
    this.lightbox = document.querySelector('.lightbox');
    this.previous = document.querySelector('.previous');
    this.next = document.querySelector('.next');
    this.lbImg = document.querySelector('.lb-image > img');
    this.caption = document.querySelector('caption');

    this.lightbox.addEventListener('click', () => this.destroy());
  },
  render(image) {
    this.lbImg.src = image.imgPath;
    this.lightbox.classList.remove('hidden');
  },
  destroy() {
    this.lightbox.classList.add('hidden');
  }
};

const searchboxView = {
  init() {}
};

controller.init();
