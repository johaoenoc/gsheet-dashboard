async function fetchData() {
    try {
      const response = await axios.get(
        'https://sheets.googleapis.com/v4/spreadsheets/1SL0ttjuO7yKWf33macxdjR1sKzIVgjLnn91olS12OQs/values/A2:C2?key=AIzaSyC2-nKwfcBVIvv7wvWwwUZvDptVq7S_Ibc'
      );

      const values = response.data.values[0];
      document.getElementById('ingresos').textContent = `${values[0]}`;
      document.getElementById('bajas').textContent = `${values[1]}`;
      document.getElementById('equipos').textContent = ` ${values[2]}`;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();