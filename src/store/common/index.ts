import { store, hotModuleUnregisterModule } from '/@/store';
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import { getUsername } from '/@/api';

const NAME = 'common';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class CommonStore extends VuexModule {
    username = 'demo';
    age = 18;

    get userInfo(): string {
        return `${this.username} - ${this.age}`;
    }

    @Mutation
    updateUsername(data: string) {
        this.username = data;
    }

    @Mutation
    updateAge(data: number) {
        this.age = data;
    }

    @Action({ commit: 'updateUsername' })
    async fetchUsername(name: string) {
        try {
            return await getUsername(name);
        } catch {
            return '';
        }
    }
}

export const commonStore = getModule<CommonStore>(CommonStore);
