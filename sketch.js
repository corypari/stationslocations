
var testSound = [];
var testSoundTwo = [];
var testSoundThree = [];
var testSoundFour = [];
var canvas;
var pos;
var prevPos;
var numOfNewStations = 0;
var numOfNewStationsTwo = 0;
var numOfNewStationsThree = 0;
var numOfNewStationsFour = 0;
var numOfPings = 0;



function setup(){

  watchPosition(positionPing);

//Station 1 channels
  testSound.push( createAudio("http://www.junctionpoland.com:8000/64.ogg") );
  testSound.push( createAudio("http://stream.radioreklama.bg/nrj_low.ogg") );
  testSound.push( createAudio("http://stream.radioreklama.bg/radio1rock.ogg") );
  testSound.push( createAudio("http://stream.247drumandbass.com:8000/256k.ogg") );
  testSound.push( createAudio("http://friends-of-radius.ethz.ch/kohina.ogg") );
  testSound.push( createAudio("http://stream.247drumandbass.com:8000/256k.ogg") );
  testSound.push( createAudio("http://relay-chi.gameowls.com:8000/covers.ogg") );
  testSound.push( createAudio("http://stream.radioblackout.org/blackout.ogg") );
  testSound.push( createAudio("http://radio.108.pl:8006/meditation.ogg") );
  testSound.push( createAudio("http://lobocast.org.es:8000/noche112.ogg") );
  testSound.push( createAudio("http://us2.ishout.net:8015/dips.ogg") );
  testSound.push( createAudio("http://radio.goha.ru:8000/grindfm.ogg") );
  testSound.push( createAudio("http://icecast.radiovox.org:8000/live.ogg") );
  testSound.push( createAudio("http://icecast.radiovox.org:8000/live.ogg") );
//Station 2 channels
  testSoundTwo.push( createAudio("http://ice.kultradio.fm/kult128.ogg") );
  testSoundTwo.push( createAudio("http://rondo.iradio.fi:8000/klasupro.flac") );
  testSoundTwo.push( createAudio("http://www.junctionpoland.com:8000/64.ogg") );
  testSoundTwo.push( createAudio("http://stream.libreantenne.org:8000/listen.ogg") );
  testSoundTwo.push( createAudio("http://flow02.gcnlive.com/millionaireRoadShow-hi.ogg") );
  testSoundTwo.push( createAudio("http://aquaudio.net:8000/radio") );
  testSoundTwo.push( createAudio("http://jiggaradio.com:10080/play/radio") );
  testSoundTwo.push( createAudio("http://fr1.lounge-radio.com/lounge128.ogg") );
  testSoundTwo.push( createAudio("http://46.165.203.194/main_high.ogg") );
  testSoundTwo.push( createAudio("http://flow02.gcnlive.com/goodDay-hi.ogg") );
//Station 3 channels
  testSoundThree.push( createAudio("http://stream.lesonparisien.com/mid.ogg") );
  testSoundThree.push( createAudio("http://stream.wuvt.vt.edu/wuvt.ogg") );
  testSoundThree.push( createAudio("http://streamhub.radioinfoweb.net:8000/studio1") );
  testSoundThree.push( createAudio("http://ebm-radio.org:9000/ebm.ogg") );
  testSoundThree.push( createAudio("http://www.radioson.ru:8009/radio-dacha.mp3") );
  testSoundThree.push( createAudio("http://station-sound.ru:8000/pt-1") );
  testSoundThree.push( createAudio("http://svobodny-vysilac.cz:8000/live.opus") );
  testSoundThree.push( createAudio("http://flow01.gcnlive.com/healthHunters-hi.ogg") );
  testSoundThree.push( createAudio("http://svobodny-vysilac.cz:8000/live16k.opus") );
  testSoundThree.push( createAudio("http://stream.cjsw.com/cjsw.ogg") );
//Station 4 Channels
  testSoundFour.push( createAudio("http://dubfun.lobocast.org.es:8003/dubfun.ogg") );
  testSoundFour.push( createAudio("http://tech.eradio-one.de:62020/low1.ogg") );
  testSoundFour.push( createAudio("http://rivendell.byte-storm.com:8000/128kbit.ogg") );
  testSoundFour.push( createAudio("http://www.shinsen-radio.org:8000/shinsen-radio.128.ogg") );
  testSoundFour.push( createAudio("http://www.1431am.org:8000/1431ogglow") );
  testSoundFour.push( createAudio("http://flow02.gcnlive.com/korelinReport-hi.ogg") );



  canvas = createCanvas(640,640);
  fill(200, 100, 100);
}

function positionPing(position){
  if(numOfPings == 0){
    prevPos = position;
  }
  numOfPings++;


  print("lat: " + position.latitude);
  print("long: " + position.longitude);
  let el = document.querySelector("#testDiv");
  el.innerText = "Location: " + position.latitude + ", " + position.longitude;



  let d = calcGeoDistance(prevPos.latitude, prevPos.longitude, position.latitude, position.longitude, 'mi');
  el = document.querySelector("#dist");
  el.innerText = "Movement: " + d;
  console.log(d);


  //Station 1 distance
  if(d >= 0.001){
    prevPos = position;

    testSound[numOfNewStations % testSound.length].stop();

    numOfNewStations++;

    testSound[numOfNewStations % testSound.length].play();




    el = document.querySelector("#newStation");
    el.innerText = "Station 1: " + numOfNewStations;
    textAlign(CENTER);
    // start new station here
  }
  //Station 2 distance
  if(d >= 0.002){
    prevPos = position;

    testSoundTwo[numOfNewStationsTwo % testSoundTwo.length].stop();

    numOfNewStationsTwo++;

    testSoundTwo[numOfNewStationsTwo % testSoundTwo.length].play();




    el = document.querySelector("#newStationTwo");
    el.innerText = "Station 2: " + numOfNewStationsTwo;
    textAlign(CENTER);
    // start new station here
  }
  //Station 3 distance
  if(d >= 0.003){
    prevPos = position;

    testSoundThree[numOfNewStationsThree % testSoundThree.length].stop();

    numOfNewStationsTwo++;

    testSoundThree[numOfNewStationsThree % testSoundThree.length].play();




    el = document.querySelector("#newStationThree");
    el.innerText = "Station 3: " + numOfNewStationsThree;
    textAlign(CENTER);
    // start new station here
  }
  //Station 4 distance
  if(d >= 0.01){
    prevPos = position;

    testSoundFour[numOfNewStationsFour % testSoundFour.length].stop();

    numOfNewStationsFour++;

    testSoundFour[numOfNewStationsFour % testSoundFour.length].play();




    el = document.querySelector("#newStationThree");
    el.innerText = "Station 3: " + numOfNewStationsThree;
    // start new station here
  }
}
