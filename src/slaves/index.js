/**
 * @file slave for use swan-core, swan-api, swan-components
 * @author sunweinan(sunweinan@baidu.com)
 */
import Slave from '@super-fe/swan-core/dist/box/slaves/index';
import swaninterface from '@baidu/swan-api';
import * as swanComponents from '@baidu/swan-components';
import inform from './inform';
new Log(window, swaninterface, 'slave');
new Slave(window, swaninterface, swanComponents);

/**
 * 前端通知端上预加载已经完成，端上拿这个事件与pageFinished事件做对比，谁先到用谁
 */
inform();

