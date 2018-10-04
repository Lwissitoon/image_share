if(Meteor.isServer){
Meteor.startup(function(){
    if(Images.find().count()==0)
    {
        Images.insert(
            {
            img_src:"galaxy.jpg",
            img_alt:"other galaxy",
            img_name:"Find yourself",
            img_desc:"Man watching the sky"
            }
        );
    }
});
}