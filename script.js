document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('duration-form');
    const resultContainer = document.getElementById('result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const startDate = new Date(
        document.getElementById('start-year').value,
        document.getElementById('start-month').value - 1,
        document.getElementById('start-day').value,
        document.getElementById('start-hour').value,
        document.getElementById('start-minute').value,
        document.getElementById('start-second').value
      );
      
      const endDate = new Date(
        document.getElementById('end-year').value,
        document.getElementById('end-month').value - 1,
        document.getElementById('end-day').value,
        document.getElementById('end-hour').value,
        document.getElementById('end-minute').value,
        document.getElementById('end-second').value
      );
  
      const duration = endDate - startDate;
  
     
      const years = endDate.getFullYear() - startDate.getFullYear();
  
      
      let months = endDate.getMonth() - startDate.getMonth();
      if (months < 0) {
        months += 12;
      }
  
      
      let days = endDate.getDate() - startDate.getDate();
      if (days < 0) {
        const tempDate = new Date(startDate);
        tempDate.setMonth(startDate.getMonth() + 1);
        days += Math.floor((tempDate - startDate) / (1000 * 60 * 60 * 24));
      }
  
      
      const seconds = Math.floor((duration / 1000) % 60);
      const minutes = Math.floor((duration / (1000 * 60)) % 60);
      const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);


  
      resultContainer.innerHTML = `<p>Duration: ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</p>`;
    });
  });
  