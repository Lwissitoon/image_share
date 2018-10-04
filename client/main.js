import { Template } from 'meteor/templating';
import'../lib/collections.js';
import './main.html';
var image_id ;
var img_src;
var img_alt;
function src()
{
  return $(".img_src").val();
}

function alt()
{
  return $(".img_alt").val();
}

$( ".img_alt" )
.keyup(function() {
  img_alt = $( this ).val();
})
.keyup();

$( "img.src" )
.keyup(function() {
  img_src = $( this ).val();

})
.keyup();

if (Meteor.isClient){




console.log(Images.find().count());
  Template.images.helpers({images:Images.find()});

  Template.images.events({
'click .rate-image':function(event)
{
  image_id =this._id;
  console.log(image_id);
  $("#"+image_id).hide();
  Images.remove({"_id":image_id});
},

/*{

  var rating = $(event.currentTarget).data("userrating");
  console.log(rating);
  image_id= this._id;
  console.log(image_id);
},*/

'click .js-del-image':function(event)
{
  image_id =this._id;
  console.log(image_id);
  $("#"+image_id).hide();
  Images.remove({"_id":image_id});
},


  });
}

Template.add_image_form.events({

'click #save':function(event,tmpl)
{
  event.preventDefault();
 var image_title = $("#image_title").val();
 var img_src = $("#image_src").val();
 var img_alt = $("#image_alt").val();
console.log(image_title);
console.log(img_src);
console.log(img_alt);
 //console.log("src: "+s+"  alt: "+img_alt);

 Images.insert(
  {
  image_title:image_title,
  img_src:img_src,
  img_alt:img_alt,
  createdOn: new Date()
  }

   
); 
   $("#image_title").val('');
   $("#image_src").val('');
   $("#image_alt").val('');
 return false;
}


});





/*
  var img_data =
  [
    {
    img_src:"galaxy.jpg",
    img_alt:"other galaxy",
    img_name:"Find yourself",
    img_desc:"Man watching the sky"
  },
  {
    img_src:"galaxy2.jpg",
    img_alt:"other galaxy",
    img_name:"Star forest",
    img_desc:"Forest fill of stars"
  }, 
  {
    img_src:"galaxy3.jpg",
    img_alt:"other galaxy",
    img_name:"Limitless",
    img_desc:"The infinity of universe"
  }
];
*/