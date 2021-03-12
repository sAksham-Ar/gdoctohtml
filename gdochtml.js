var i,j,k,x;
a=document.getElementsByClassName("kix-page-column");
var out='<h1>'+document.getElementsByClassName("kix-page-column")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText+'</h1>';
for(j=0;j<a.length;j++)
{
    b=document.getElementsByClassName("kix-page-column")[j].childNodes[0].childNodes[0].childNodes[0].childNodes;
    for(i=0;i<b.length;i++)
    {
      if((i==0)&&(j==0))
      {
          continue;
      }
      if(b[i].className=="kix-tablerenderer")
      {
        out+='<table>'
        tr=b[i].getElementsByTagName("tr")
        for(k=0;k<tr.length;k++)
        {
          out+='<tr>'
          td=tr[k].getElementsByTagName("td");
          for(x=0;x<td.length;x++)
          {
            out+='<td>'+td[x].innerText+'</td>';
          }
          out+='</tr>'
        }
        out+='</table>'
        continue;
      }
      if(b[i].getElementsByTagName("image").length!=0)
      {
        out+='<br><img src="'+b[i].getElementsByTagName("image")[0].attributes.href.value+'"></img><br>'
      }
      if(b[i].innerText.trim().length!=1)
      {
        if(b[i].getElementsByTagName("a").length!=0)
        {
          out+='<p><a href="'+b[i].getElementsByTagName("a")[0].href+'">'+b[i].innerText+'</a></p>';
        }
        else{
      out=out+'<p>'+b[i].innerText+'</p>';
        }
      }
    }
}
console.log(out)
