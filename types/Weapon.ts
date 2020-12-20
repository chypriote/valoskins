/* eslint-disable no-use-before-define */
export enum Rarity {
	STANDARD = 'standard',
	SELECT = 'select',
	DELUXE = 'deluxe',
	PREMIUM = 'premium',
	ULTRA = 'ultra',
	EXCLUSIVE = 'exclusive',
}

export enum Unlocks {
	BATTLEPASS = 'battlepass',
	OTHER = 'other'
}

export enum Upgrade {
	VISUALS = 'visuals',
	ANIMATION = 'animation',
	FINITION = 'finition',
	CHROMA = 'chroma',
}

export type Weapon = {
	id: number
	name: string
	slug: string
	price: number
	weaponType: WeaponType
	type: WeaponType
	created_at: Date
	updated_at: Date
	picture: UploadedPicture
	weapon_skins: WeaponSkin[]
}

export type WeaponType = {
	id: number
	name: string
	slug: string
	created_at: Date
	updated_at: Date
	picture: UploadedPicture
	weapons: Weapon[]
}

export type UploadedPicture = {
	id: number
	name: string
	alternativeText: string
	caption: string
	width: number
	height: number
	url: string
}

export type WeaponSkin = {
	id: number
	name: string
	slug: string
	weapon: Weapon
	pack: SkinPack
	price: number
	rarity: Rarity
	unlockable: boolean
	available: boolean
	picture: UploadedPicture
	skin_upgrades: SkinUpgrade[]
	skin_collection: SkinCollection
}
export type SkinUpgrade = {
	id: number
	skin: WeaponSkin
	name: string
	cost: number
	type: Upgrade
	media: UploadedPicture
	level: number
	displayText: string
}

export type SkinPack = {
	id: number
	name: string
	skins: BundledSkin[]
	price: number
}

export type BundledSkin = {
	skin: WeaponSkin
	pack: SkinPack
	price: number
}

export type Unlockable = {
	skin: WeaponSkin
	unlocks: Unlocks
}
export type UnlockableXp = {
	xp: number
	pass: BattlePass
	tier: number
}
export type BattlePass = {
	name: string
	tiers: number
	skins: WeaponSkin[]
}

export type SkinCollection = {
	id: number
	weapon_skins: WeaponSkin[]
	name: string
	added: Date
	slug: string
	picture: UploadedPicture
}
