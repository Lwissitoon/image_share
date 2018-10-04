import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import'../lib/collections.js';


function data()
{
  return Images;
}
Meteor.methods({
  add_image:function(img_src,img_alt )
  {
    Images.insert(
      {
      img_src:img_src,
      img_alt:img_alt,
      createdOn: new Date()
      }
  );   
    
  
  },
  hello:function()
  {
    console.log("ciao user!")
    return data();
  },
  asyncJob: function() {
  
    // Set up a future
    var fut = new Future();

    // This should work for any async method
    setTimeout(function() {

      // Return the results
      fut.ret(Images);

    }, 3 * 1000);

    // Wait for async to finish before returning
    // the result
    return fut.wait();
  },
});

var variableData = function()
{
return Images;
};
module.exports.Images; 

Meteor.startup(() => {
  // code to run on server at startup
  console.log(Images);
    console.log("sono il servitore");

    if(Images.find().count()==0)
    {
      for(var i=1;i<=3;i++)
      {
                 Images.insert(
            {
            img_title:"galaxy"+i+".jpg",
            img_src:"galaxy"+i+".jpg",
            img_alt:"other galaxy"
            }
        );   
      }
    
    
      
    }
    
    else{
      console.log(Images.find().count());
    
    }
    });
    
