<template>
  <div id="app-content">
    <div class="loader" v-if="$store.state.base.preloader">
      <div class="loader__icon-load"></div>
    </div>
    <div class="main-wrapper">
      <Header></Header>
      <main class="content bg-cont">
        <router-view></router-view>
      </main>
      <Footer></Footer>
    </div>
    <Login></Login>
  </div>
</template>

<script>
import Header from "components/layout/Header"
import Footer from "components/layout/Footer"

export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="scss">

  button{
    outline: none !important;
    &:active{
      outline: none !important;
    }
  }

  a{
    text-decoration: none;
    &:hover{
      text-decoration: none!important;
    }
  }

  .disabled{
    opacity: .5;
    pointer-events: none;
  }

  .form-control,
  .custom-select{
    box-shadow: none!important;
    height: 48px!important;
    border: 1px solid #e5e5e5!important;
    font-size: 16px;
    line-height: 18px;
    padding: 14px 40px 14px 20px;
    color: #7c8a96;
    border-radius: 24px!important;
    z-index: 2;
    padding-right: 10px;
    width: 100%;
    outline: none;
    font-weight: 300;
    &:focus{
      outline: none;
    }

    option{
      font-weight: 300;
    }
  }

  .invalid-feedback{
    font-size: 100%!important;
  }

  .box-field__label{
    .color{
      color: #ed1c24 !important;
    }  
  }

  .list-checkbox__label{
        &:before{
            display: none;
        }
    }

  .custom-control-label{
    font-size: 16px;
    color: #36454e;
    line-height: 19px;
    font-weight: 300;
  }

  .box-field__label{
    font-weight: 300;
  }

  .search-block{
  
    position: relative;

    .remove-search-data{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;

    }

  }


  .form-control-textarea {
    box-shadow: none !important;
    border: 1px solid #e5e5e5 !important;
    font-size: 16px;
    line-height: 18px;
    padding: 14px 40px 14px 20px;
    color: #7c8a96;
    border-radius: 24px !important;
    z-index: 2;
    padding-right: 10px;
    width: 100%;
    outline: none;
    font-weight: 300;
}


.modal-close{
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    color: white;
    filter: drop-shadow(0px 2px black);
  }


</style>
