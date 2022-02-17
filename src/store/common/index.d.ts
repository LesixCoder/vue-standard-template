import { VuexModule } from 'vuex-module-decorators';
declare class CommonStore extends VuexModule {
    username: string;
    age: number;
    get userInfo(): string;
    updateUsername(data: string): void;
    updateAge(data: number): void;
    fetchUsername(name: string): Promise<unknown>;
}
export declare const commonStore: CommonStore;
export {};
