import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { SkinCollection, Weapon, WeaponSkin, WeaponType } from '~/types/Weapon'

interface IState {
	vpPrice: number
	radPrice: number
	weaponTypes: WeaponType[]
	weapons: Weapon[]
	collections: SkinCollection[]
	skins: WeaponSkin[]
}

export const state = (): IState => ({
	vpPrice: 549 / 500, // 500 VP for 549 Euros ct ====> 1.1ct le VP
	radPrice: 1600 / 20, // 20 RP for 1600 VP ====> 80VP le RadPoint
	weaponTypes: [],
	weapons: [],
	collections: [],
	skins: [],
})

export const getters: GetterTree<IState, IState> = {
	weapon: state => (id: number|string) => state.weapons.find(item => item.id === id || item.slug === id),
	weapon_skin: state => (weapon: number|string, skin: number|string) => state.skins.find(item => (item.id === skin || item.slug === skin) && (item.weapon.slug === weapon || item.weapon.id === weapon)),
	type: state => (id: number|string) => state.weaponTypes.find(item => item.id === id || item.slug === id),
	collection: state => (id: number|string) => state.collections.find(item => item.id === id || item.slug === id),
	skin: state => (id: number|string) => state.skins.find(item => item.id === id || item.slug === id),
	vpPriceinEuro: state => (price: number) => price * state.vpPrice * 100,
	radPriceinEuro: state => (price: number) => price * state.vpPrice * 100 * state.radPrice,
}

export const mutations: MutationTree<IState> = {
	SET_WEAPON_TYPES (state: IState, weaponTypes: WeaponType[]) {
		state.weaponTypes = weaponTypes
	},
	SET_WEAPONS (state: IState, weapons: Weapon[]) {
		state.weapons = weapons
	},
	SET_COLLECTIONS (state: IState, collections: SkinCollection[]) {
		state.collections = collections
	},
	SET_SKINS (state: IState, skins: WeaponSkin[]) {
		state.skins = skins
	},
}

export const actions: ActionTree<IState, IState> = {
	async FETCH_WEAPON_TYPES ({ commit }) {
		try {
			commit('SET_WEAPON_TYPES', await this.$strapi.find('weapon-types'))
		} catch (e) {	}
	},
	async FETCH_WEAPONS ({ commit }) {
		try {
			commit('SET_WEAPONS', await this.$strapi.find('weapons'))
		} catch (e) {	}
	},
	async FETCH_COLLECTIONS ({ commit }) {
		try {
			commit('SET_COLLECTIONS', await this.$strapi.find('skin-collections'))
		} catch (e) {	}
	},
	async FETCH_SKINS ({ commit }) {
		try {
			commit('SET_SKINS', await this.$strapi.find('weapon-skins'))
		} catch (e) {	}
	},

	async nuxtServerInit ({ dispatch }) {
		await Promise.all([
			dispatch('FETCH_WEAPON_TYPES'),
			dispatch('FETCH_WEAPONS'),
			dispatch('FETCH_COLLECTIONS'),
			dispatch('FETCH_SKINS'),
		])
	},
}
