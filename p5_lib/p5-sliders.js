/////SLIDERS//////
  in setup()
    slider = createSlider(min, max, initial);
    slider.position(x,y);
    slider.style('width', '80px');
  in draw()
    var val = slider.value();
    background(val);