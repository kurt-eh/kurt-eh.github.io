let smallPanels = document.querySelectorAll(".smallPanel"); //get all of our small panels
//we now iterate over our list of small panels, read in the attribute we set on their HTML, and assign it to their style property
for(let smallPanel of smallPanels){
    let imgName = smallPanel.getAttribute("img_id");
    let folder = "images/Species/";
    imgName = folder + imgName;
    smallPanel.style.backgroundImage = `url(${imgName})`;
    smallPanel.addEventListener("click", imageSwap);
    smallPanel.addEventListener("mouseover", function() {this.style.borderColor = this.getAttribute("color_id")});
    smallPanel.addEventListener("mouseover", function() {console.log("font family id: " + this.getAttribute("font_fam_id"))});
}

let mainPanel = document.getElementById("mainPanel");
let mainPanelTitle = document.getElementById("mainPanelH2");
let MainPanelTitleColor = mainPanel.getAttribute("color_id");
let thumb = document.getElementsByClassName("thumb");
let mainTitleFont = mainPanel.getAttribute("font_fam_id");
document.getElementById("mainPanelH2").style.fontFamily = mainTitleFont;


console.log("Original main panel Font: " + document.getElementById("mainPanelH2").style.fontFamily );

mainPanelTitle.style.color=MainPanelTitleColor;


function imageSwap(){
    //set temp variables and folder.
    let tmpImgName = mainPanel.getAttribute("img_id");
    let tmpImgTitle = mainPanel.getAttribute("title");
    let tmpImgText = mainPanel.getAttribute("p_text");
    let tmpFontFamily = mainPanel.getAttribute("font_fam_id");
    let tmpColor = mainPanel.getAttribute("color_id");
    
    let folder = "images/Species/";
    
    //change the attributes in the main panel.
    mainPanel.setAttribute("img_id", this.getAttribute("img_id"));
    mainPanel.setAttribute("title", this.getAttribute("title"));   
    mainPanel.setAttribute("p_text", this.getAttribute("p_text"));   
    mainPanel.setAttribute("font_fam_id", this.getAttribute("font_fam_id"));
    mainPanel.setAttribute("color_id", this.getAttribute("color_id")); 

    //Update the DOM with the swapped attributes   
    mainPanel.style.backgroundImage = `url(${folder + this.getAttribute("img_id")})`;
    mainPanelTitle.style.fontFamily = mainPanel.getAttribute("font_fam_id");
    mainPanelTitle.style.color = this.getAttribute("color_id");   

    mainPanelText.querySelector("#mainPanelP").innerHTML = this.getAttribute("p_text"); 
    mainPanelText.querySelector("#mainPanelH2").innerHTML = this.getAttribute("title");

    //display the swapped image into the thumb.
    this.style.backgroundImage = `url(${folder + tmpImgName})`;
    
    //load the temp attributes into the thumb
    this.setAttribute("img_id", tmpImgName);
    this.setAttribute("p_text", tmpImgText);
    this.setAttribute("title", tmpImgTitle);
    this.setAttribute("color_id", tmpColor);
    this.setAttribute("font_fam_id", tmpFontFamily);
    this.style.borderColor = this.getAttribute("color_id");    


}