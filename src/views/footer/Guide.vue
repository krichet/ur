<template>
    <div class="container py-5">
        <div class="centContDiv">
            <img src="/img/_n.gif" width="440px" height="1" alt="">
            <p>
                <!-- pageTitle -->
                <!-- /pageTitle -->

                <span class="treb18b green">
                </span></p>
            <div class="h2 green">HOW TO START</div>

            <p class="sp25">
                <span class="vera14">
                </span></p>
            <li>Sign up on our website by clicking 
                <router-link :to="{name: 'register'}">Sign Up button</router-link>.
                <p class="sp">
                </p>
            </li>
            <li>Fill out the form and click Continue button.
                <p class="sp">
                </p>
            </li>
            <li>Select offers that you are interested in and click Finish button.
                <p class="sp">
                </p>
            </li>
            <li>Then open Confirmation E-mail in your Inbox and click confirmation link.
                <p class="sp">
                </p>
            </li>
            <li>After that you may log into your account and earn real cash!
                <p class="sp25">
                    Listed below are the ways you can earn money with us:
                </p>
                <p class="sp25">
                    <span class="treb18b green">Get Cash Back for Shopping Online!</span>
                </p>
                <p class="sp">
                    Shop your favorite stores and get cash back for your purchases.<br>
                    Get great deals from hundreds of merchants! <br>
                    Combine online coupons plus a cashback rebate and you SAVE BIG money with us! <br>
                    Each purchase you make at a UniqueRewards' store will earn you up to 50% cash-back on every dollar
                    you spend!
                </p>
                <p class="sp25">
                    <span class="treb18b green">Try brand name products for Free!</span>
                </p>
                <p class="sp">
                    As a member of UniqueRewards, you can save money on name brand products or just try them for free!
                    Learn about products, save money on items you've always wanted or simply try before you buy.
                    Plus, as a member, you'll also get paid just for trying offers!
                </p>
                <p class="sp">
                    There are hundreds of offers to choose from including online and financial services, career and
                    employment, educational, health and beauty, entertainment, dating and much more.
                </p>
                <p class="sp25">
                    <span class="treb18b green">Get Paid to take online surveys!</span>
                </p>
                <p class="sp">
                    Influence the products of tomorrow by giving your opinion today with paid surveys. Simply visit
                    UniqueRewards and participate in the free online surveys and get paid to take surveys!
                </p>
                <p class="sp25">
                    <span class="treb18b green">Earn money just by clicking!</span>
                </p>
                <p class="sp">
                    Go to Click Cash section, select any offer you are interested in, click on it, visit website and
                    receive $0.01 for it! Visit each website once a day and get some cash every day!
                </p>
                <p class="sp25">
                    We do not allow to use third party software to click the offers.
                </p>
                <p class="sp25">
                    <span class="treb18b green">Get Paid for Reading Emails!</span>
                </p>
                <p class="sp">
                    Like most people, you probably check your email many times a day - taking interest in some and
                    deleting others. As a member of UniqueRewards, you'll only receive emails with special offers you're
                    likely to be interested in. It's a fun and easy way to get great deals on products and services.
                    Plus, you'll get paid to read emails!<br>
                    We pay $0.01 if you just click on email and visit advertising website!
                </p>
                <p class="sp25">
                    <span class="treb18b green">Get paid for watching videos!</span>
                </p>
                <p class="sp">
                    You can earn cash for watching videos. The way you get paid to watch
                    videos is just watching the video. It is very simple. Watch each video
                    once a day and get $0.01 for each video watching.
                </p>
                <p class="sp25">
                    <span class="treb18b green">Earn cash by listening to the radio!</span>
                </p>
                <p class="sp">
                    As a member of UniqueRewards, you can earn cash while listening to the
                    radio. Enjoy your favorite music and get paid.
                    Enter a Captcha every 30 minutes and earn $0.03 (if you are from U.S.)
                    each time the captcha is entered. British and Canadian users earn
                    $0.01 each time the Captcha is entered.
                </p>
                <p class="sp">
                    To complete the radio offer successfully you should have the latest
                    versions of Adobe Flash Player and browser.
                </p>
                <p class="sp25">
                    <span class="treb18b green">Earn cash by completing surveys/offers via OfferWalls!</span>
                </p>
                <p class="sp">
                    It's easy and quick to earn more cash completing some surveys/offers.
                </p>
                <p class="sp25">
                    <span class="treb18b green">Get paid for playing games!</span>
                </p>
                <p class="sp">
                    It's the easiest way to earn cash, besides you can have fun. Enjoying a wide range of games,
                    including mahjongg, sudoku, bridge, outspell, daily crossword, solitaire arcade and a great number
                    of others, you can plunge into them and get paid for your time!
                </p>
                <p class="sp25">

                </p>
            </li>
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