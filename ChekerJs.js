   
       var Tableau_check=[];
       
       // Fonction de filtrage
       function filtrage(etiquette){
           var i, n; 
           let tag_tr=document.querySelectorAll('table tbody tr');
              
           // Si une checkbox est coché
        if(etiquette.checked){
              if(Tableau_check.indexOf(etiquette.value) == -1) {
                    Tableau_check.push(etiquette.value);   // Insertion dans le tableau si  elle ne s'y trouve pas.
                       oncheck_traitement(Tableau_check,tag_tr); // Affiche les éléments cocher.
                  } 
              }
            
              else   {    //Si un checkbox est décocher
                  var index=Tableau_check.indexOf(etiquette.value); //Récupération de l'index de la valeur à supprimer
                  var check_delete=Tableau_check[index];
                     Tableau_check.splice(index,1); // Suppression de la valeur décocher
                     ondecheck_traitement(Tableau_check,tag_tr,check_delete); // Affiche les éléments du nouveau tableau
                      
                }         
             }


        function Add_class(element, laclass){ // Ajoute de la class
            var i, tab_elem, tab_class;
            tab_elem=element.className.split(" ");
            tab_class=laclass.split(" ");
            for (var i=0; i< tab_class.length; i++) {
                if(tab_elem.indexOf(tab_class[i] == -1) ) {  
                    element.className+= " "+ tab_class[i];
                 }
             }
         } 


        function Remove_class(element, laclass){  // Supprimer une class
             element.classList.remove(laclass)
        }    



        oncheck_traitement=(Tableau_check, tag_tr)=>{
                if(Tableau_check.length==1){
                    for(i=0; i<tag_tr.length; i++){
                    if(tag_tr[i].className.indexOf(Tableau_check[0]) == -1) {
                     Add_class(tag_tr[i], "d-none");
                       }
                    }
                }
               else{ 
                      for(n=0; n<tag_tr.length; n++){ //Nb de tr disponible 
                      var status=0;
                      for(i=0; i<Tableau_check.length; i++){ //Nb d'etiquette checker
                         if (tag_tr[n].className.indexOf(Tableau_check[i]) > -1) {
                         status=status+1; //Verifie si le fichier contien une des étiquette
                         }        
                       }
                         if(status>0){  //J'afficher unique les fichier qui contiennent une des étiquettes.
                         Remove_class(tag_tr[n], "d-none");

                      }
                 }
             }
        }

      ondecheck_traitement=(Tableau_check, tag_tr, check_delete)=>{
                    var status=0;
                           if(Tableau_check.length==0){
                           for(i=0; i<tag_tr.length; i++){
                            Remove_class(tag_tr[i], "d-none");                             
                            }
                        }
                    else if(Tableau_check.length>0){ 
                        for(n=0; n<tag_tr.length; n++){ //Nb de tr disponible 
                               if (tag_tr[n].className.indexOf(check_delete) > -1) {
                                  
                                    for(t=0;t<Tableau_check.length;t++){
                                        if (tag_tr[n].className.indexOf(Tableau_check[t]) == -1) {
                                            
                                              Add_class(tag_tr[n], "d-none");
                                        }
                                    }
                                }
                           }
                       }
                   }
 