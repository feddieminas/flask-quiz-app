//will wait uuntil page ready
 $(document).ready(function(){

    /*when table header is clicked , removes selection class from all other table rows and
      adds the selection class to this table headers row only*/
     $("th").click(function(){
     	$("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");

  });
  
  /*
  Example :
  all children of tr are the th and all td
  all siblings of th are all the td
  
   <tr>
      <th>Spinach</th>
      <td>America</td> 
      <td>28</td>
      <td>90</td>
      <td>Veg</td>
    </tr>
  
  */
  
  
 });