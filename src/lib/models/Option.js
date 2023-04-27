import BaseModel from "$lib/models/BaseModel"

export default class Option extends BaseModel {

	/** @type string */ name
	/** @type number */ value

	constructor(attrs) {
		super()
		Object.assign(this, attrs)
	}

}
