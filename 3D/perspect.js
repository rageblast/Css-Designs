// Orthographic -> default (if we move the value in the z axis it wont move because it will make the object to stand still)
// above is used to place elements one behind another (position absolute)

// prespective -> we need to set (it is like our eyes if we move the object towards us it will come towards us and if we move away from
//  us it will be at long distance it can be done through prespective)

// origin -> from which side we are seeing the object

// face -> is a flat like div, img, or video anything

// object -> multiple faces togther and those faces are synced and they are inside one parent

// Global Axis -> it is fixed 

// local axis -> when we rotate the axis will change so it will move on that local axis

// so when we work with translate and scale and rotate or translate and rotate or scale and rotate do the other ones and then rotate
// because of the local axis

// scalex() rotatex() or translatex() rotatex() (always)

//when we move the images in z-axis it will make the picture come close to us so it blur

//in browser Y-axis positive side is down and negative side is up so it is oppsite of general y-axis plane

//when we rotate our div 
//1. we will see it directly first
//2. when we rotate it will become inverted 

//for flat plane there is no scale z

//transform orgin : 50% 50% 100px

// orgin: center of div and moved 100px in the z-axis

//now if we move the div it will rotate around the orgin (like earth revolves around the sun)

//objects

//viewport div -> to make the object prespective
//zoomed div -> parent div
//content, content1 -> child div

{/* <div class="viewport">
<div class="zoomed_element">
  <div class="content"></div>
  <div class="content1"></div>
</div>
</div> */}

//parent own't allow the child to have their own 3D space 
//but paren't can move in the 3d space 
//so to make the child to move on the 3d space we need to put the parent div inside perserve 3d
//its saying that child wont affect the parent element and it can move freely on the 3d space but parent can affect the child 
//when it moves on the 3d space 

//important if u forgot about the perserve 3d see the object section

//z-axis zoom effect(below explanation to solve it)

//lets say our parent is always at the dead center means x=0, y=0, z=0
//so when we move our child in the z-axis which is facing towards us it will be in the en-larged state
//so if it is a image it will break the image pixel
//so to avoid that pixel break we need to move the face pointing towards to us to the parent place by decreasing the parent
//in the z-axis by how much amount we have moved the child element in the z-axis that is facing towards us
//now it will be at 100% and pixel won't break   

//Perspective-orgin
//has two values one moves on x and another on y
//view port height and width will affect the perspective-orgin


//normally transform-orgin is at center
//we can set values in x y z(transform-orgin(x, y, z))
//and object moves from that point

//object hierarchy

{/* <div class="bottom-tier">
<div class="top-tier">
  <div class="images"></div>
  <div class="images"></div>
  <div class="images"></div>
  <div class="images"></div>
</div>
<div class="images"></div>
<div class="images"></div>
<div class="images"></div>
<div class="images"></div>
</div> */}

// if i pass the value of preserve 3d to the bottom tier it wont pass
// the value of preserve 3d style to the top-tier children means 
// grand-child so each object should have their preserve 3d style for their
// child to access 3d even if thier grand father has the perserve 3d style

{/* <main>
<div class="bottom-tier">
  <div class="top-tier">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <img src="" alt="">
  <img src="" alt="">
  <img src="" alt="">
  <img src="" alt="">
</div>
</main> */}

//main has the width of 100% but height will be there because of bottom-tier(because it is a static)
//so if we rotate the main element the element inside of it also rotate
//and if we decreace the width of the main the element inside of it also be affected
//perserve 3d also be checked because the child inside of it has be in 3d(if not it will be in flat phase)
//so main should have preseve 3d and transform-orgin has to be checked
//main preserve 3d helps in maintaining the prespective of the object and also the child

// four points to remember(main concept)
// 1.width
// 2.positioning
// 3.preserve 3d
// 4.transform-orgin
