import Vue from 'vue';
import {
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    MessageBox,
    Button
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)

Vue.prototype.$confirm = MessageBox.confirm;