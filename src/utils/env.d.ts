import type { GlobEnvConfig } from '../types/config';
export declare const getGlobEnvConfig: () => GlobEnvConfig;
/**
 * @description: 开发模式
 */
export declare const devMode = 'development';
/**
 * @description: 生产模式
 */
export declare const prodMode = 'production';
/**
 * @description: 获取环境变量
 * @returns:
 * @example:
 */
export declare const getEnv: () => string;
/**
 * @description: 是否是开发模式
 * @returns:
 * @example:
 */
export declare const isDevMode: () => boolean;
/**
 * @description: 是否是生产模式模式
 * @returns:
 * @example:
 */
export declare const isProdMode: () => boolean;
/**
 * @description: 是否开启mock
 * @returns:
 * @example:
 */
export declare const isUseMock: () => boolean;
/**
 * @description: 是否开启vuex log
 * @returns:
 * @example:
 */
export declare const isVuexLog: () => boolean;
