document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const title = item.querySelector('.accordion-title');
  
      title.addEventListener('click', function () {
        const content = this.nextElementSibling;
  
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  });
  