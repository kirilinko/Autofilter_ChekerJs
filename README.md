# Autofilter ChekerJs :abacus: 
ChekerJs is a purely JavaScript plugin that allows you to do real-time filtering of an HTML table. You with the possibility to customize it with the bootstrap version you want. The default version here is bootrap 5.
## :pushpin: Required resource ( Only one is needed )
 * Bootstrap 5 ([Available here](https://getbootstrap.com/docs/5.0/getting-started/download/) )
 * Bootstrap 4.6 ([Available here](https://getbootstrap.com/docs/4.6/getting-started/introduction/) )
 * Bootstrap 3.4 ([Available here](https://getbootstrap.com/docs/3.4/getting-started/) )
 ## :books: How to use ?
   
 First of all, your HTML table must have the following structure: ``` <table> -> <thead> <tbody> ```
```html 
<table>
  <thead>
    <th>Name</th>
    <th>City</th> 
    <th>Old</th> 
  </thead>
  <tbody>
   <tr class="Cotonou 16">
     <td>Franck</td>
     <td>Cotonou</td>
     <td>16</td>
   </tr>
   <tr class="Calavi 16">
     <td>Ivon</td>
     <td>Calavi</td>
     <td>16</td>
   </tr>
  </tbody>
</table>
  
```
Sorting at the table level is performed using the name given to the class located in the ``` <tr> ``` tags. The class contains the sort criteria. It has the possibility of containing an infinite number of them. All separated by spaces. This way you will have the possibility to filter a row according to several criteria. The filter must be checkbox type inputs and must necessarily have the class "etiquette". The **value attribute must contain the sort criteria**, as in the following example :

```html 
       <input type="checkbox" class="etiquette" name="checkbox" value="Calavi" onchange="filtrage(this)">
       <label>Calavi</label> 

```
## Configuration for bootstrap
For those using bootstrap 5, you can leave it untouched. On the other hand for any other version other than 5, you must modify the class "d-none" in the plugin. At the oncheck_traitement and ondecheck_traitement functions
```javascript

oncheck_traitement = (Tableau_check, tag_tr) => {
    if (Tableau_check.length == 1) {
        for (i = 0; i < tag_tr.length; i++) {
            if (tag_tr[i].className.indexOf(Tableau_check[0]) == -1) {
                Add_class(tag_tr[i], "d-none");
            }
        }
    } else {
        for (n = 0; n < tag_tr.length; n++) { //Nb de tr disponible 
            var status = 0;
            for (i = 0; i < Tableau_check.length; i++) { //Nb d'etiquette checker
                if (tag_tr[n].className.indexOf(Tableau_check[i]) > -1) {
                    status = status + 1; //Verifie si le fichier contient une des étiquettes
                }
            }
            if (status > 0) { //afficher uniquement les fichiers qui contiennent une des étiquettes.
                Remove_class(tag_tr[n], "d-none");

            }
        }
    }
}
```
# Bootstrap class visibility table
Version | Class
------------ | -------------
Bootstrap 5 | d-none
Bootstrap 4.6 | show
Bootstrap 3.4 | show

# :computer: Demo and download
See the demostration and download ChekerJs to github.com/kirilinko/RecorderJS
