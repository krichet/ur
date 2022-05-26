<template>
    <div class="container py-5">
        <div class="centContDiv">
            <!-- <img src="/img/_n.gif" width="440px" height="1" alt=""> -->
            <div class="titleTxt1">About Us</div>
            <div class="DotDiv"></div>
            <p class="sp">
            <table border="0" width="100%" cellpadding="0" cellspacing="0">
                <tbody>
                    <tr>
                        <!-- <td valign="top"><img src="/img/aboutus1.png" border="0"></td> -->
                        <td width="20"></td>
                        <td>
                            <span class="vera14">
                                UniqueRewards is an effective and fascinating way to earn some extra cash without leaving your
                                home. We've been in business since 2003 and have proven our loyalty, reliability and first-class
                                support to our members.
                                <p class="sp">
                                </p>
                                <div class="treb18b green">Our advantages:</div>
                                <p class="sp">
                                    <span class="vera14">
                                    </span></p>
                                <li> quick and effective customer support
                                </li>
                                <li> a great variety of always new offers and surveys
                                </li>
                                <li> a wide range of coupons for a great variety of goods
                                </li>
                                <li> weekly payments via both PayPal and check
                                </li>
                                <li> free contests with highly rewarding prizes
                                </li>
                                <li> a beneficial referral system
                                </li>
                                <li> Facebook integration. You can share your referral link via F-share
                                    function easily
                                </li>
                                <li> a unique Click Cash Section. Get $0.01 just for 1 click
                                </li>
                                <li> a wide range of ways to earn. You will get cash for taking surveys online, completing
                                    offers, reading emails, visiting websites and shopping online
                                </li>
                                <li> our members receive their online rewards only in cash
                                    <p class="sp">
                                        <span class="vera14">
                                            Our members can always find something special that works for them.&nbsp;
                                                <router-link :to="{name: 'register'}">Join us</router-link>
                                        </span></p>
                                    <p class="sp">
                                        <span class="vera14">
                                            Please don't hesitate to <router-link :to="{name: 'contact'}">contact</router-link> us if you have any
                                            questions.
                                        </span></p>
                                </li>
                            </span></td>
                        <td width="20"></td>
                    </tr>
                </tbody>
            </table>
            </p>
            <p class="sp">
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <!-- /CENTER -->
        </div>
    </div>
</template>
<script>
    export default {

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

.centContDiv{
        padding: 0;
    }

@media (max-width: 899px){
    .centContDiv{
        padding: 0 15px;
    }
}

</style>