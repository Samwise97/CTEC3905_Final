function initMap() {
        var myLatLng = {lat: 51.464495, lng: -3.172801};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'My Map'
        });
      }
