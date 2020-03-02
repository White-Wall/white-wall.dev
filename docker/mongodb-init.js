/* eslint-disable no-undef */
db = db.getSiblingDB("factor")

db.createUser({
	user: "factor",
	pwd: "factor",
	roles: [
		{
			role: "readWrite",
			db: "factor"
		}
	]
})
