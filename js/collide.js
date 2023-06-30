AFRAME.registerComponent("key-collide",{
    schema: {
        elementId: {type: "string", default: "#key0"}
    },

    update: function(){
        this.isCollided(this.data.elementId);
    },

    isCollided: function(elementId){
        const ele = document.querySelector(elementId);

        ele.addEventListener("collide", () => {
            if(elementId.includes("#key")){
                ele.setAttribute("visible", false);
                console.log("collide")
            }
        });
    }
})