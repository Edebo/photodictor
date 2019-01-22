//get element we need
		var canvas=document.getElementById('can');
		 var ctx=canvas.getContext('2d');
		var img= new Image();
		var fileName=''; 
		var upload=document.getElementById('upload');
		//upload file
		upload.addEventListener("change" ,function(e){
		//get file
		var file=document.getElementById('upload').files[0];
		///init filereader
		
		var reader = new FileReader();
		
		if(file){
		//set filename
		
		fileName=file.name;
		reader.readAsDataURL(file);
		}
		
		
		//loading the image into the canvas
		
		reader.addEventListener("load",function(){
		
		//create image
		img=new Image();
		img.src=reader.result;
		
		img.onload=function(){
		canvas.width=img.width;
		canvas.height=img.height;
		ctx.drawImage(img,0,0,img.width,img.height);
		canvas.removeAttribute("data-caman-id");
		};
		
		},false);
		});
		
		
		//==============this is to respond to the click buttons and to add or remove effect
		document.addEventListener('click',function(e){

			switch(e.target.id){
			
			case "brit-dec":
			
				Caman('#can',img,function(){
					this.brightness(-10).render();
				});
				e.stopPropagation();
				break;
					
			case "brit-inc":
				Caman('#can',img,function(){
					this.brightness(10).render();
				});
				
				e.stopPropagation();
				break;		
			
			
			case "trast-dec":
				Caman('#can',img,function(){
					this.contrast(-10).render();
				});
				e.stopPropagation();
				break;		
			
			
			case "trast-inc":
				Caman('#can',img,function(){
					this.contrast(10).render();
				});
				
				e.stopPropagation();
				break;		
			
			
			case "sat-dec":
				Caman('#can',img,function(){
					this.saturation(-10).render();
				});
				e.stopPropagation();
				break;		
			
			
			case "sat-inc":
				Caman('#can',img,function(){
					this.saturation(10).render();
				});
				
				e.stopPropagation();
				break;		
			
			
			case "exp-dec":
				Caman('#can',img,function(){
					this.exposure(-10).render();
				});
				e.stopPropagation();
				break;	


			case "exp-inc":
				Caman('#can',img,function(){
					this.exposure(10).render();
				});
				
				e.stopPropagation();
				break;	

			
			case "hue":
				Caman('#can',img,function(){
					this.hue(10).render();
				});
				
				e.stopPropagation();
				break;
			
			
			case "blur":
				Caman('#can',img,function(){
					this.stackBlur(10).render();
				});
				
				e.stopPropagation();
				break;
				
			case "sepia":
				Caman('#can',img,function(){
					this.sepia(5).render();
				});
				
				e.stopPropagation();
				break;
				
			case "gam":
				Caman('#can',img,function(){
					this.gamma(0.1).render();
				});
				
				e.stopPropagation();
				break;
				
			case "vin":
				Caman('#can',img,function(){
					this.vintage().render();
				});
				
				e.stopPropagation();
				break;
				
			case "lomo":
				Caman('#can',img,function(){
					this.lomo().render();
				});
				
				e.stopPropagation();
				break;
				
			case "clar":
				Caman('#can',img,function(){
					this.clarity().render();
				});
				
				e.stopPropagation();
				break;
				
			case "pin":
				Caman('#can',img,function(){
					this.pinhole().render();
				});
				
				e.stopPropagation();
				break;
			
			
				//===========Image file download ===================================================
			case "remove":
				 Caman('#can',img,function(){
					this.revert();
				});
				
				e.stopPropagation();
				break;
			}
		
		});
		
		
		//===============================download part
		
		download=document.getElementById("download");
		
	download.addEventListener("click",function(){
	var fileExtension = fileName.slice(-4);
    if (fileExtension == ".jpg" || fileExtension == ".png") {
      var actualName = fileName.substring(0, fileName.length - 4);
    }
    downloadImg(canvas, actualName + "-edited.jpg");
	
	
	});
	
	
	//====download function
	function downloadImg(canvas, filename) {
  var e;
  //for link
  var imagelink = document.createElement("a");

  imagelink.download = filename;

 imagelink.href = canvas.toDataURL("image/jpeg", 0.8);

  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    imagelink.dispatchEvent(e);
  } else if (imagelink.fireEvent) {
    imagelink.fireEvent("onclick");
  }
}