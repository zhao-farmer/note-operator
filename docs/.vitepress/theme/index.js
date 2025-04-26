import DefaultTheme from 'vitepress/theme'
// 导入设置的样式
import './custom.css'

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css'

Fancybox.bind('[data-fancybox="gallery"]');


export default{
    ...DefaultTheme,
}