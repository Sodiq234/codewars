const areaOrPerimeter = function(l , w) {
  // Return your answer
  
  if ( l===w){
    let area = l * w
    return area
  }else{
    perimeter = 2 * (l + w)
    return perimeter
  }
};