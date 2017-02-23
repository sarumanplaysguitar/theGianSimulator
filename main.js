var namespace = "http://www.w3.org/2000/svg"
var currentStamp = 1




// DEFINE your first function here. 
// This function should create a "stamp" out of at least 2 types of shape.
// It should take 2 PARAMETERS named x and y, and use them to set the position of the stamp.

function makeHat(x,y) {
    makeImage("hat.png", x - 3.54, y - 3.54, 7.08, 7.08, 1)
}

// DEFINE your second function here.
// This function should create a different "stamp" out of at least 2 types of shape.
// It should take 2 PARAMETERS named x and y, and use them to set the position of the stamp.

function letThereBeGOOTH(x,y) {
    makeImage("gooth.png", x - 5.14, y - 5.14, 10.28, 10.28, 1)
}

// This function is called whenever the mouse is clicked on the canvas.
// It figures out the x and y coordinates of where the mouse was clicked, and stores them in the variables xCoord and yCoord.
// No need to change the code that's already here, but you will need to CALL your stamp functions where it's commented below!

function stamp(event) {
  var pt = canvas.createSVGPoint()
  pt.x = event.clientX
  pt.y = event.clientY
  
  var svgPt = pt.matrixTransform(canvas.getScreenCTM().inverse())
  var xCoord = svgPt.x
  var yCoord = svgPt.y
  
  if (currentStamp == 1) {
    // CALL your first function here, passing in xCoord and yCoord for the parameters!
    // makeImage("illust.png", 0, 0, 100, 30, 1)
      makeHat(xCoord, yCoord)
    
  } else {
    // CALL your second function here, passing in xCoord and yCoord for the parameters!
      letThereBeGOOTH(xCoord, yCoord)
  }

}





// !!!!!!!
// Don't edit the code below this line!
// !!!!!!!
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}