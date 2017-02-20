<template>
    <div v-show="show" :transition="transition">
        <div class="popup" @click.self="clickMask">
            <div class="popup-dialog" :class="modalClass">
                <div class="popup-content">
                    <!--Header-->
                    <div class="popup-header">
                        <slot name="header">
                            <a type="button" class="close" @click="cancel">x</a>
                            <h2 class="modal-title">
                                <slot name="title">
                                    {{title}}
                                </slot>
                            </h2>
                        </slot>
                    </div>
                    <!--Container-->
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <!--Footer-->
                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn btn-warning" type="button" :class="cancelClass" @click="cancel" name="cancelText">{{cancelText}}</button>
                            <button class="btn btn-success" type="button" :class="okClass" @click="ok" name="okText">{{okText}}</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop in"></div>
    </div>
</template>
<script>
    /**
     * Bootstrap Style Modal Component for Vue
     * Depend on Bootstrap.css
     */
     export default {
        props: {
            show: {
                type: Boolean,
                twoWay: true,
                default: false
            },
            title: {
                type: String,
                default: 'popup'
            },
            small: {
                type: Boolean,
                default: false
            },
            large: {
                type: Boolean,
                default: false
            },
            full: {
                type: Boolean,
                default: false
            },
            // 为true时无法通过点击遮罩层关闭modal
            force: {
                type: Boolean,
                default: false
            },
            // 自定义组件transition
            transition: {
                type: String,
                default: 'popup'
            },
            // 确认按钮text
            okText: {
                type: String,
                default: 'OK'
            },
            // 取消按钮text
            cancelText: {
                type: String,
                default: 'Cancel'
            },
            // 确认按钮className
            okClass: {
                type: String,
                default: 'btn blue'
            },
            // 取消按钮className
            cancelClass: {
                type: String,
                default: 'btn red btn-outline'
            },
            // 点击确定时关闭Modal
            // 默认为false，由父组件控制prop.show来关闭
            closeWhenOK: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                duration: null
            };
        },
        computed: {
            modalClass () {
                return {
                    'modal-lg': this.large,
                    'modal-sm': this.small,
                    'modal-full': this.full
                }
            }
        },
        mounted () {
            if (this.show) {
                document.body.className += ' modal-open';
            }
        },
        beforeDestroy () {
            document.body.className = document.body.className.replace(/\s?modal-open/, '');
        },
        watch: {
            show (value) {
                // 在显示时去掉body滚动条，防止出现双滚动条
                if (value) {
                    document.body.className += ' modal-open';
                }
                // 在modal动画结束后再加上body滚动条
                else {
                    if (!this.duration) {
                        this.duration = window.getComputedStyle(this.$el)['transition-duration'].replace('s', '') * 1000;
                    }
                    window.setTimeout(() => {
                        document.body.className = document.body.className.replace(/\s?modal-open/, '');
                    }, this.duration || 0);
                }
            }
        },
        methods: {
            ok () {
                this.$emit('ok');
                if (this.closeWhenOK) {
                    // this.show = false;
                }
            },
            cancel () {
                this.$emit('cancel');
                // this.show = false;
            },
            // 点击遮罩层
            clickMask () {
                if (!this.force) {
                    this.cancel();
                }
            }
        }
     };
</script>

<style scoped rel="stylesheet/stylus">
    .popup {
        position: fixed;
        top: 50%;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1050;
        display: block;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        outline: 0;
    }
    .popup  h2 {
        font-size:16px
    }
    .modal-transition {
        transition: all .6s ease;
    }
    .popup-content {
        position: relative;
        bottom:0;
        width:100%;
        height:340px;
        max-height:50%;
        background-color: #fff;
        outline: 0;
        border:none;
        overflow:scroll;
    }
    .modal-leave {
        border-radius: 1px !important;
    }
    .modal-transition .popup-dialog, .modal-transition .modal-backdrop {
        transition: all .5s ease;
    }
    .modal-enter .popup-dialog, .modal-leave .popup-dialog {
        opacity: 0;
        transform: translateY(-30%);
    }
    .modal-enter .modal-backdrop, .modal-leave .modal-backdrop {
        opacity: 0;
    }
    .popup-header {
        position:fixed;
        width:100%;
        height:44px;
        display:block;
        padding: 10px 35px;
        min-height: 16.43px;
        background-color:#fff;
        z-index:15;
    }
    .modal-body {
        overflow:scroll;
        padding: 15px 10px;
    }
    .modal-title {
        text-align: left;
        font-family: "微软雅黑"
    }
    .modal-footer button {
        padding:10px 20px;
    }
@media only screen and (max-width: 320px){
    .popup {
        top: 46%;
        height: 360px;
        }
}



</style>