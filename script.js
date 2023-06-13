

    function calculateFare() {

      var start = document.getElementById('start').value;

      var destination = document.getElementById('destination').value;

      var stations = calculateStations(start, destination);

      var fare = calculateFarePrice(stations);

      document.getElementById('fareResult').textContent = "Fare Price: Rs " + fare;

    }

    function calculateStations(start, destination) {

      var stations = 0;

      var stationList = ["CCS Airport", "Amausi", "Transport Nagar", "Krishna Nagar", "Singar Nagar","Alambagh", "Alambagh Bus Stand", "Mawaiya", "Durgapuri", "Charbagh Railway Station","Hussainganj", "Sachivalaya", "Hazratganj", "KD Singh Babu Stadium", "Lucknow University","IT College", "Badshah Nagar", "Lekhraj Market", "Bhootnath Market", "Indira Nagar", "Munshipulia"];

      var startIndex = stationList.indexOf(start);

      var endIndex = stationList.indexOf(destination);

      if (startIndex > -1 && endIndex > -1) {

        stations = Math.abs(endIndex - startIndex);

      }

      return stations;

    }

    function calculateFarePrice(stations) {

      var fare = 0;

      if (stations === 1) {

        fare = 10;

      } else if (stations === 2) {

        fare = 15;

      } else if (stations >= 3 && stations <= 6) {

        fare = 20;

      } else if (stations >= 7 && stations <= 9) {

        fare = 30;

      } else if (stations >= 10 && stations <= 13) {

        fare = 40;

      } else if (stations >= 14 && stations <= 17) {

        fare = 50;

      } else if (stations >= 18) {

        fare = 60;

      }

      return fare;

    }

