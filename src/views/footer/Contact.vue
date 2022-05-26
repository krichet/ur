<template>
    <div class="container py-5">
        <div class="centContDiv">
            <img src="/img/_n.gif" width="440px" height="1" alt="">
            <div class="titleTxt1">Contact Us</div>
            <div class="DotDiv"></div>
            <p class="sp">
                <span class="vera14">
                    UniqueRewards is always open to your ideas, suggestions, and comments. Please write us with any question you
                    have. We will be happy to get your feedback!
                    <br><br>
                    You can always ask your questions or chat with our other members on our <a
                        href="https://www.facebook.com/UniqueRewards?sk=wall" target="_new">Facebook page</a>.
                </span></p>
            <p class="sp">
            </p>
            <form 
                name="form" 
                action="" 
                method="post" 
                id="contact-form"
                @submit.prevent="sendForm()"
            >
                <input name="cmd" type="hidden" value="msgtosup">
                <input name="uid" type="hidden" value="">
                <div class="form-group my-2">
                    <p>Name</p>
                    <input name="name" class="form-control" type="text" value="">
                </div>
                <div class="form-group my-2">
                    <p>E-mail</p>
                    <input name="email" class="form-control" type="text" value="">
                </div>
                <div class="form-group my-2">
                    <p>Comment</p>
                    <textarea name="comment" class="form-control-textarea" cols="50" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <input name="submite" type="submit" value="Submit" class="button button_orange button_big m-2">
                    <input name="clear" type="reset" value="Clear" class="button button_big m-2">
                </div>
            </form>
            <p class="sp">
                <span class="vera14">
                    We will answer you promptly. You will receive qualitative and complete answers.
                </span></p>
            <p class="sp">
            </p>
            <ul>
                <li><b>By E-mail:</b>&nbsp;&nbsp;<a href="mailto:support@uniquerewards.com">support@uniquerewards.com</a>
                </li>
                <li><b>ICQ:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 273-713-331
                </li>
                <li><b>Yahoo! ID:</b> uniquerewards_team
                </li>
                <li><b>Address:</b>&nbsp;&nbsp;&nbsp;&nbsp;UniqueRewards LP<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85
                    Great Portland Street<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First
                    Floor, London<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W1W
                    7LT<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;United
                    Kingdom<br>
                </li>
            </ul>
        
        
            <!-- /CENTER -->
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        sendForm(){}
    }
}
</script>

<style lang="scss" scoped>
    p{
    color: #444;
}

li{
    font-size: 14px;
    line-height: 22px;
    padding: 5px 0 ;
    font-weight: 300;
}

a:not[name=top]{
    color: #01b0f9;
}

A:hover {
    COLOR: #E56000  !important;
    text-decoration: underline;
}
A:visited {
    COLOR: #0055CB  !important;
    text-decoration: underline;
}
A:link {
    COLOR: #0055CB  !important;
    text-decoration: underline;
}

.titleTxt1 {
    height: 45px;
    padding-left: 5px;
    font-size: 24px;
    font-weight: bold;
    color: #0A5766;
}

.treb16b {
    font-size: 16px;
    font-weight: bold;
}

.treb18b {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
}

.green {
    color: #0A5766;
}

UL.sp6 {
    margin: 26px 0px 0px 0px;
    padding: 0px;
}

UL.testim {
    list-style-image: url(/img/point.gif);
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 10px;
    padding-bottom: 0px;
    padding-left: 20px;

    li{
        margin: 7px 0;
    }


    A.faq {
        font-size: 14px;
        color: #0A5766 !important;
        font-family:'Ubuntu';
        font-weight: 300;
    }

    A:visited {
        COLOR: #0055CB;
        text-decoration: underline;
    }

    A:link {
        COLOR: #0055CB;
        text-decoration: underline;
    }

}

DIV.DotDiv {
    margin: 20px 0;
    height: 1px;
    font-size: 1px;
    background-image: url(/img/dot.gif);
    background-repeat: repeat-x;
}

#contact-form{
    width: 50%;
    margin: 0 auto;
}

.centContDiv{
        padding: 0;
    }

@media (max-width: 899px){
    .centContDiv{
        padding: 0 15px;
    }

    #contact-form{
        width: 100%;
    }
}
</style>