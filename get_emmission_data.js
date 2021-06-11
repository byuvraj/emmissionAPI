const base_url_corbonmonoxide = 'https://api.v2.emissions-api.org' + '/api/v2/carbonmonoxide/statistics.json' + '?interval=day&begin=2019-02-01&end=2019-02-02&point=';
const table = document.getElementById('highscore_carbonmonoxide');
const New_York = '74.0060,40.7128',
Tokyo ='139.6503,35.6762',
Jakarta= '106.8456,6.2088',
Delhi = '77.1025,28.7041',
Manila = '120.9842,14.5995',
Seoul = '126.9780,37.5665',
Shanghai = '121.4737,31.2304',
Karachi = '67.0011,24.8607',
Beijing = '116.4074,39.9042',
Sao_Paulo = '46.6333,23.5505',
Mexico_City = '99.1332,19.4326',
Mumbai = '72.8777,19.0760',
Kyoto = '135.7681,35.0116',
Moscow = '37.6173,55.7558',
Dhaka = '90.4125,23.8103';

urls = [New_York, Tokyo, Jakarta, Delhi, 
    Manila, Seoul, Shanghai, Karachi, 
    Beijing, Sao_Paulo, 
    Mexico_City, Mumbai, Kyoto, Moscow,
    Dhaka].map(city => base_url_corbonmonoxide + city);
Promise.all(
    urls.map(url => fetch(url).then(response => response.json()))
  ).then(responses => {
    [
        [responses[0][0].value.average, 'New York'],
        [responses[1][0].value.average, 'Tokyo'],
        [responses[2][0].value.average, 'Jakarta'],
        [responses[3][0].value.average, 'Delhi'],
        [responses[4][0].value.average, 'Manila'],
        [responses[5][0].value.average, 'Seoul'],
        [responses[6][0].value.average, 'Shanghai'],
        [responses[7][0].value.average, 'Karachi'],
        [responses[8][0].value.average, 'Beijing'],
        [responses[9][0].value.average, 'Sao Paulo'],
        [responses[10][0].value.average, 'Mexico City'],
        [responses[11][0].value.average, 'Mumbai'],
        [responses[12][0].value.average, 'Kyoto'],
        [responses[13][0].value.average, 'Moscow'],
        [responses[14][0].value.average, 'Dhaka'],
    ].sort().forEach(city => {
        var tr = document.createElement('tr'),
        td_l = document.createElement('td'),
        td_r = document.createElement('td');
    td_l.innerText = city[1];
    td_r.innerText = city[0].toFixed(4);
    tr.appendChild(td_l);
    tr.appendChild(td_r);
    table.appendChild(tr);
    });
  });
  const base_url_nitrogenoxide = 'https://api.v2.emissions-api.org' + '/api/v2/nitrogendioxide/statistics.json' + '?interval=day&begin=2019-02-01&end=2019-02-02&point=';
  const table_no = document.getElementById('highscore_nitrogenoxide');
  urls_no = [New_York, Tokyo, Jakarta, Delhi, 
      Manila, Seoul, Shanghai, Karachi, 
      Beijing, Sao_Paulo, 
      Mexico_City, Mumbai, Kyoto, Moscow,
      Dhaka].map(city => base_url_nitrogenoxide + city);
  Promise.all(
      urls_no.map(url => fetch(url).then(response => response.json()))
    ).then(responses => {
      [
          [responses[0][0].value.average, 'New York'],
          [responses[1][0].value.average, 'Tokyo'],
          [responses[2][0].value.average, 'Jakarta'],
          [responses[3][0].value.average, 'Delhi'],
          [responses[4][0].value.average, 'Manila'],
          [responses[5][0].value.average, 'Seoul'],
          [responses[6][0].value.average, 'Shanghai'],
          [responses[7][0].value.average, 'Karachi'],
          [responses[8][0].value.average, 'Beijing'],
          [responses[9][0].value.average, 'Sao Paulo'],
          [responses[10][0].value.average, 'Mexico City'],
          [responses[11][0].value.average, 'Mumbai'],
          [responses[12][0].value.average, 'Kyoto'],
          [responses[13][0].value.average, 'Moscow'],
          [responses[14][0].value.average, 'Dhaka'],
      ].sort().forEach(city => {
          var tr = document.createElement('tr'),
          td_l = document.createElement('td'),
          td_r = document.createElement('td');
      td_l.innerText = city[1];
      td_r.innerText = city[0].toFixed(4);
      tr.appendChild(td_l);
      tr.appendChild(td_r);
      table_no.appendChild(tr);
      });
    });
  
    
  