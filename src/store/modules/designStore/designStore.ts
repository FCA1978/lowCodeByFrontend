import { defineStore } from 'pinia'
import { theme } from '@/settings/designSetting'
import { DesignStateType } from './designStore.d'
import { setLocalStorage, getLocalStorage } from '@/utils'
import { StorageEnum } from '@/enums/storageEnum'
import { ThemeEnum } from '@/enums/styleEnum'

const { GO_DESIGN_STORE } = StorageEnum

const { darkTheme, appTheme, appThemeList } = theme

const storageDesign = getLocalStorage(GO_DESIGN_STORE)

export const useDesignStore = defineStore({
  id: 'useDesignStore',
  state: (): DesignStateType =>
    storageDesign || {
      // 是否暗黑
      darkTheme,
      // 主题名称
      themeName: (darkTheme && ThemeEnum.dark) || ThemeEnum.light,
      // 颜色色号
      appTheme,
      // 颜色列表
      appThemeList,
    },
  getters: {
    getDarkTheme(e): boolean {
      return this.darkTheme
    },
    getAppTheme(): string {
      return this.appTheme
    },
    getAppThemeList(): string[] {
      return this.appThemeList
    }
  },
  actions: {
    changeTheme(): void {
      this.darkTheme = !this.darkTheme
      this.themeName = this.darkTheme ? ThemeEnum.dark : ThemeEnum.light
      setLocalStorage(GO_DESIGN_STORE, this.$state)
    },
  }
})