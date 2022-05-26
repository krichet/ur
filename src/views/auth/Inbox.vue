<template>
    <div>
        <UserInfo/>
        <div class="wrapper wrapper_long">
            <AsideLeft/>
            <div class="main-cont">  
                <div class="main-cont__white">
                    <div class="line-main-title">
                        <div class="line-main-title__left">
                            <h1 class="main-title">Inbox</h1>                           
                        </div>
                        <div class="line-main-title__right">
                            <a href="#" class="button button_big">Mark as unread</a>
                            <a href="#" class="button button_big button_big_dark button_big_small-pad"><span class="icon-basket"></span></a>
                        </div>
                    </div>
                    <div class="table-history table-history_inbox">
                        <div class="tr">
                            <div class="th col_checkbox"></div>    
                            <div class="th col1">Subject</div>                           
                            <div class="th col3">Earn</div>
                            <div class="th col4">Date</div>
                        </div>
                        <div class="tr color">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr">
                            <div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr color">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr color">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr color">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr color">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                        <div class="tr">
                           	<div class="td col_checkbox"><div class="jq-checkbox styled" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;"><input type="checkbox" class="styled" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div></div>    
                            <div class="td"><div class="open-inf-tr">Test email message</div></div>                           
                            <div class="td col3"><p class="table-history__price">$0.35</p></div>
                            <div class="td col4">10.14.2015</div>
                        </div>
                        <div class="tr tr_inf">
                            <p>Maecenas vulputate dolor eget metus. Mauris sit amet mi. Sed elit. In eu est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus.</p>
                            <p>Malesuada, dui id venenatis lacinia, odio dolor convallis urna, a aliquet nibh mauris laoreet justo. Nullam et mauris. Pellentesque fermentum venenatis dui. Nullam gravida odio vel urna.</p>
                        </div>
                    </div>
                    
                </div>                     
            </div> 
        </div>      
    </div>
</template>
<script>
export default {}
</script>
    