$( document ).ready(function() {
    $("#toggle").click(function toggleInformation() {
            var info = $("#info");
            info.slideToggle();
        });
        
        var isEnlarged = false;

        $("#animate").click(function() {
            var resume = $(".resume");
            var body = $(".body");
            
            if (isEnlarged) {
                resume.animate({ fontSize: "18px" }, "slow");
                body.animate({ fontSize: "18px" }, "slow");
            } else {
                resume.animate({ fontSize: "24px" }, "slow");
                body.animate({ fontSize: "24px" }, "slow");
            }
            
            // Toggle the state
            isEnlarged = !isEnlarged;
        });
    
    });