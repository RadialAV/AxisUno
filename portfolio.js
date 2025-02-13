// portfolio.js
console.log('Iniciando o carregamento das imagens...');

const images = [
  'assets/img/portfolio/DSC08633 (1).JPG',
  'assets/img/portfolio/DSC08913.JPG',
  'assets/img/portfolio/DSC09032.JPG',
  'assets/img/portfolio/DSC09041.JPG',
  'assets/img/portfolio/DSC08859.JPG',
  'assets/img/portfolio/DSC08927.JPG',
  'assets/img/portfolio/DSC09044.JPG',
  'assets/img/portfolio/IMG_20241117_010614.jpg',
  'assets/img/portfolio/IMG_20241117_044021.jpg',
];

const portfolioContainer = document.getElementById('portfolio-container');

images.forEach(image => {
  console.log('Carregando imagem:', image);
  const colDiv = document.createElement('div');
  colDiv.className = 'col-lg-4 col-md-6 portfolio-item';
  
  const imgDiv = document.createElement('div');
  imgDiv.className = 'portfolio-content h-100';

  const imgElement = document.createElement('img');
  imgElement.src = image;
  imgElement.className = 'img-fluid';
  imgElement.alt = 'Portfolio Image';

  imgDiv.appendChild(imgElement);
  colDiv.appendChild(imgDiv);
  portfolioContainer.appendChild(colDiv);
});
