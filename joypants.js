function getCodes(codesfield) {
  var value = codesfield.val();
  $("p").html("<td>" + value + "</td>");
}

function getGroupCount(){
  var ids = $("input[id=id_faceplategroup_set-TOTAL_FORMS]").val();
  return ids;
}

function imgError(code){ 
  var imgurl = "https://d12eobaimzi14r.cloudfront.net/faceplates/" + code + "/MOBILE-1.jpg";
  var onerrortxt = 'this.onerror=null;this.src="' + imgurl + '";';
  console.log("imgError: " + onerrortxt);
  return onerrortxt;
}

$("th:contains('Language code')").after("<td>Images</td>");

for (i = 0; i < getGroupCount(); i++) {
  var text = $("input[id=id_faceplategroup_set-" + i + "-faceplate_codes").val().split(',');
  var carousel_body = "<td class='fp_thumbs'>";
  console.log(text);
  text.forEach( function(code) {
    jpegurl = 'https://d12eobaimzi14r.cloudfront.net/faceplates/' + code + '/MOBILE-1.jpeg';
    carousel_body= carousel_body + "<div><a target='_blank' href='https://faceplate-management.cashstar.com/faceplate/view/" + code + 
      "'><img src='" + jpegurl + "' onerror='" + imgError(code) + "' title='" +
      code + "'alt='" + code + "'/><p><a href='https://faceplate-management.cashstar.com/faceplate/view/" + code + "'><strong>" + code + "</strong></a></p></div>";
  });
  carousel_body= carousel_body + "</td>";
  $("tr[id=faceplategroup_set-" + i).find("td[class*=language_code]").after(carousel_body);
}

$('.fp_thumbs').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
});

$("select[id*=product_key").css("width","100px");
$("select[id*=partner").css("width","100px");
$("select[id*=language_code").css("width","100px");
$("input[id*=faceplate_codes]").attr("size","20");