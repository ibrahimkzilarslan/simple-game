
 /* In this method, we have assigned the items in our code. */
 
    const liste=["Paper","Scissors","Stone"];
    const vuln=[1,2,0];
    const action=["wraps","cutting","breaking"];


 /* In this method, we coded the text that we will give to the screen in case of equality */
                
    function choose(id){
      let pcChoose= generatePcChoosen();
      let yourChoose=id;
      
      if(pcChoose===yourChoose)
         result="DRAW";
      else{
         result=calculateResult(yourChoose,pcChoose)
    }  

    showResult(pcChoose,result);
}



/* 
  In this function, 
  we assign "Win" or "Lost" on the screen if the user choice is equal to the vulnerability of the computer or not 
*/

    function calculateResult(yourChoose,pcChoose){
      if (yourChoose === vuln[pcChoose])
         return "You win! "+liste[yourChoose] +" "+action[vuln[pcChoose]]+" to "+liste[pcChoose]
      else if (pcChoose === vuln[yourChoose])
         return "You lose! "+liste[pcChoose] +" "+action[vuln[yourChoose]]+" to "+liste[yourChoose]
}

  
    function showResult(pc,sonuc){
        Swal.fire({
            width: 600,
            title: sonuc,
            text: 'Click "OK" to continue',
            imageUrl:  "image\\"+liste[pc]+ ".png",
            backdrop: `
                rgba(0,0,123,0.4)
                img src=""
                left top,
                no-repeat`,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image'
        })
    }


/*this method provides to generate pc choosen */

    function generatePcChoosen(){
      var imageIndex=Math.round(Math.random()*2);
      return imageIndex;
    }   
