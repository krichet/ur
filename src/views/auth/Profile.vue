<template>
    <div>    
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white main-cont__white_with-column clearfix">
                    <div class="line-main-title text-center">
                        <h1 class="main-title">Profile</h1>
                    </div>
                    <div class="clearfix block-form-cont">
                        <div class="main-cont__right2">
                            <div class="box-profile">
                                <div class="box-profile__img"><img :src="`${this.user.avatar ? this.user.avatar : this.user.avatarDefault}`" alt="" class="box-profile__avatar"></div>
                                <div class="box-profile__buttons"><label
                                        for="_u_id_e9t3x8sm08a197e7vcrdi0h1-image-input"
                                        class="button button_orange button_big"><input type="file"
                                            id="_u_id_e9t3x8sm08a197e7vcrdi0h1-image-input" style="display: none;" @change="uploadAvatar">
                                        Upload
                                    </label><button type="button" class="button button_big button__remove" @click="removeAvatar" :class="[this.user.avatar ? '' : 'disabled']">Remove</button></div>
                                <p>Вы можете добавить своё фото или картинку в качестве аватара</p>
                            </div>
                        </div>
                        <div class="main-cont__left">
                            <form class="mx-auto mt-5" @submit.prevent="submit()">
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">First Name:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <input type="text" class="form-control" v-model="form.fname.value">
                                        <div :class="{ 'invalid-feedback d-block': form.fname.verified === 'no' }"
                                            v-text="form.fname.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">Last Name:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <input type="text" class="form-control" v-model="form.lname.value">
                                        <div :class="{ 'invalid-feedback d-block': form.lname.verified === 'no' }"
                                            v-text="form.lname.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">Country:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <select class="custom-select" v-model="form.country.value"
                                            @change="getStates($event.target.value)">
                                            <option selected disabled value="">Choose country ...</option>
                                            <option v-for="country in countryList" :value="country.CountryCode"
                                                v-text="country.CountryName">
                                            </option>
                                        </select>
                                        <div :class="{ 'invalid-feedback d-block': form.country.verified === 'no' }"
                                            v-text="form.country.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">Address:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <input type="text" class="form-control" v-model="form.street.value">
                                        <div :class="{ 'invalid-feedback d-block': form.street.verified === 'no' }"
                                            v-text="form.street.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">City:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <input type="text" class="form-control" v-model="form.city.value">
                                        <div :class="{ 'invalid-feedback d-block': form.city.verified === 'no' }"
                                            v-text="form.city.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label box-field__label_top">State/Province/
                                            County:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <select class="custom-select" v-model="form.state.value">
                                            <option selected disabled value="" v-if="form.country.value === 'GB'">Chose
                                                county ...</option>
                                            <option selected disabled value="" v-else-if="form.country.value === 'CA'">
                                                Chose province ...</option>
                                            <option selected disabled value="" v-else-if="form.country .value=== 'US'">
                                                Chose state ...</option>
                                            <option selected disabled value="" v-else="form.country.value === ''">
                                            </option>
                                            <option v-for="state in statesList" :value="state.id"
                                                v-text="state.StateName">
                                            </option>
                                        </select>
                                        <div :class="{ 'invalid-feedback d-block': form.state.verified === 'no' }"
                                            v-text="form.state.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">Zip/Postal code:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <input type="text" class="form-control" v-model="form.zip.value">
                                        <div :class="{ 'invalid-feedback d-block': form.zip.verified === 'no' }"
                                            v-text="form.zip.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">Phone:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <input type="text" class="form-control" v-model="form.phone.value">
                                        <div :class="{ 'invalid-feedback d-block': form.phone.verified === 'no' }"
                                            v-text="form.phone.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">Gender:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <select class="custom-select" v-model="form.gender.value">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <div :class="{ 'invalid-feedback d-block': form.gender.verified === 'no' }"
                                            v-text="form.gender.errorMsg"></div>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">Birth Date:</label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <div class="row">
                                            <div class="col-12 col-lg-4 mb-3 text-left">
                                                <select class="custom-select" v-model="birthDate.day">
                                                    <option selected disabled value="">Day</option>
                                                    <option v-for="i in (1, 31)" :value="i" v-text="i"></option>
                                                </select>
                                            </div>
                                            <div class="col-12 col-lg-4 mb-3 text-left">
                                                <select class="custom-select" v-model="birthDate.month">
                                                    <option selected disabled value="">Month</option>
                                                    <option v-for="month, i in months" :value="i" v-text="month">
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-12 col-lg-4 mb-3 text-left">
                                                <select class="custom-select" v-model="birthDate.year">
                                                    <option selected disabled value="">Year</option>
                                                    <option v-for="i in range(1900, ( new Date().getFullYear() - 13 ) )"
                                                        :value="i" v-text="i"></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div :class="{ 'invalid-feedback d-block': form.bdate.verified === 'no' }"
                                        v-text="form.bdate.errorMsg"></div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="d-flex align-items-center col-12 col-md-3 text-left">
                                        <label class="box-field__label">E-mail: </label>
                                    </div>
                                    <div class="col-12 col-md-9 text-left">
                                        <input type="email" class="form-control" v-model="form.email.value">
                                        <div :class="{ 'invalid-feedback d-block': form.email.verified === 'no' }"
                                            v-text="form.email.errorMsg"></div>
                                    </div>
                                </div>
                                <ul class="list-checkbox my-4">
                                    <li class="list-checkbox__item">
                                        <div class="d-flex custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" class="custom-control-input" id="registerConditions1"
                                                v-model="form.optin.value" true-value=1 false-value=''>
                                            <label class="text-left d-flex align-items-center pl-3 custom-control-label"
                                                for="registerConditions1">Yes, I want to receive Special Cash Offers /
                                                Surveys by e-mail</label>
                                        </div>
                                    </li>
                                    <li class="list-checkbox__item">
                                        <div class="d-flex custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" class="custom-control-input" id="registerConditions2"
                                                v-model="form.optin1.value" true-value=1 false-value=''>
                                            <label class="text-left d-flex align-items-center pl-3 custom-control-label"
                                                for="registerConditions2">Yes, I want to receive Special Shoping Offers
                                                by e-mail</label>
                                        </div>
                                    </li>
                                    <li class="list-checkbox__item">
                                        <div class="d-flex custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" class="custom-control-input" id="registerConditions3"
                                                v-model="form.notif.value" true-value=1 false-value=''>
                                            <label class="text-left d-flex align-items-center pl-3 custom-control-label"
                                                for="registerConditions3">Yes, I want to receive Auto Cash Notifications
                                                via e-mail when I complete</label>
                                        </div>
                                    </li>
                                </ul>
                            </form>
                            <div v-if="message.success">
                                <h2 class="text-success text-center pt-3 pb-5">{{message.success}}</h2>
                            </div>
                            <div class="profile__buttons">
                                <button 
                                    type="button" 
                                    class="button button_orange button_big"
                                    @click.prevent="changePasswordModal()"
                                >Change Password</button>
                                <button 
                                    type="button" 
                                    class="button button_big" 
                                    @click.prevent="updateProfileModal()"
                                >Update
                                    Profile Info</button>
                                <button 
                                    type="button" 
                                    class="button button_big bg-danger"
                                    @click.prevent="$modal.show('delete-profile')"
                                >Delete profile</button>
                            </div>
                        </div>
                    </div>
                    <div class="box-after-form clearfix">
                        <div class="main-cont__left">
                            <div class="one-block-product" id="hot-offers">
                                <div class="line-main-title">
                                    <h1 class="main-title">Hot Offers/ Surveys:</h1>
                                </div>
                                <form 
                                    class="search my-4"
                                >
                                    <label class="search__label">Search:</label>
                                    <div class="search__field">
                                        <div class="search-block">
                                            <input 
                                              type="text" 
                                              class="standart-input" 
                                              placeholder="Enter keywords"
                                              v-model="requestData.hotOffers.name"
                                            >
                                            <a 
                                              href="#" 
                                              class="remove-search-data text-muted" 
                                              v-if="requestData.hotOffers.name"
                                              @click.prevent="clearSearchForm('#hot-offers','hotOffers')"
                                            ><i class="fa fa-2x fa-times"></i></a>
                                        </div>
                                    </div>
                                    <input 
                                      type="submit" 
                                      class="button button_big search_button" 
                                      value="Find"
                                      :class="{disabled: !requestData.hotOffers.name}" 
                                      :disabled="!requestData.hotOffers.name"
                                      @click.prevent="sendSearchForm('#hot-offers','hotOffers')"
                                    >
                                </form>
                                <div 
                                    class="filter d-flex align-items-center justify-content-end py-3"
                                    v-if="hotOffers.length !== 0"
                                >
                                    <div class="filter__section d-flex align-items-center">
                                        <p class="filter__label pr-4">Filter:</p>
                                        <select 
                                        class="form-control"
                                        @change="getOffersCat($event.target.value,'#hot-offers','hotOffers')"
                                        >
                                        <option 
                                            v-for="item in sortBy"
                                            :value="item.sort"
                                            v-text="item.name"
                                            :selected="item.selected"
                                            ></option>
                                        </select>
                                    </div>
                                    <div class="filter__section d-flex align-items-center">
                                        <p class="filter__label">Items per page:</p>
                                        <ul class="select-number-views">
                                            <li 
                                            class="select-number-views__item"
                                            v-for="offerNav in offerNavs"
                                            :class="{ active: offerNav.active, disabled: offerNav.disabled }"
                                            @click.prevent="getOffersNav(offerNav, '#hot-offers','hotOffers')"
                                            >
                                                <a 
                                                href="#" 
                                                class="select-number-views__link"
                                                v-text="offerNav.label"
                                                ></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 v-if="hotOffers.length === 0" class="m-4">No Offers</h3>
                                <div v-else>
                                    <Offer :offers="hotOffers"></Offer>
                                    <div class="text-center">
                                        <button 
                                            class="button button_big"
                                            :class="{'disabled': paginationButtonDisabled}"
                                            :disabled="paginationButtonDisabled"
                                            v-if="paginationButtonVisibility"
                                            @click.prevent="paginateOffers('#hot-offers','hotOffers')"
                                        >Show more offers</button>
                                    </div>
                                </div>
                            </div>
                            <div class="one-block-product" id="featured-offers">
                                <div class="line-main-title">
                                    <h2 class="main-title">Featured Offers</h2>
                                </div>
                                <h3 v-if="featuredOffers.length === 0" class="m-4">No Offers</h3>
                                <div v-else>
                                    <Offer :offers="featuredOffers"></Offer>
                                    <div class="text-center d-none">
                                        <a href="#" class="button button_big">Show more offers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="main-cont__right hide-tablet"><a href="#"
                                class="box-social-group box-social-group_top"><img src="img/facebook.png" alt=""></a><a
                                href="#" class="box-social-group"><img src="img/twitter.png" alt=""></a></div>
                    </div>
                </div>
            </div>
        </div>
        <Modal name="change-password" :adaptive="true" height="100%">
            <div class="p-5 d-flex justify-content-center align-item-center flex-column text-center position-relative">
                <h3>Pin code to change your password has been sent to your email. Please, enter data below</h3>
                <h4 
                    class="text-danger py-2" 
                    v-if="message.error"
                    v-text="message.error"
                ></h4>
                <div class="col-12 text-left mt-3">
                    <p>Old password</p>
                    <input 
                        :type="!passwordForm.pwd.show ? 'password' : 'text'" 
                        placeholder="Old password"
                        v-model.trim="passwordForm.pwd.value"
                        class="form-control"
                    >
                     <div :class="{ 'invalid-feedback d-block': passwordForm.pwd.verified === 'no' }" v-text="passwordForm.pwd.errorMsg"></div>
                     <a 
                        href="#" 
                        class="show-hide-password text-muted"
                        @click.prevent="passwordForm.pwd.show = !passwordForm.pwd.show"
                    ><i 
                        class="fas"
                        :class="!passwordForm.pwd.show ? 'fa-eye-slash' : 'fa-eye'"
                    ></i></a>                    
                </div>
                <div class="col-12 text-left mt-3">
                    <p>New password</p>
                    <input 
                        :type="!passwordForm.newpwd.show ? 'password' : 'text'" 
                        placeholder="New password"
                        v-model="passwordForm.newpwd.value"
                        class="form-control"
                    >
                    <div :class="{ 'invalid-feedback d-block': passwordForm.newpwd.verified === 'no' }" v-text="passwordForm.newpwd.errorMsg"></div>
                    <a 
                        href="#" 
                        class="show-hide-password text-muted"
                        @click.prevent="passwordForm.newpwd.show = !passwordForm.newpwd.show"
                    ><i 
                        class="fas"
                        :class="!passwordForm.newpwd.show ? 'fa-eye-slash' : 'fa-eye'"
                    ></i></a>
                </div>
                <div class="col-12 text-left mt-3">
                    <p>Confirm new password</p>
                    <input 
                        :type="!passwordForm.newpwd2.show ? 'password' : 'text'" 
                        placeholder="New password"
                        v-model="passwordForm.newpwd2.value"
                        class="form-control"
                    >
                    <div :class="{ 'invalid-feedback d-block': passwordForm.newpwd2.verified === 'no' }" v-text="passwordForm.newpwd2.errorMsg"></div>
                    <a 
                        href="#" 
                        class="show-hide-password text-muted"
                        @click.prevent="passwordForm.newpwd2.show = !passwordForm.newpwd2.show"
                    ><i 
                        class="fas"
                        :class="!passwordForm.newpwd2.show ? 'fa-eye-slash' : 'fa-eye'"
                    ></i></a>
                </div>
                <div class="col-12 text-left mt-3">
                    <p>Pin code</p>
                    <input 
                        type="text" 
                        placeholder="Pin"
                        v-model.trim="PIN"
                        class="form-control"
                    >
                </div>
                <div class="pt-5 d-flex justify-content-center align-item-center flex-row">
                    <button 
                        class="button mx-3" 
                        :class="{'disabled': !PIN || buttons.update !== 'enabled'}"
                        @click.prevent="changePassword()"
                        :disabled="!PIN || buttons.update !== 'enabled'"
                    >Update</button>
                    <button 
                        class="button mx-3" 
                        @click.prevent="
                            $modal.hide('change-password'), 
                            passwordForm.reset(), 
                            PIN = ''"
                        >Cancel</button>
                </div>
                <a 
                    href="#"
                    class="modal-close text-muted"
                    @click="
                        $modal.hide('change-password'),
                        passwordForm.reset(), 
                        PIN = ''"
                ><i class="fa fa-2x fa-times"></i></a>
            </div>
        </Modal>
        <Modal name="update-profile" :adaptive="true">
            <div class="p-5 d-flex justify-content-center align-item-center flex-column text-center position-relative">
                <h3>Pin code to update your profile has been sent to your email. Please, enter it to the field below and click Update</h3>
                <h4 
                    class="text-danger py-2" 
                    v-if="message.error"
                    v-text="message.error"
                ></h4>
                <input 
                    type="text" 
                    placeholder="pin"
                    v-model.trim="PIN"
                    class="form-control mt-5"
                >
                <div class="pt-5 d-flex justify-content-center align-item-center flex-row">
                    <button 
                        class="button mx-3" 
                        :class="{'disabled': !PIN || buttons.update !== 'enabled'}"
                        @click.prevent="updateProfile()"
                        :disabled="!PIN || buttons.update !== 'enabled'"
                    >Update</button>
                    <button 
                        class="button mx-3" 
                        @click.prevent="
                            $modal.hide('update-profile'), 
                            PIN = ''"
                    >Cancel</button>
                </div>
                <a 
                    href="#"
                    class="modal-close text-muted"
                    @click="
                        $modal.hide('update-profile'),
                        PIN = ''"
                ><i class="fa fa-2x fa-times"></i></a>
            </div>
        </Modal>
        <Modal name="delete-profile" :adaptive="true">
            <div class="p-5 d-flex justify-content-center align-item-center flex-column text-center position-relative">
                <h1>Your profile data will be deleted</h1>
                <div class="pt-5 d-flex justify-content-center align-item-center flex-row">
                    <button class="button mx-3" @click.prevent="deleteProfile()">Yes</button>
                    <button class="button mx-3" @click.prevent="$modal.hide('delete-profile')">No</button>
                </div>
                <a 
                    href="#"
                    class="modal-close text-muted"
                    @click="$modal.hide('delete-profile')"
                ><i class="fa fa-2x fa-times"></i></a>
            </div>
        </Modal>
    </div>
</template>
<script>
    import Fingerprint from 'fingerprintjs'
    import {Validation} from 'utils/validation'
    import {months} from '@/utils/months'
    import {mapGetters} from 'vuex'
    import range from 'lodash/range'
    import {offers} from 'mixins/offers'
    export default {
        mixins: [offers],
        data() {
            return {
                avatar: null,
                PIN: '',
                validation: new Validation(),
                countryList: [],
                statesList: [],
                months,
                birthDate: {
                    day: '',
                    month: '',
                    year: ''
                },
                buttons: {
                    delete: 'enabled',
                    update: 'enabled',
                    changePwd: 'enabled',
                },
                message: {
                    error: '',
                    success: '',
                    reset(){
                        this.error = ''
                        this.success = ''
                    }
                },
                form: {
                    email: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending', // pending - валидация не проводилась (ожидание), yes - проведена успешно, no - ошибка валидации
                    },
                    fname: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    lname: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    country: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    street: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    city: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    state: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    zip: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    phone: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    web: {
                        value: '',
                        required: false,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    gender: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    bdate: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    'optin': {
                        value: '',
                        required: false,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    'optin1': {
                        value: '',
                        required: false,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    'notif': {
                        value: '',
                        required: false,
                        errorMsg: '',
                        verified: 'pending',
                    },
                    'conditions': {
                        value: '1',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                    }
                },
                passwordForm: {
                    pwd: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                        show: false
                    },
                    newpwd: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                        show: false
                    }, 
                    newpwd2: {
                        value: '',
                        required: true,
                        errorMsg: '',
                        verified: 'pending',
                        show: false
                    },
                    reset(){
                        Object.keys(this).forEach(key => {
                            this[key].value = ''
                            this[key].errorMsg = ''
                            this[key].verified = 'pending'
                            this[key].show = false
                        })
                    }         
                },
                requestData: {
                    hotOffers: {
                        type: 4,
                        ipp: 20,
                        page: 1,
                        sort: 0,
                        category: 0,
                        name: '',
                    },
                    featuredOffers: {
                        type: 5,
                        ipp: 20,
                        page: 1,
                        sort: 0,
                        category: 0,
                        name: '',
                    }
                },
                hotOffers: [],
                featuredOffers: [],
            }
        },
        computed: {
            ...mapGetters(['user'])
        },
        methods: {

            uploadAvatar(input) {
               
                let file = input.target.files[0]
                console.log(file)

                // make sure avata is in allowed format
                if (file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg') {
                    let reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = () => {
                        this.avatar.src = reader.result
                        this.user.avatar = reader.result
                        
                            axios
                                .post('/service/updateAvatar', {
                                    avatar: this.avatar.src                                    
                                })
                                .then(response => {
                                    const _response = JSON.parse(response.request.responseText)
                                    if (_response.error && _response.error === "0") { 
                                    
                                    console.log(response)

                                    }
                                },
                                reject => {
                                    if (reject.response) {              
                                        alert(reject.response.data.errorMessage)
                                    }
                                }      
                            )

                    }

                    reader.onerror = ()=> {
                        console.log(reader.error)
                    }

         

                }
                else {
                    alert('Allowed formats: png, jpg, jpeg')
                }
            },
            removeAvatar() {                

                let file = document.getElementById('_u_id_e9t3x8sm08a197e7vcrdi0h1-image-input')
                // clear uploaded file
                file.value = ''
                // clear avatar in store
                this.user.avatar = ''
                this.avatar.src = this.user.avatarDefault
                
                    axios
                        .delete('/service/updateAvatar', {
                            
                        })
                        .then(response => {
                            const _response = JSON.parse(response.request.responseText)
                            if (_response.error && _response.error === "0") { 
                            
                            console.log(response)

                            }
                        },
                        reject => {
                            if (reject.response) {              
                                alert(reject.response.data.errorMessage)
                            }
                        }      
                    )

            },            
            /*

            СПИСОК ШТАТОВ-ГРАФСТВ-ПРОВИНЦИЙ

            */
            getStates(country) {
                // console.log('form.country.value: ',this.form.country.value)
                axios
                    .post('/service/geoListStates', {
                        country
                    })
                    .then(
                        response => {
                            try {
                                // console.log('/service/config response: ',JSON.parse( response.request.responseText ) )
                                const _response = JSON.parse(response.request.responseText)
                                if (_response && _response.error === "0") {
                                    this.statesList = _response.result

                                    // console.log('this.statesList: ',this.statesList )
                                }
                            } catch (e) {
                                console.log('RESPONSE PARSING ERROR: ', e.message)
                            }
                        },
                        reject => {
                            if (reject.response) {
                                console.log('REJECTED /service/geoListStates')
                                console.log(reject.response.data)
                                console.log(reject.response.status)
                                console.log(reject.response.headers)
                            }
                        }
                    )
            },
            range: (from, to) => range(from, to),
            makeProperDate() {
                let day = String(this.birthDate.day).length === 1 ? ('0' + this.birthDate.day) : this.birthDate.day
                let month = String(this.birthDate.month).length === 1 ? ('0' + this.birthDate.month) : this.birthDate.month
                this.form.bdate.value = `${this.birthDate.year}-${month}-${day}`
            },
            makeProperDateReverse(day,month,year){
                this.birthDate.day = day
                this.birthDate.month = month
                this.birthDate.year = year
            },
            updateProfileModal(){

                this.message.reset()

                this.makeProperDate()
                this.validation.check(this.form)   
                   
                if (this.validation.status === 'done') {

                    this.$modal.show('update-profile')
                    this.sendPin(1)

                }
                
            },
            changePasswordModal(){

                this.message.reset()
                this.sendPin(2)
                this.$modal.show('change-password')

            },
            changePassword(){

                this.validation.check(this.passwordForm)   
                   
                if (this.validation.status === 'done') {

                    this.buttons.changePwd = 'disabled'

                    let data = Object.keys( this.passwordForm ).reduce((acc,key) => {
                        acc[key] = this.passwordForm[key].value
                        return acc
                    },{})

                    data.pin = this.PIN

                    axios
                        .post('/service/changePassword', data)
                        .then(
                            response => {
                                try {
                                    const _response = JSON.parse(response.request.responseText)
                                    console.log('/service/changePassword _response: ',_response)
                                    if (_response && _response.error === "0") {
                                        this.message.success = "Your password's changed!"
                                        this.passwordForm.reset()
                                        this.$modal.hide('change-password')
                                    }else{
                                        this.message.error = _response.error_message
                                    }
                                } catch (e) {
                                    console.log('RESPONSE PARSING ERROR: ', e.message)
                                    this.message.error = 'Some error. Please, reload page and try again'
                                }
                            })
                        .catch(reject => {
                                if (reject.response) {
                                    console.log('REJECTED /service/changePassword')
                                    console.log(reject.response.data)
                                    console.log(reject.response.status)
                                    console.log(reject.response.headers)
                                }
                                this.message.error = 'Some error. Please, reload page and try again'
                            }
                        )
                        .finally(()=>{
                                this.buttons.changePwd = 'enabled'
                                this.PIN = ''
                        })             

                }
            },
            sendPin(type){
                axios
                    .post('/service/sendPin',{action: type})
                    .then(
                        response => {
                            try {
                                const _response = JSON.parse(response.request.responseText)
                            } catch (e) {
                                console.log('RESPONSE PARSING ERROR: ', e.message)
                            }
                        },
                        reject => {
                            if (reject.response) {
                                console.log('REJECTED /service/sendPin')
                                console.log(reject.response.data)
                                console.log(reject.response.status)
                                console.log(reject.response.headers)
                            }
                        }
                    )
            },
            updateProfile() {
              
                    let newData = Object.keys(this.form).reduce((acc,key) => {
                        acc[key] = this.form[key].value
                        return acc
                    },{})

                    newData.pin = this.PIN
                    
                    this.$store.dispatch('updateUserData', newData)

                    this.buttons.update = 'disabled'
                
                    axios
                        .post('/service/updateProfile', newData)
                        .then(
                            response => {
                                try {
                                    const _response = JSON.parse(response.request.responseText)
                                    console.log('/service/updateProfile _response: ',_response)
                                    if (_response && _response.error === "0") {
                                        this.message.success = "Your profile's updated!"
                                        this.$modal.hide('update-profile')
                                    }else{
                                        this.message.error = _response.error_message
                                    }
                                } catch (e) {
                                    console.log('RESPONSE PARSING ERROR: ', e.message)
                                    this.message.error = 'Some error. Please, reload page and try again'
                                }
                            })
                        .catch(reject => {
                                if (reject.response) {
                                    console.log('REJECTED /service/updateProfile')
                                    console.log(reject.response.data)
                                    console.log(reject.response.status)
                                    console.log(reject.response.headers)
                                }
                                this.message.error = 'Some error. Please, reload page and try again'
                            }
                        )
                        .finally(()=>{
                                this.buttons.update = 'enabled'
                                this.PIN = ''
                        })



            },
            deleteProfile() {
                // const pwd = this.user.pwd
                // const pwd = '12qwQW'
                // console.log('pwd: ', pwd)
                axios
                    .post('/service/terminate', {
                        pwd
                    })
                    .then(
                        response => {
                            try {
                                // console.log('/service/config response: ',JSON.parse( response.request.responseText ) )
                                const _response = JSON.parse(response.request.responseText)
                                if (_response && _response.error === "0") {
                                    this.$store.dispatch('authentication', {status: false})
                                    this.$router.push("/")
                                }
                            } catch (e) {
                                console.log('RESPONSE PARSING ERROR: ', e.message)
                            }
                        },
                        reject => {
                            if (reject.response) {
                                console.log('REJECTED /service/terminate')
                                console.log(reject.response.data)
                                console.log(reject.response.status)
                                console.log(reject.response.headers)
                            }
                        }
                    )

            },
            getGeolistCountries(){
              axios
                .get('/service/geoListCountries')
                .then(
                    response => {
                        try {
                            const _response = JSON.parse(response.request.responseText)
                            if (_response && _response.error === "0") {
                                this.countryList = _response.result
                                this.getStates(this.user.country)
                            }
                        } catch (e) {
                            console.log('RESPONSE PARSING ERROR: ', e.message)
                        }
                    },
                    reject => {
                        if (reject.response) {
                            console.log('REJECTED /service/geoListCountries')
                            console.log(reject.response.data)
                            console.log(reject.response.status)
                            console.log(reject.response.headers)
                        }
                    }
                )
            }
        },
        mounted() {
            
            this.avatar = document.getElementsByClassName('box-profile__avatar')[0]

            // console.log('passwordForm: ',this.passwordForm)

            this.$store.dispatch('getUserData')
                .then(data => {
                    console.log('data: ',data)
                    // ЗАПОЛНЯЕМ ДАННЫМИ ФОРМУ
                    Object.keys(data).forEach(key => {
                        if(this.form.hasOwnProperty(key)){       
                            this.form[key].value = data[key]
                        }       
                    }) 
                    this.makeProperDateReverse(data.bdd,data.bdm,data.bdy)
                })

            this.getGeolistCountries()

            //  РАСШИРЯЕМ МИКСИНЫ ДЛЯ hot offers
            this.sortBy.push({sort: 4,name: 'Random',selected: false})
            this.offerNavs.unshift({label: '1',active: false,disabled: false,ipp: 1,},{label: '3',active: false,disabled: false,ipp: 3,},{label: '5',active: false,disabled: false,ipp: 5,})

            // ПОЛУЧАЕМ hotOffers
            this.getOffersAndSetClicks('#hot-offers','hotOffers')

            // ПОЛУЧАЕМ featuredOffers
            this.getOffersAndSetClicks('#featured-offers','featuredOffers')
        }
    }
</script>

<style lang="scss">
    .show-hide-password{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        right: 5%;
        font-size: 22px;
    }

    .modal-close{
        position: absolute;
        z-index: 10;
        top: 20px;
        right: 20px;
    }

    .box-profile__img img {
        width: 100%;
    }
</style>